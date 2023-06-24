import React from "react";
import StyledItem from "./CardStyles/StyledItem";
import StyledWrapper from "./CardStyles/StyledWrapper";
import StyledPrimaryButton from "../../Buttons/PrimaryButton";
import StyledImgContainer from "./CardStyles/StyledImgContainer";

const CardItem = ({ menuItem, selectedProduct }) => {
  const { img, name, category, price } = menuItem;
  const handleSelectProduct = () => {
    selectedProduct(menuItem);
  };

  return (
    <StyledItem key={menuItem.id}>
      <StyledImgContainer>
        <img src={img} alt={name} />
      </StyledImgContainer>
      <StyledWrapper>
        <h3>{name}</h3>
        <p>{category}</p>
        <span>R${price.toFixed(2).replace(".", ",")}</span>
        <StyledPrimaryButton onClick={handleSelectProduct}>
          Adicionar
        </StyledPrimaryButton>
      </StyledWrapper>
    </StyledItem>
  );
};

export default CardItem;
