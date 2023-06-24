import styled from "styled-components";
import theme from "./theme";

export const Heading3 = styled.h3`
  font-size: clamp(12px, 4vw, 18px);
  font-weight: 700;
  color: ${theme.colors.gray600};
  margin-bottom: 6px;
`;
