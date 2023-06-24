import styled from "styled-components";

const HeaderContent = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.225rem;
  max-width: 1368px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 152px;
    flex-direction: column;
  }
`;

export default HeaderContent;
