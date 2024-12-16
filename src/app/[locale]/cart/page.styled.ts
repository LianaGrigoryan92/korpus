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
