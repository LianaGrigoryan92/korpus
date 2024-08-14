import styled from "styled-components";

export const ProductsWrapper = styled.div`
`;

export const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    border-top: 1px solid #e4e4e4;
    border-left: 1px solid #e4e4e4;

    .item {
        padding: 10px;
        border-bottom: 1px solid #e4e4e4;
    }

    .item:nth-child(1n) {
        border-right: 1px solid #e4e4e4;
    }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #1a1a1a;
  margin-bottom: 16px;
`;

