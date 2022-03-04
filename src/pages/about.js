import Head from "next/head";

import {
  Flex,
  Image,
  Heading,
  Center,
  Button,
  GridItem,
  Grid,
  Container,
  Tooltip,
  Text,
  Link,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

import { dataimg1, dataimg2 } from "data/dataImg";
import ContentAbout from "components/SectionHomePage/about/contentAbout";
import TimeLine from "components/SectionHomePage/about/timeLine";
import TopicPage from "components/SubComponents/TopicPage";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>

      <main>
        <div style={{ position: "relative", height: "35vh" }}>
          <Center alignItems="center" height="35vh">
            <TopicPage title={t("about me")} />
          </Center>
        </div>

        <div style={{ position: "relative" }}>
          <Container maxW="8xl">
            <Flex
              justify="space-around"
              direction={{ base: "column", md: "row" }}
            >
              <Heading
                as="span"
                size="xl"
                lineHeight={1.3}
                letterSpacing="0.2em"
              >
                {t("iam")}
              </Heading>

              <ContentAbout />
            </Flex>

            <Flex justify="center" direction="column">
              <Center mb={10} mt={"10em"}>
                <Heading
                  as="span"
                  size="xl"
                  lineHeight={1.3}
                  letterSpacing="3px"
                >
                  {t("skills")}
                </Heading>
              </Center>

              <Heading
                size="md"
                mb="10px"
                letterSpacing="2px"
                fontWeight={"600"}
              >
                {t("EXPERIENCED")}
              </Heading>

              <Grid
                templateColumns={{
                  base: "repeat(3, 1fr)",
                  md: "repeat(5, 1fr)",
                  lg: "repeat(10, 1fr)",
                }}
                gap={5}
                justifyItems="center"
                w="100%"
                mt="10px"
                mb="10px"
              >
                {dataimg1.map((item, index) => (
                  <GridItem key={index}>
                    <Tooltip label={item.alt}>
                      <Image
                        src={item.img}
                        alt={item.alt}
                        height={45}
                        m="10px"
                        _hover={{
                          transform: "scale(1.2)",
                          transition: "0.4s",
                        }}
                      />
                    </Tooltip>
                  </GridItem>
                ))}
              </Grid>

              <Heading
                size="md"
                mb="10px"
                letterSpacing="2px"
                fontWeight={"600"}
              >
                {t("FAMILIAR")}
              </Heading>
              <Grid
                templateColumns={{
                  base: "repeat(3, 1fr)",
                  md: "repeat(5, 1fr)",
                  lg: "repeat(10, 1fr)",
                }}
                gap={5}
                justifyItems="center"
                w="100%"
                mt="10px"
                mb="10px"
              >
                {dataimg2.map((item, index) => (
                  <GridItem key={index}>
                    <Tooltip label={item.alt}>
                      <Image
                        src={item.img}
                        alt={item.alt}
                        height={45}
                        m="10px"
                        _hover={{
                          transform: "scale(1.2)",
                          transition: "0.4s",
                        }}
                      />
                    </Tooltip>
                  </GridItem>
                ))}
              </Grid>
            </Flex>

            <Center mt="10em" mb={10}>
              <Heading as="span" size="xl" lineHeight={1.3} letterSpacing="3px">
                {t("experience")}
              </Heading>
            </Center>

            <TimeLine />
          </Container>

          <div
            style={{ position: "relative", height: "35vh", marginTop: "12em" }}
          >
            <BoxImg />
            <Center h="35vh">
              <Link
                href="pdf/javscript_the_complete_referrence.pdf"
                //download
                target="_blank"
              >
                <Button size="lg" variant="ghost" border="2px">
                  {t("Open CV")}
                </Button>
              </Link>
            </Center>
          </div>
        </div>
      </main>
    </>
  );
}

const BoxImg = styled.div`
  background-image: 
  /* linear-gradient(
      225deg,
      rgba(255, 255, 255, 0.9) 50%,
      transparent 50%
    ), */ url("static/imgabout.jpg");
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.5;
`;
