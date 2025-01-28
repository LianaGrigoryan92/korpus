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
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  text-align: ${({ $isReverse }) => ($isReverse ? 'right' : 'left')};
`;

export const ServiceItemText = styled.div<{
  $isExpanded: boolean;
  $isReverse: boolean;
}>`
  max-width: 580px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 24px;
  overflow: hidden;
  max-height: ${({ $isExpanded }) => ($isExpanded ? '1000px' : '72px')};
  transition: max-height 1.5s ease-in-out;
  position: relative;
  text-align: ${({ $isReverse }) => ($isReverse ? 'right' : 'left')};
`;

export const ComingSoon = styled.p<{ $isReverse: boolean }>`
  color: #000000;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  position: relative;
  text-align: ${({ $isReverse }) => ($isReverse ? 'right' : 'left')};
  z-index: 100000;
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

// export const ServiceItemImage = styled.img`
//     max-width: 618px;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// `;
export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 618px;
  height: 286px;
  overflow: hidden;
  border-radius: 12px;

  .slick-slider {
    width: 100%;
    height: 100%;
  }

  .slick-list {
    height: 100%;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
