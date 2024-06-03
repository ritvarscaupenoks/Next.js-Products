import styled from "styled-components";
import { SiSinglestore } from "react-icons/si";

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px); 
  padding: 10px 20px;
  position: sticky;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #444444;
  z-index: 1;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: auto;
`

export const Icon = styled(SiSinglestore)`
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;

export const H1 = styled.h3`
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 5px;
    font-size: 20px;
}
`;