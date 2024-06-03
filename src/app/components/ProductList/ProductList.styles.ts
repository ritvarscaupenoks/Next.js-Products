import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: auto;
`;
export const SearchBar = styled.input`
    display: block;
    margin: auto;
    border-radius: 50px;
    padding: 10px 15px;
    border: 1px solid #333;
    color: white;
    background: #444444;
    font-size: 16px;
    width: 100%;
    max-width: 350px;

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
    }
`;
export const Products = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    margin-top: 30px;

    @media (max-width: 768px) {
        justify-items: center;
    }
`;
export const LoadMore = styled.button`
    display: block;
    margin: auto;
    padding: 10px 20px;
    color: #fff;
    background-color: #0070f3;
    font-size: 15px;
    border: none;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;

    &:hover {
        background-color: #0053ba;
    }
`;
