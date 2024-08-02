import styled from 'styled-components';

export const ShopCategoriesContainer = styled.div`
  margin-top: 12px;

  @media (max-width: 768px) {
    margin-top: 32px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.palette.common.black};

  @media (max-width: 768px) {
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
  .slick-slide > div {
    margin: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }

  @media (max-width: 768px) {
    padding: 16px 16px 16px 0;

    .slick-slide > div {
      margin: 0 10px;
    }

    .slick-list {
      margin: 0 -10px;
    }
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }

  .info {
    padding: 10px;
  }
`;
