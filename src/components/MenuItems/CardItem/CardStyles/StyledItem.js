import styled from "styled-components";
import theme from "../../../../styles/theme";

const StyledItem = styled.li`
  min-width: 300px;
  min-height: 346px;
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;
  border: 2px solid transparent;
  border-radius: 5px;
  &:hover,
  &:focus {
    border: 2px solid ${theme.colors.primary};
    transform: scale(1.1);
    transition: 0.3s;
  }
  &:hover button,
  &:focus button {
    background-color: ${theme.colors.primary};
    cursor: pointer;
    transition: 0.3s;
  }

  h3 {
    color: ${theme.colors.gray600};
    font-weight: 700;
    font-size: 18px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${theme.colors.gray300};
  }
  span {
    color: ${theme.colors.primary};
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;
export default StyledItem;
