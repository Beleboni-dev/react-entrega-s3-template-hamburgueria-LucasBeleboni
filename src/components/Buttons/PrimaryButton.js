import styled from "styled-components";
import theme from "../../styles/theme";

const StyledPrimaryButton = styled.button`
  background-color: ${theme.colors.gray200};
  border: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  color: ${theme.colors.gray0};
  max-width: 106px;
  min-height: 40px;
  border-radius: 8px;

  ${({ cleanCart }) =>
    cleanCart &&
    `
    background-color: ${theme.colors.gray100};
    border: 2px solid ${theme.colors.gray100};
    color: ${theme.colors.gray300};
    width: 100%;
    max-width: 100%;
    height: 60px;
    margin-top:20px;
    cursor: pointer;
    &:hover{
        background-color: ${theme.colors.gray300};
        border: 2px solid ${theme.colors.gray300};
        color: ${theme.colors.gray100};
        transition: .2s;
    }
  `}
`;

export default StyledPrimaryButton;
