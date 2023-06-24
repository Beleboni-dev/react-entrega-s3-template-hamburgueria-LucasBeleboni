import styled from "styled-components";
import theme from "../../../../styles/theme";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  div {
    position: absolute;
    background-color: ${theme.colors.primary};
    border-radius: 7px;
    width: 53px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.gray0};
    right: 10px;
    cursor: pointer;
  }
  div:hover {
    background-color: ${theme.colors.primaryHover};
    transition: 0.2s;
  }
  label {
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
  }
  input {
    height: 60px;
    padding: 0 15px;
    border-radius: 8px;
    outline: none;
    border: 2px solid ${theme.colors.gray100};
    font-size: 14px;
    color: ${theme.colors.gray300};
    font-weight: 600;
  }
  input::placeholder {
    color: ${theme.colors.gray100};
  }

  @media (max-width: 768px) {
    width: 80vw;
    margin: 0 auto;
    input {
      width: 100%;
    }
  }
`;
export default SearchContainer;
