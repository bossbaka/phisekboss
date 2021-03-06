import React from "react";
import styled from "@emotion/styled";
import { useColorMode } from "@chakra-ui/react";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <ToggleButton type="button" onClick={toggleColorMode}>
        <ToggleThumb activeTheme={colorMode} />
        <span>🌛</span>
        <span>🌞</span>
      </ToggleButton>
    </>
  );
};

export default Toggle;

const ToggleButton = styled.button`
  --toggle-width: 88px;
  --toggle-height: 44px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: red;
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px red;
  }
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${(p) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;
