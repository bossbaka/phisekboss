import React from "react";
import { Text, Flex, Heading, Link, Image, Container } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Icon } from "@chakra-ui/react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

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
  const { t } = useTranslation();

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
          <motion.div variants={sentence} initial="hidden" animate="visible">
            <Heading
              as="h2"
              size="2xl"
              ml={{ base: "0", md: "2em" }}
              lineHeight={1.3}
            >
              {t("hi")
                .split("")
                .map((char, index) => (
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
              {t("frontend")
                .split("")
                .map((char, index) => (
                  <motion.span key={char + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
            </Heading>
          </motion.div>

          <Bg />

          <ContactSocial>
            <Flex direction="column" align="center" rowGap={"5px"}>
              <TextLink>{t("link")}</TextLink>
              {dataIconsLink.map((item, index) => (
                <Link
                  key={index}
                  href={item.linkhref}
                  target="_blank"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
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

const Bg = styled(Image)`
  background-image: url("static/home.jpg");
  width: 65%;
  height: 65%;
  background-position: 50% 48%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 0;
  z-index: -1;
  opacity: 0.7;
`;

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
