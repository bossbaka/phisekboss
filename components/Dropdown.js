import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../utils/i18n";

import styled from "styled-components";
import Image from "next/image";
import { IconsTranslateWord } from "../public/svg";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
} from "@chakra-ui/react";

const options = ["ENGLISH", "JAPANESE", "THAILAND"];

export default function Dropdown() {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || (
            <>
              <IconsTranslateWord />{" "}
              <span style={{ display: "inlineBlock" }}> LANGUAGE</span>
            </>
          )}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((item, index) => {
                return (
                  <>
                    <ListItem key={index} onClick={onOptionClicked(item)}>
                      {item}
                    </ListItem>
                    {index === options.length - 1 || <Divider />}
                  </>
                );
              })}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>

      <Menu>
        <MenuButton as={Button} leftIcon={<IconsTranslateWord />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem icon={<IconsTranslateWord />}>New Tab</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

const DropDownContainer = styled.div`
  //width: 10.5em;
  //margin: 0 auto;
`;
const DropDownHeader = styled.div`
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  border-radius: 10px;
  border: 1px solid var(--color-border-dropdown);
  box-shadow: 0px 3px 6px var(--color-boxshadow-dropdown);
  color: var(--color-text-primary);
  background: var(--color-bg-dropdown);
  cursor: pointer;
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled.ul`
  padding: 0;
  margin-top: 5px;
  background: var(--color-bg-dropdown);
  border-radius: 10px;
  border: 1px solid var(--color-border-dropdown);
  box-shadow: 0px 3px 6px var(--color-boxshadow-dropdown);
  box-sizing: border-box;
  color: var(--color-text-primary);
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  &:first-child {
    padding-top: 0.6em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.5em;
  padding-left: 1em;
  &:hover {
    color: var(--color-bg-toggle);
  }
`;

const Divider = styled.hr`
  background: transparent;
  border: 1px solid var(--color-divider);
`;
