import styled from "styled-components";

export const ProductCard = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
`;

export const ProductImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 24px 0;
`;

export const ProductImage = styled.img`
    max-width: 160px;
    width: 100%;
    height: 160px;
`;

export const ProductCardFooter = styled.div`
    margin-top: 24px;
    padding-top: 0 12px;

    display: flex;
    justify-content: space-between;
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const ProductCategory = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #414141;
`;

export const ProductName = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #1A1A1A;
`;

export const ProductActions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProductPrice = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #414141;
`;

export const Counter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const CounterButton = styled.button`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #1A1A1A;
    outline: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const CounterValue = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #1A1A1A;
`;