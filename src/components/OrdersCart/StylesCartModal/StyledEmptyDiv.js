import styled from "styled-components";
import theme from "../../../styles/theme";

const StyledEmptyDiv = styled.div`
  width: 100%;
  margin-top: 1rem;
  text-align: center;

  span {
    font-size: clamp(14px, 4vw, 18px);
    color: ${theme.colors.feedback.information};
    font-weight: 600;
  }
`;
export default StyledEmptyDiv;
