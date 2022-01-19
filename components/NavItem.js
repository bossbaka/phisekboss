import React, { useState } from "react";
import Link from "next/link";
import { IconsBar, IconsTimes } from "./../public/svg";
import Dropdown from "./Dropdown";
import { useTranslation } from "react-i18next";
import "../utils/i18n";
import Toggle from "./Toggle";
import styled from "styled-components";

export const NavItem = () => {
  const [clicked, setClicked] = useState(false);

  const refOnClicke = () => setClicked(!clicked);
  const { t } = useTranslation();

  const navLinks = [
    {
      name: `${t("home")}`,
      path: "/",
    },
    {
      name: `${t("profile")}`,
      path: "/profile",
    },
    {
      name: `${t("skills")}`,
      path: "/skills",
    },
    {
      name: `${t("projects")}`,
      path: "/projects",
    },
    {
      name: `${t("experience")}`,
      path: "/experience",
    },
  ];

  return (
    <>
      <div style={{ float: "right" }} onClick={refOnClicke}>
        {clicked || <IconsBar />}
      </div>

      {clicked && (
        <ContainerNav>
          <Head>
            <div>
              <Toggle />
            </div>
            <div>
              <Dropdown />
            </div>
            <div onClick={refOnClicke}>
              {!clicked ? <IconsBar /> : <IconsTimes />}
            </div>
          </Head>
          <Nav>
            {navLinks.map((link, index) => {
              return (
                <ul className="nav-menu" key={index}>
                  <Link href={link.path}>
                    <a className="nav-links" onClick={refOnClicke}>
                      <li className={`${link.path === "/" && "testja"}`}>
                        {link.name.toUpperCase()}
                      </li>
                    </a>
                  </Link>
                </ul>
              );
            })}
          </Nav>
        </ContainerNav>
      )}
    </>
  );
};

const ContainerNav = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 99;
  background-color: var(--color-bg-nav);
  width: 100%;
  height: 100%;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  div:last-child {
    margin-left: auto;
  }
`;

const Nav = styled.nav`
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`;
