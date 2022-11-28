import React from "react";
import { SearchBar } from "./SearchBar";
import { Divider } from "antd";

const Layout = () => (
  <>
    <Divider orientation="left">Search Github's Gists By User Name</Divider>
    <SearchBar />
  </>
);

export default Layout;
