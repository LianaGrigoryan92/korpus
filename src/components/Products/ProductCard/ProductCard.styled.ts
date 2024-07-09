import styled from "styled-components";

export const ProductCardContainer = styled.div`
    padding: 16px;
    margin-top: 3px;
    border-right: 1px solid ${({ theme }) => theme.palette.common.borderGray};
`;

export const ProductCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProductCardColor = styled.div<{ color: string }>`
    width: 14px;
    height: 14px;
    background: ${({ color }) => color};
`;

export const AddToWishlistButton  = styled.button`
    background: transparent;
    outline: none;
    border: none;
`;

export const ProductCardContent = styled.div`
    padding: 25px 30px;
`;

export const ProductCardFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProductCardFooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const ProductCardName = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: ${({ theme }) => theme.palette.common.secondaryGray};
`;

export const ProductCardCategory = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    text-align: left;
    color: ${({ theme }) => theme.palette.common.textGray};
`;

export const ProductCardPrice = styled.span`
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    text-align: right;
    color: ${({ theme }) => theme.palette.common.textGray};
`;

export const ProductCardAddToCard = styled.button`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    text-align: right;
    color: ${({ theme }) => theme.palette.common.secondaryGray};
    outline: none;
    border: none;
    background: transparent;
`;