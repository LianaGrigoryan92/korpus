'use client';
import styled from 'styled-components';

export const HomeWrapper = styled.div``;

export const ContentWrapper = styled.div`
  background-image: url('/images/home/bg.png');
  background-repeat: no-repeat;
  background-position: center;
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
`;
