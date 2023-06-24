import React from "react";
import StyledCardsSection from "./CardListStyles/CardsSection";
import CardItem from "../CardItem/CardItem";

const CardsList = ({ menuitems, selectedProduct, filteredItems }) => {
  return (
    <StyledCardsSection>
      <ul>
        {filteredItems.length > 0
          ? filteredItems.map((item) => (
              <CardItem
                key={item.id}
                menuItem={item}
                selectedProduct={selectedProduct}
              />
            ))
          : menuitems.map((item) => (
              <CardItem
                key={item.id}
                menuItem={item}
                selectedProduct={selectedProduct}
              />
            ))}
      </ul>
    </StyledCardsSection>
  );
};

export default CardsList;
