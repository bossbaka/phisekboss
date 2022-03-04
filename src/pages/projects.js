import Head from "next/head";
import { Center, Box, Container, SimpleGrid } from "@chakra-ui/react";
import Card from "components/SubComponents/Card";

import { useTranslation } from "react-i18next";
import TopicPage from "components/SubComponents/TopicPage";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { motion } from "framer-motion";

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

export default function Projects({ pinnedItems }) {
  const { t } = useTranslation();

  const MotionSimpleGrid = motion(SimpleGrid);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const teaserVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <main>
        <Container maxW="8xl">
          <Center height="35vh">
            <TopicPage title={t("projects")} />
          </Center>

          <Box mb="10em">
            <MotionSimpleGrid
              initial="hidden"
              animate="show"
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={5}
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <Card pinnedItems={pinnedItems} variants={teaserVariants} />
            </MotionSimpleGrid>
          </Box>
        </Container>
      </main>
    </>
  );
}
