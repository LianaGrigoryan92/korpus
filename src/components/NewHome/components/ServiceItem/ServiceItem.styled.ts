'use client';

import styled from 'styled-components';

export const ServiceItemContainer = styled.div<{
  $isReverse: boolean;
  $isComing: boolean;
}>`
  display: flex;
  gap: 50px;
  align-items: center;
  flex-direction: ${({ $isReverse }) => ($isReverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  position: relative;

  @media (max-width:768px) {
    flex-direction: column;
    gap: 20px;
  }

  ${({ $isComing }) =>
    $isComing &&
    `
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.2); /* Semi-transparent white overlay */
            z-index: 100; /* Make sure it sits on top */
        }
    `}
`;

export const ServiceItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

export const ServiceItemTitle = styled.h2<{ $isReverse: boolean }>`
  font-weight: 500;
  font-size: 32px;
  line-height: 56px;
  color: #000000;
  text-align: ${({ $isReverse }) => ($isReverse ? 'right' : 'left')};

  @media (max-width: 1280px) {
    font-size: 32px;
    line-height: 38px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }


`;

export const ServiceItemText = styled.div<{
  $isExpanded: boolean;
  $isReverse: boolean;
}>`
  max-width: 580px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 24px;
  overflow: hidden;
  max-height: ${({ $isExpanded }) => ($isExpanded ? '1000px' : '72px')};
  transition: max-height 1.5s ease-in-out;
  position: relative;
  text-align: ${({ $isReverse }) => ($isReverse ? 'right' : 'left')};
`;

// export const ComingSoon = styled.p<{ $isReverse: boolean }>`
//   font-family: 'Graphik Cond Trial';
//   color: #fff;
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 24px;
//   position: relative;
//   text-align: ${({ $isReverse }) => ($isReverse ? 'right' : 'left')};
//   z-index: 100000;
//   background-color: #000;
//   max-width: 250px;
//   width: 100%;
//   text-transform: uppercase;
//   padding: 10px 30px;
//   border-bottom-right-radius: ${({ $isReverse }) =>
//     $isReverse ? '0' : '70px'};
//   border-top-left-radius: ${({ $isReverse }) => ($isReverse ? '0' : '65px')};
//   border-bottom-left-radius: ${({ $isReverse }) =>
//     !$isReverse ? '0' : '70px'};
//   border-top-right-radius: ${({ $isReverse }) => (!$isReverse ? '0' : '65px')};
//   display: flex;
//   justify-content: center;
// `;
export const ComingSoon = styled.p<{ $isReverse: boolean }>`
  color: #000000;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  position: relative;
  text-align: ${({ $isReverse }) => ($isReverse ? 'right' : 'left')};
  z-index: 10000;
`;

export const ComingWrapper = styled.div<{ $isReverse: boolean }>`
  display: flex;
  justify-content: ${({ $isReverse }) =>
    $isReverse ? 'flex-end' : 'flex-start'};
`;

export const ServiceItemTextReadButton = styled.button`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  &:hover {
    text-decoration: underline;
  }
`;
1
export const ServiceItemImageWrapper = styled.div<{
  $isExpanded: boolean;
  $hoverImage: string | null;
  $image: string;
  $bgSize?: string;
  $bgPos?: string;
  $hoverbgSize?: string;
  $hoverbgPos?: string;
}>`
  position: relative;
  max-width: 618px;
  background-image: url(${({ $image }) => $image ?? ''});
  background-size: ${({ $bgSize }) => ($bgSize ? `${$bgSize}px` : '100%')};
  background-position: ${({ $bgPos }) => $bgPos ?? 'center'};
  background-repeat: no-repeat;
  width: 100%;
  height: ${({ $isExpanded }) => ($isExpanded ? '485px' : '294px')};
  transition: all 0.5s ease-in-out;
  z-index: 1100;
  overflow: hidden;



 &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.$hoverImage ?? props.$image});
    background-size: 100%;
    // background-position: 1px -211px;
    background-color:#fff;
    background-repeat: no-repeat;
    transition: left 0.5s ease-in-out;
    background-position: center center;
  }

  &:hover::before {
    left: 0; /* Move into view */
  }
`;
// export const ServiceItemImage = styled.img`
//     max-width: 618px;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// `;
