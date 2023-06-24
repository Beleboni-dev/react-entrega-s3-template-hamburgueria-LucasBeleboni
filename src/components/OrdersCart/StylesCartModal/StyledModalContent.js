import styled from "styled-components";
import theme from "../../../styles/theme";

const StyledModalContent = styled.div`
  border: 1px solid ${theme.colors.gray0};
  border-radius: 0 0 5px 5px;
  background-color: #fff;
  padding: 2px 23px 20px;
  width: 90vw;
  margin: 0 auto;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`;
export default StyledModalContent;
