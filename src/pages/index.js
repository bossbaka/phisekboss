import Head from "next/head";
import dynamic from "next/dynamic";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ReactPageScroller from "react-page-scroller";
import { useState } from "react";

const Home = dynamic(() => import("components/SectionHomePage/home/Home"));
const AboutMe = dynamic(() =>
  import("components/SectionHomePage/about/AboutMe")
);
const Project = dynamic(() =>
  import("components/SectionHomePage/project/Project")
);

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "bossbaka") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  id
                  url
                  description
                  languages(first: 6) {
                    edges {
                      node {
                        name
                        color
                      }
                    }
                  }
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);

  return {
    props: {
      pinnedItems,
    },
  };
}

export default function Index({ pinnedItems }) {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  // const handleBeforePageChange = (number) => {
  //   number;
  // };

  const getPagesNumbers = (number) => {
    const pageNumbers = [];

    for (let i = 0; i <= 2; i++) {
      pageNumbers.push(
        <>
          <style global jsx>
            {`
              .icon-scroller {
                position: fixed;
                z-index: 100;
                top: 50%;
                right: 0;
                opacity: 1;
                transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                -webkit-transform: translate3d(0, -50%, 0);
                margin-right: 10px;
              }
              .icon-scroller li {
                display: block;
                width: 14px;
                height: 13px;
                margin: 7px;
                position: relative;
              }
              .icon-scroller span {
                border-radius: 100%;
                position: absolute;
                z-index: 1;
                height: 8px;
                width: 8px;
                border: 1px solid #7036b3;
                background: transform;
                cursor: pointer;
              }
              .active {
                background: #7036b3;
              }
              .hidenum {
                position: absolute;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
              }
            `}
          </style>

          <ul>
            <li>
              <span className="hidenum">{i}</span>
              <span
                className={`${currentPage === i ? "active" : null}`}
                onClick={() => handlePageChange(i - 0)}
              />
            </li>
          </ul>
        </>
      );
    }

    return [...pageNumbers];
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        //onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Home />
        <AboutMe />
        <Project pinnedItems={pinnedItems} />
      </ReactPageScroller>

      <div className="icon-scroller">{getPagesNumbers()}</div>
    </>
  );
}
