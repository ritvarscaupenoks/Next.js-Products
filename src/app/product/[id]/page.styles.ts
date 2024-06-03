import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  max-width: 300px;
  height: auto;
  margin-right: 50px;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 5px;
  text-align:justify;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 2em;
  color: white;
`;

export const Price = styled.p`
  font-size: 1.5em;
  color: white;
`;

export const Category = styled.p`
  font-size: 1em;
  color: white;
`;

export const Description = styled.p`
  font-size: 1em;
  color: white;

  @media (max-width: 768px) {
    text-align: justify;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  margin-top: auto;
  max-width: 150px;
  color: #fff;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0053ba;
}
`;