import styled from 'styled-components';

export const CategoriesWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  height: 100%;
    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

export const CategoryItem = styled.div<{ $active: boolean; $bgImage: string }>`
  height: 416px;
  width: 100%;
  background-image: ${({ $active, $bgImage }) =>
    $active
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 53.43%, rgba(0, 0, 0, 1) 100%), url(${$bgImage})`
      : `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.518311) 53.43%, rgba(0, 0, 0, 0.7) 100%), url(${$bgImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  cursor: pointer;

  .name {
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }

  .active-name {
    position: absolute;
    bottom: 16px;
    right: 16px;
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }
`;
