import React from "react";
import { Flex, Box, Container, Button, Center } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import ContentAbout from "./contentAbout";
import NextLink from "next/link";
import TopicPage from "components/SubComponents/TopicPage";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container maxW="8xl">
        <Flex
          pos="relative"
          justifyContent="space-evenly"
          h="100vh"
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          columnGap={"1.3em"}
          rowGap={"1.3em"}
        >
          <BgAbout />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Flex flexDirection="column">
              <Center>
                <TopicPage title={t("about me")} />
              </Center>
              <Box mt="2em" mb="2em">
                <ContentAbout />
              </Box>
              <NextLink href="/about">
                <Button colorScheme="black" variant="outline" size="lg">
                  Learn more
                </Button>
              </NextLink>
            </Flex>
          </motion.div>
        </Flex>
      </Container>
    </>
  );
};

export default AboutMe;

const BgAbout = styled.div`
  background-image: url("/static/imgabout.jpg");
  height: 50%;
  width: 50%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: 0.7;
`;
