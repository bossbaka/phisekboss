import React from "react";
import { NavItem } from "components/SubComponents/NavItem";

export default function Layout({ children }) {
  return (
    <>
      <NavItem />
      <main>{children}</main>
    </>
  );
}
