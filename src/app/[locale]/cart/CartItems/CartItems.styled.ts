import styled from 'styled-components';

export const CartItems = styled.div`
    flex: 3;
`;

export const ProjectTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0 40px 0;
    @media (max-width: 768px) {
        justify-content: space-between;
        font-size: 22px;
    }
`;

export const ProductTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
    justify-content: space-between;
`;

export const ProductChild = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
`;

export const SubCategoryTitle = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
    justify-content: space-between;
    
    &:last-child {
        border-bottom: 1px solid #ddd;
        margin-bottom: 20px;
    }
`;

export const SubCategoryContent = styled.span`
    display: flex;
    gap: 10px;
`;

export const ItemCount = styled.span`
    color: gray;
    font-size: 14px;
    font-weight: normal;
`;

export const Link = styled.a`
    margin-left: auto;
    font-size: 14px;
    color: #000;
    text-decoration: underline;
    cursor: pointer;
    @media (max-width: 768px) {
        margin-left: unset;
        color: #414141;
        font-size: 14px;
    }
`;

export const TotalPrice = styled.span`
    margin-left: auto;
    font-size: 12px;
    color: #1A1A1A;
    font-weight: 400;
`;

export const CartItem = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 20px 10px;
    background: #F2F2F2;
`;

export const ItemImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 20px;
`;

export const ItemDetails = styled.div`
    flex: 1;
`;

export const QuantityDetails = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

export const ItemTitle = styled.p`
    font-weight: 500;
    margin-bottom: 5px;
`;

export const ItemRef = styled.div`
    margin-bottom: 10px;
`;

export const ItemPrice = styled.p`
    font-weight: 400;
    padding-bottom: 100px;
`;

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        width: 50%;
        justify-content: flex-end;
    }
`;

export const QuantityText = styled.p`
    font-weight: 400;
    @media (max-width: 768px) {
        width: 50%;
    }
`;

export const QuantityControl = styled.button`
    cursor: pointer;
    font-size: 16px;
    background: none;
    border: none;
    color: #1A1A1A;
`;

export const QuantityAmount = styled.span`
    margin: 0 10px;
    font-size: 14px;
`;

export const ItemLinks = styled.div`
    display: flex;
    gap: 20px;
    font-size: 14px;
    font-weight: 500;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
        margin-top: 20px;
    }
`;

export const DeleteItem = styled.a`
    color: #747474;
    text-decoration: underline;
    cursor: pointer;
`;
