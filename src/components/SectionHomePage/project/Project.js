import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useColorModeValue, Flex, Box, Center, Button } from "@chakra-ui/react";
import Card from "components/SubComponents/Card";
import { motion } from "framer-motion";
import NextLink from "next/link";

const TopicPage = dynamic(() => import("components/SubComponents/TopicPage"));

const Project = ({ pinnedItems }) => {
  const [isVisible, setIsVisible] = useState(false);

  function over(e) {
    setIsVisible(true);
  }
  function out(e) {
    setIsVisible(false);
  }

  return (
    <>
      <Center height="35vh">
        <TopicPage title={"PROJECTS"} />
      </Center>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          },
          hidden: {
            y: 25,
            opacity: 0,
          },
        }}
      >
        <div
          style={{
            position: "relative",
            height: "100vh",
            width: "100%",
          }}
        >
          <div style={{ overflowX: "hidden" }}>
            <Box
              bgGradient="linear-gradient(to right, #7036B3 0%, #CF3860 100%)"
              pos="absolute"
              padding="5em"
              onMouseOver={over}
              onMouseOut={out}
              width="100%"
              shadow="2xl"
            >
              <Flex
                justifyContent="space-evenly"
                minW="max-content"
                transform="translateX(-150.005px)"
                columnGap="2em"
                alignItems="center"
              >
                <Card pinnedItems={pinnedItems} w="500px" />
              </Flex>

              <NextLink href="/projects">
                <Box
                  display={isVisible ? "block" : "none"}
                  width="100%"
                  height="100%"
                  pos={"absolute"}
                  left="0"
                  top="0"
                  cursor={"pointer"}
                  _hover={{
                    transition: "0.3s all",
                    bgColor: useColorModeValue(
                      "rgba(235, 235, 235, 0.86)",
                      "rgba(26, 26, 26, 0.86)"
                    ),
                  }}
                >
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    height={"100%"}
                  >
                    <Button border="2px" variant="solid" size="lg">
                      Learn more
                    </Button>
                  </Flex>
                </Box>
              </NextLink>
            </Box>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
