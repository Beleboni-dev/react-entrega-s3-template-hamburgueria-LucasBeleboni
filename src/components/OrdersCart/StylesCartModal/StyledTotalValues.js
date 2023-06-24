import styled from "styled-components";
import theme from "../../../styles/theme";

const StyledTotalValues = styled.div`
  margin-top: 18px;
  border-top: 2px solid ${theme.colors.gray100};
  padding-top: 15px;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.gray600};
  }
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.colors.gray300};
  }
`;
export default StyledTotalValues;
