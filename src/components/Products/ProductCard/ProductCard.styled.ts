import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  padding: 16px;
  margin-top: 3px;
  border-right: 1px solid ${({ theme }) => theme.palette.common.borderGray};

  @media (max-width: 768px) {
    &:nth-child(1n) {
      border-bottom: 1px solid ${({ theme }) => theme.palette.common.borderGray};
    }

    &:nth-child(2n) {
      border-bottom: 1px solid ${({ theme }) => theme.palette.common.borderGray};
      border-right: none;
    }

    &:nth-child(3n) {
      border-bottom: none;
    }
  }
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
  border: 0.7px solid ${({ color }) => color === '#FFFFFF' || 'white' ? '#C6C6C6' : 'transparent'};
  
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const AddToWishlistButton = styled.button`
  background: transparent;
  outline: none;
  border: none;

  @media (max-width: 768px) {
    height: 22px;
  }
`;

export const ProductCardContent = styled.div`
  padding: 25px 30px;
  width: 100%;

  @media (max-width: 1400px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 10px 8px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 148px;
      width: 100%;
      height: 148px;
    }
  }
`;

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductCardFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    justify-content: flex-end;
    gap: 8px;
  }
`;

export const ProductCardName = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => theme.palette.common.secondaryGray};

  @media (max-width: 768px) {
    line-height: 6px;
  }
`;

export const ProductCardCategory = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  color: ${({ theme }) => theme.palette.common.textGray};

  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
  }
`;

export const ProductCardPrice = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: right;
  color: ${({ theme }) => theme.palette.common.textGray};

  @media (max-width: 768px) {
    margin-top: 4px;
    line-height: 0;
  }
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

  @media (max-width: 768px) {
    height: 22px;
  }
`;
