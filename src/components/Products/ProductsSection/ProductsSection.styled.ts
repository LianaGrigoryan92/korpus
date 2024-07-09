import styled from "styled-components";

export const ProductsSectionContainer = styled.section`
    margin-top: 60px;
`;

export const ProductsSectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProductsSectionTitle = styled.div`
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.palette.common.black};
`;

export const SeeAll = styled.button`
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const ProductCategories = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 24px;
`;

export const ProductCategoryItem = styled.div<{ selected?: boolean }>`
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ selected }) => selected ? "600" : "400"};
  line-height: 18px;
  padding: 5px;
  color: ${({ theme }) => theme.palette.common.secondaryGray};  
  border-bottom: ${({ selected, theme }) => selected ? `2px solid ${theme.palette.common.secondaryGray}` : 'none'};  
`;

export const Products = styled.div`
    display: flex;
    margin-top: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.common.borderGray};
    border-top: 1px solid ${({ theme }) => theme.palette.common.borderGray};
    
    & > div:last-child {
        border: none;
    }
`;