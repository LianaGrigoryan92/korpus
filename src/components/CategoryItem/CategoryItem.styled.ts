'use client';

import styled from 'styled-components';

export const CategoryItemContainer = styled.div<{ $backgroundImage: string }>`
  height: 430px;
  width: 100%;
  background-image: url(${({ $backgroundImage }) => $backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const CategoryItemContent = styled.div`
  position: absolute;
  bottom: 0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CategoryItemTitle = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const SeeCategoryButton = styled.button`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
`;
