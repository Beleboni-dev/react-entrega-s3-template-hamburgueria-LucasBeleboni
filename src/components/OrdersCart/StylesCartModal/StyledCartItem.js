import styled from "styled-components";
import theme from "../../../styles/theme";

const StyledCartItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;

  div:first-child {
    display: flex;
    gap: 9px;
  }

  span {
    color: ${theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }
  p {
    color: ${theme.colors.feedback.information};
    font-weight: 600;
    font-size: 14px;
  }
`;
export default StyledCartItem;
