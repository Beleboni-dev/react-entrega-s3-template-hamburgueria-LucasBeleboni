import React from "react";
import HeaderComponent from "../Header/HeaderComponents/Header";
import StyledMain from "./MainStyles/StyledMain";

const TemplateMain = ({ children, itemCount, onSearch, openModal }) => {
  return (
    <>
      <HeaderComponent
        itemCount={itemCount}
        onSearch={onSearch}
        openModal={openModal}
      />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

export default TemplateMain;
