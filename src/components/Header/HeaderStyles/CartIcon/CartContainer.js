import styled from "styled-components";
import theme from "../../../../styles/theme";

const CartContainer = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  margin-right: 0.75rem;

  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.75rem;
    background-color: ${theme.colors.primary};
    border-radius: 7px;
    color: ${theme.colors.gray0};
    width: 25px;
    bottom: 17px;
    left: 15px;
  }

  span {
    font-weight: 700;
  }
`;

export default CartContainer;
