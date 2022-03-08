import React, { useState } from "react";
import Link from "next/link";
//import Dropdown from "components/SubComponents/Dropdown";
import styled from "@emotion/styled";
import {
  Flex,
  Container,
  IconButton,
  useColorMode,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { IconsMoon, IconsSun } from "svg";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

export const NavItem = () => {
  const [clicked, setClicked] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();

  const refOnClicke = () => setClicked(!clicked);

  const router = useRouter();

  const navLinks = [
    {
      name: `HOME`,
      path: "/",
    },
    {
      name: `ABOUT ME`,
      path: "/about",
    },
    {
      name: `PROJECTS`,
      path: "/projects",
    },
  ];

  return (
    <>
      <Flex pos="fixed" zIndex="99" pt="40px" pr="16px" w="100%">
        <Container maxW="8xl">
          <Flex justify="end">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ sacale: 0.9 }}
              onClick={refOnClicke}
            >
              {clicked || <MenuOC size="lg"> MENU </MenuOC>}
            </motion.div>
          </Flex>
        </Container>
      </Flex>

      {clicked && (
        <ContainerNav>
          <Container maxW="8xl">
            <Flex alignItems="center" justifyContent="end" pt="40px" pr="16px">
              <IconButton
                mr="10"
                icon={
                  colorMode !== "light" ? (
                    <IconsSun height={30} width={30} />
                  ) : (
                    <IconsMoon height={30} width={30} />
                  )
                }
                onClick={toggleColorMode}
              />
              {/* <Dropdown /> */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ sacale: 0.9 }}
                onClick={refOnClicke}
              >
                {!clicked || <MenuOC size="lg"> CLOSE </MenuOC>}
              </motion.div>
            </Flex>
          </Container>

          <Nav>
            {navLinks.map((link, index) => {
              return (
                <motion.ul
                  key={index}
                  variants={variants}
                  initial="hidden"
                  animate="show"
                >
                  <Link href={link.path} scroll={true}>
                    <a onClick={refOnClicke}>
                      <NavLink
                        colorlink={router.asPath === link.path ? true : false}
                      >
                        <Heading size="3xl">{link.name}</Heading>
                      </NavLink>
                    </a>
                  </Link>
                </motion.ul>
              );
            })}
          </Nav>
        </ContainerNav>
      )}
    </>
  );
};

const ContainerNav = styled.div`
  position: fixed;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: ${() =>
    useColorModeValue("rgba(235, 235, 235, 0.96)", "rgba(26, 26, 26, 0.96)")};
  transition: all 0.5s ease;
`;

const Nav = styled.nav`
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  row-gap: 15px;
  justify-content: center;
`;

const NavLink = styled.li`
  list-style: none;
  margin: 15px;
  font-size: 28px;
  border-bottom: ${(props) => props.colorlink && "10px solid"};
  border-image: linear-gradient(to right, #7036b3, #cf3860);
  border-image-slice: 1;
`;

const MenuOC = styled(Heading)`
  cursor: pointer;
`;
