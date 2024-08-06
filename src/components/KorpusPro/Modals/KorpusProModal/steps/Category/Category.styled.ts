import styled from 'styled-components';

export const CategoriesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    height: 100%;
`;

export const CategoryItem = styled.div<{ $bgImage: string }>`
  height: 416px;
  width: 100%;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const SubCategories = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubCategoryItem = styled.div<{ $bgImage: string }>`
    height: 100%;
    width: 100%;
    background-image: url(${({ $bgImage }) => $bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    cursor: pointer;

  span {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
`;

