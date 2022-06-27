import React from "react";
import {
  Heading,
  Center,
  Box,
  Badge,
  Link,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Card = ({ pinnedItems, variants, w }) => {
  const MotionBox = motion(Box);

  if (!pinnedItems || pinnedItems.length <= 0) {
    return <Center>Empty</Center>;
  }

  return (
    <>
      {pinnedItems.map((item, index) => {
        return (
          <Link href={item.url} isExternal={true} key={index}>
            <MotionBox
              role={"group"}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              style={{ cursor: "pointer" }}
              variants={variants}
              w={w}
            >
              <Stack pt={10} align={"center"}>
                <Heading fontSize={"2xl"} fontWeight={500} isTruncated>
                  {item.name}
                </Heading>
                <Text
                  p={5}
                  color={"gray.500"}
                  fontSize={"md"}
                  wordBreak="break-word"
                  minH={"120px"}
                >
                  {item.description}
                </Text>
              </Stack>

              <Box p="6" minH={"100px"}>
                {item.languages.edges.map((subitem, index) => (
                  <Badge borderRadius="full" px="2" m="1" key={index}>
                    {subitem.node.name}
                  </Badge>
                ))}
              </Box>
            </MotionBox>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
