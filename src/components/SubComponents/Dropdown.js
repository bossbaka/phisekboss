import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "utils/i18n";
import styled from "@emotion/styled";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  IconsJapan,
  IconsThailand,
  IconsUnitedStates,
  IconsWebTranslate,
} from "svg";

const options = [
  {
    icons: <IconsUnitedStates width={30} height={30} />,
    trans: "ENGLISH",
  },
  // {
  //   icons: <IconsJapan width={30} height={30} />,
  //   trans: "JAPANESE",
  // },
  {
    icons: <IconsThailand width={30} height={30} />,
    trans: "THAILAND",
  },
];

export default function Dropdown() {
  const { t, i18n } = useTranslation();

  const [selectedOption, setSelectedOption] = useState({
    icons: <IconsWebTranslate width={30} height={30} />,
    trans: <>{t("languages")}</>,
  });

  const onOptionClicked = (valuetrans, valueicons) => () => {
    setSelectedOption({
      icons: valueicons,
      trans: valuetrans,
    });
    i18n.changeLanguage(valuetrans);
  };

  return (
    <Menu>
      <StyledMenuButton
        mr="10"
        ml="5px"
        as={Button}
        leftIcon={selectedOption.icons}
      >
        <Heading size="md" istruncated="true">
          {selectedOption.trans}
        </Heading>
      </StyledMenuButton>

      <MenuList>
        {options.map((item, index) => (
          <div key={index}>
            <MenuItem
              isDisabled={selectedOption.trans === item.trans ? true : false}
              onClick={onOptionClicked(item.trans, item.icons)}
              icon={item.icons}
            >
              <Text fontSize="md"> {item.trans}</Text>
            </MenuItem>
            {index === options.length - 1 || <MenuDivider />}
          </div>
        ))}
      </MenuList>
    </Menu>
  );
}

const StyledMenuButton = styled(MenuButton)`
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  -webkit-padding-start: 0.8rem;
  padding-inline-start: 0.8rem;
  -webkit-padding-end: 0.8rem;
  padding-inline-end: 0.8rem;
  text-align: left;
`;
