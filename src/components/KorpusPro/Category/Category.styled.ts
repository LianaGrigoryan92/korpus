import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  margin-bottom: 120px;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
  position: relative;

  @media (max-width: 980px) {
    grid-template-rows: 1fr;
    gap: 16px;
  }
`;

export const CategoryItems = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 980px) {
    display: grid;
    grid-template-rows: 1fr;
    gap: 16px;
  }
`;

export const CategoryItem = styled.div<{ $bgImage: string }>`
  height: 509px;
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

  @media (max-width: 980px) {
    height: 309px;
    gap: 16px;

    span {
      font-size: 24px;
      font-weight: 500;
      line-height: 24px;
    }
  }
`;

export const ServiceBlock = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    padding: 0 60px';
`
