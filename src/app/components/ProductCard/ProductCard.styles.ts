import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  justify-content: space-between;
  gap: 5px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  text-align: left;
  font-size: 15px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 120px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  margin-top: auto;
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