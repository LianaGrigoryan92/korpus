import styled from 'styled-components';

export const CartContainer = styled.div`
    border-top: 1px solid #E4E4E4;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const CartContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 2;
    border-right: 1px solid #E4E4E4;
    padding-right: 20px;
    @media (max-width: 768px) {
        border-right: none;
        padding-right: 0;
    }
`;

export const CartItems = styled.div`
    flex: 3;
`;

export const OrderSummary = styled.div`
    flex: 2;
    padding: 10px 0 30px 0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex: 0;
        display: block;
    }
`;

export const OrderSummaryDetailed = styled.div`
    width: 60%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ProjectTitle = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 0 40px 0;
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

export const OrderTitle = styled.h1`
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
`;

export const OrderDetail = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const OrderItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    flex-wrap: wrap;
`;

export const OrderItemProjectName = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
`;

export const OrderItemProjectNameDetail = styled.div`
    display: flex;
    gap: 10px;
`;

export const OrderLabel = styled.div``;

export const OrderPrice = styled.div`
  font-weight: 400;
`;

export const OrderTotal = styled(OrderItem)`
    font-weight: 500;
    border-bottom: none;
`;

export const TotalLabel = styled(OrderLabel)`
    font-weight: 400;
    font-size: 18px;
`;

export const TotalAmount = styled(OrderPrice)`
    font-size: 18px;
    font-weight: 500;
`;

export const CheckoutButton = styled.button`
    background-color: black;
    color: white;
    padding: 15px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    width: 100%;
`;
