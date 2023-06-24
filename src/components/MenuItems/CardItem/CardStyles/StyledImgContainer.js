import styled from "styled-components";
import theme from "../../../../styles/theme";

const StyledImgContainer = styled.div`
  background-color: ${theme.colors.gray0};
  width: 100%;
  height: 162px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  ${({ cartItem }) =>
    cartItem &&
    `
    width: 82px;
    height: 80px;
    img {
      width: 53px;
      height: 50px;
    }
  `}
`;

export default StyledImgContainer;
