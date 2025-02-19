'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled.h2`
  color: #000000;
  font-size: 50px;
  font-weight: 600;
  line-height: 54px;
  @media (max-width: 1280px) {
    font-size: 40px;
  }
    @media (max-width: 768px) {
    font-size: 32px;
    line-height: 36px;
    text-align: center;
  }
`;
