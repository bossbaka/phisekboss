import React from "react";
import { Heading } from "@chakra-ui/react";

const TopicPage = ({ title }) => {
  return (
    <>
      <Heading
        bgGradient="linear(to right, #7036B3 0%, #CF3860 100% )"
        bgClip="text"
        as="span"
        size="2xl"
        lineHeight={1.3}
        position={"relative"}
        textAlign="center"
      >
        {title}
      </Heading>
    </>
  );
};

export default TopicPage;
