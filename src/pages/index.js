import Head from "next/head";
import AboutMe from "components/SectionHomePage/about/AboutMe";
import Project from "components/SectionHomePage/project/Project";
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "components/SectionHomePage/home/Home";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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
  console.log(pinnedItems);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <style global jsx>
        {`
          #fp-nav.fp-left {
            z-index: 10 !important;
          }
          #fp-nav ul li a span,
          .fp-slidesNav ul li a span {
            background: #cf3860 !important;
          }
        `}
      </style>

      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_LICENSE_KEY"}
        scrollingSpeed={1000} /* Options here */
        navigation
        navigationPosition="left"
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Home />
              </div>
              <div className="section">
                <AboutMe />
              </div>
              <div className="section">
                <Project pinnedItems={pinnedItems} />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
