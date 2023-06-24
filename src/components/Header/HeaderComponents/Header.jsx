import React, { useEffect, useState } from "react";

import StyledHeader from "../HeaderStyles/HeaderGlobal/StyledHeader";
import LogoContainer from "../HeaderStyles/HeaderGlobal/LogoContainer";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import CartContainer from "../HeaderStyles/CartIcon/CartContainer";
import CartIcon from "../HeaderStyles/CartIcon/StyledCartIcon";
import HeaderWrapper from "../HeaderStyles/HeaderGlobal/HeaderWrapper";
import SearchIcon from "../HeaderStyles/Search/StyledSearchIcon";
import Input from "./Input";
import SearchContainer from "../HeaderStyles/Search/SearchContainer";
import HeaderContent from "../HeaderStyles/HeaderGlobal/HeaderContent";

const HeaderComponent = ({ itemCount, onSearch, openModal }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenModal = () => {
    openModal(true);
  };

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm]);

  return (
    <StyledHeader>
      <HeaderContent>
        <HeaderWrapper>
          <LogoContainer>
            <img src="/logo.svg" alt="logo" />
          </LogoContainer>
          <CartContainer onClick={handleOpenModal}>
            <CartIcon icon={faCartShopping} />
            <div>
              <span>{itemCount}</span>
            </div>
          </CartContainer>
        </HeaderWrapper>
        <SearchContainer>
          <Input
            type={"search"}
            label={"Search"}
            id={"search-input"}
            placeholder={"Digite sua pesquisa"}
            onChange={handleSearchTerm}
          />
          <div>
            <SearchIcon icon={faSearch} />
          </div>
        </SearchContainer>
      </HeaderContent>
    </StyledHeader>
  );
};

export default HeaderComponent;
