'use client';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const BannerWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 32px;

    @media (max-width: 1040px) {
  
   gap: 16px;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }


`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    }
`;

// export const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

//   body {
//     font-family: 'Montserrat', sans-serif;
//   }
// `;

export const BannerTitle = styled.h1`
  font-family:  'Noto Sans', sans-serif;
  font-size: 128px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 100px;

  @media (max-width: 1200px) {
    font-size: 96px;
    line-height: 80px;
  }

  @media (max-width: 1040px) {
    font-size: 64px;
    line-height: 60px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
    line-height: 40px;
  }
`;

export const BannerButton = styled.button`
  background: #141414;
  outline: none;
  border: none;
  border-radius: 8px;
  max-width: 256px;
  min-width: 102px;
  min-height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1040px) {
  min-width: 80px;
  min-height: 80px;
  
  }
`;

export const BannerGif = styled.div`
width: 100%;
  position: relative;
  overflow: hidden;
  /* Optional: You can adjust the height dynamically if needed */
  max-width: 100%;
  img {
    border-radius: 8px;
    width: 100%;
    max-height: 102px;

   @media (max-width: 1040px) {
    max-height: 80px;
  
  }
  }
`;
