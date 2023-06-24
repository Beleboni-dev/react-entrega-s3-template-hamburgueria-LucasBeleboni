import React from "react";
import StyledCartItem from "../StylesCartModal/StyledCartItem";
import StyledImgContainer from "../../MenuItems/CardItem/CardStyles/StyledImgContainer";
import { Heading3 } from "../../../styles/Headings";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import TrashIcon from "../StylesCartModal/StyledTrashIcon";

const CartItem = ({ item, onDelete, onAddItem }) => {
  const handleDeleteClick = () => {
    onDelete(item.id);
  };
  const handleAddItem = () => {
    onAddItem(item)
  };
  return (
    <StyledCartItem>
      <div>
        <StyledImgContainer cartItem>
          <img src={item.img} alt={item.name} onClick={handleAddItem} />
        </StyledImgContainer>
        <div>
          <Heading3>{item.name}</Heading3>
          <span>{`R$ ${item.price.toFixed(2).replace(".", ",")}`}</span>
          {item.quantity > 1 && <p>{item.quantity} unidades</p>}
        </div>
      </div>
      <TrashIcon icon={faTrash} onClick={handleDeleteClick} />
    </StyledCartItem>
  );
};

export default CartItem;
