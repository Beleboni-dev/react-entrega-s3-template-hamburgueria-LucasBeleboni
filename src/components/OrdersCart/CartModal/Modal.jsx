import React from "react";
import StyledModal from "../StylesCartModal/StyledModal";
import StyledModalTop from "../StylesCartModal/StyledModalTop";
import StyledModalContent from "../StylesCartModal/StyledModalContent";
import CartItem from "./CartItem";
import StyledTotalValues from "../StylesCartModal/StyledTotalValues";
import StyledPrimaryButton from "../../Buttons/PrimaryButton";
import StyledEmptyDiv from "../StylesCartModal/StyledEmptyDiv";
import { toast } from "react-toastify";
import theme from "../../../styles/theme";

const Modal = ({
  itemsInCart,
  modalRef,
  closeModal,
  onDelete,
  setItemsInCart,
}) => {
  const handleCleanCart = () => {
    setItemsInCart([]);
  };
  const onAddItem = (selected) => {
    const existingProduct = itemsInCart.find((item) => item.id === selected.id);
    toast.success(`Mais uma unidade de ${selected.name} adicionado`, {
      autoClose: 800,
      style: { color: `${theme.colors.feedback.success}` },
      bodyStyle: { color: `${theme.colors.feedback.success}` },
    });
    const updatedItems = itemsInCart.map((item) =>
      item.id === selected.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setItemsInCart(updatedItems);
  };
  return (
    <StyledModal ref={modalRef}>
      <StyledModalTop>
        <h2>Carrinho de compras</h2>
        <img src="/X.svg" alt="close-modal" onClick={closeModal} />
      </StyledModalTop>
      <StyledModalContent>
        <ul>
          {itemsInCart.length > 0 ? (
            itemsInCart.map((item) => (
              <CartItem key={item.id} item={item} onDelete={onDelete} onAddItem={onAddItem} />
            ))
          ) : (
            <StyledEmptyDiv>
              <span>Adicione items do nosso cardápio</span>
            </StyledEmptyDiv>
          )}
        </ul>
        {itemsInCart.length > 0 && (
          <StyledTotalValues>
            <span>Total</span>
            <p>
              R${" "}
              {itemsInCart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)
                .replace(".", ",")}
            </p>
          </StyledTotalValues>
        )}
        {itemsInCart.length > 0 && (
          <StyledPrimaryButton cleanCart onClick={handleCleanCart}>
            Remover Todos
          </StyledPrimaryButton>
        )}
      </StyledModalContent>
    </StyledModal>
  );
};

export default Modal;
