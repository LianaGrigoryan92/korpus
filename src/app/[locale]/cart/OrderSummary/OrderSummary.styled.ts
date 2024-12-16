import styled from 'styled-components';

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
    padding: 5px 0;
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
