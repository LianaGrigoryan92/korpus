'use client';

import styled from 'styled-components';

export const KorpusProContainer = styled.div`
  /* Add your CSS styles here */
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  color: ${({ theme }) => theme.palette.common.secondaryGray};
  margin-bottom: 20px;
`;

export const FrameLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FrameWrapper = styled.div`
  width: 100%;
  height: 110vh;
`;

export const CategoryContainer = styled.div``;

export const CategoryItem = styled.div``;
