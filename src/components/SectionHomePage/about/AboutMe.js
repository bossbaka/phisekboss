import React from "react";
import dynamic from "next/dynamic";
import { Flex, Box, Container, Button, Center } from "@chakra-ui/react";
import ContentAbout from "./contentAbout";
import NextLink from "next/link";
import { motion } from "framer-motion";
import Image from "components/Image";
import MyImage from "/public/static/imgabout.jpg";

const TopicPage = dynamic(() => import("components/SubComponents/TopicPage"));

const AboutMe = () => {
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
          <div style={{ opacity: "0.7" }} className="displayimages">
            <Image
              src={MyImage}
              alt="about"
              width="640px"
              height="433px"
              placeholder="blur"
            />
          </div>
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
            <Flex flexDirection="column" style={{ maxWidth: "550px" }}>
              <Center>
                <TopicPage title="ABOUT ME" />
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
