import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import theme from "../../../styles/theme";

const TrashIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: ${theme.colors.gray200};
  cursor: pointer;
`;
export default TrashIcon;
