import styled from "styled-components";
import theme from "../../../styles/theme";

const StyledModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  margin: 0 auto;
  max-width: 500px;
  background-color: ${theme.colors.primary};
  border: 1 px solid ${theme.colors.primary};
  padding: 13px 22px;
  border-radius: 5px 5px 0 0;

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: #fff;
  }
  img {
    cursor: pointer;
  }
`;
export default StyledModalTop;
