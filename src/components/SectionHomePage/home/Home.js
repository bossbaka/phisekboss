import React from "react";
import { Text, Flex, Heading, Link, Container } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Icon } from "@chakra-ui/react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "components/Image";
import MyImage from "/public/static/home.jpg";

const Home = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const dataIconsLink = [
    {
      icons: FaEnvelope,
      linkhref: "mailto:phisek.boss@gmail.com",
    },
    {
      icons: FaGithub,
      linkhref: "https://github.com/bossbaka",
    },
  ];

  return (
    <>
      <Container maxW="8xl">
        <Flex align="center" pos="relative" w="100%" h="100vh">
          <motion.div
            variants={sentence}
            initial="hidden"
            animate="visible"
            style={{ zIndex: "99", position: "absolute" }}
          >
            <Heading
              as="h2"
              size="2xl"
              ml={{ base: "0", md: "2em" }}
              lineHeight={1.3}
            >
              {"Hi, I’m Boss".split("").map((char, index) => (
                <motion.span key={char + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </Heading>

            <Heading
              bgGradient="linear(to right, #7036B3 0%, #CF3860 100%)"
              bgClip="text"
              as="h2"
              size="2xl"
              ml={{ base: "0", md: "2em" }}
              lineHeight={1.3}
            >
              {"a Front End Developer".split("").map((char, index) => (
                <motion.span key={char + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </Heading>
          </motion.div>

          <div
            style={{ right: "0", position: "absolute", opacity: "0.7" }}
            className="displayimages"
          >
            <Image
              src={MyImage}
              alt="bg"
              width="828px"
              height="552px"
              placeholder="blur"
            />
          </div>

          <ContactSocial>
            <Flex direction="column" align="center" rowGap={"5px"}>
              <TextLink>{"Link"}</TextLink>
              {dataIconsLink.map((item, index) => (
                <Link
                  key={index}
                  href={item.linkhref}
                  target="_blank"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  aria-label="[link]"
                >
                  <Icon as={item.icons} boxSize="33px" />
                </Link>
              ))}
            </Flex>
          </ContactSocial>
        </Flex>
      </Container>
    </>
  );
};

export default Home;

const ContactSocial = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: 16px;
  margin-bottom: 2em;
`;

const TextLink = styled(Text)`
  writing-mode: vertical-rl;
  transform: scale(-1);
  margin-bottom: 1em;
`;
