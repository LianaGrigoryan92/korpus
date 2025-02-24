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


export const LoaderContainer = styled.div`
  position: absolute;
  top: 90px;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: slide-out 5s linear forwards;

  @keyframes slide-out {
    0% {
    
      transform: translateY(0);
    }
    100% {
     
      transform: translateY(-20px);
      visibility: hidden;
    }
  }
`;




export const BannerGif = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  
`;


export const LoaderSpinner = styled.div`
width: fit-content;
  font-size: 40px;
  font-family: system-ui,sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #0000;
  -webkit-text-stroke: 1px #000;
  background: conic-gradient(#000 0 0) 50%/0 100% no-repeat text;
  animation: l4 1.5s linear infinite;

  &:before {
  content: "Loading";
}
@keyframes l4 {
  to{background-size: 120% 100%}
}

`;



export const CategoryContainer = styled.div``;

export const CategoryItem = styled.div``;
