'use client';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentWrapper = styled.div`
  background-image: url('/images/home/bg.png');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 42px;

  & > img {
    opacity: 0.7;
    width: 100%;
    background-blend-mode: hard-light;
  }

  @media (max-width: 768px) {
    padding: 16px;
    background-position: right;

    & > img {
      height: 635px;
    }
  }
`;
