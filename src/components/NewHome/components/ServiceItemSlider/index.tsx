'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import { truncateText } from '@/utils/truncateText';

// styled
import * as S from './ServiceItem.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IProps {
  title: string;
  description: string;
  images: string[];
  isComing: boolean;
  isReverse: boolean;
}

export const ServiceItemSlider = ({
  isComing,
  title,
  images,
  description,
  isReverse,
}: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplaySpeed: 2000,
  };

  return (
    <S.ServiceItemContainer $isReverse={isReverse} $isComing={isComing}>
      <S.ServiceItemContent>
        <S.ServiceItemTitle $isReverse={isReverse}>{title}</S.ServiceItemTitle>
        <S.ServiceItemText $isReverse={isReverse} $isExpanded={isExpanded}>
          {isExpanded ? description : truncateText(description, 100)}
          <S.ServiceItemTextReadButton
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </S.ServiceItemTextReadButton>
        </S.ServiceItemText>
        {isComing && (
          <S.ComingSoon $isReverse={isReverse}>Coming Soon</S.ComingSoon>
        )}
      </S.ServiceItemContent>
      <S.SliderWrapper>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <S.SliderImage
              key={index}
              src={image}
              alt={`${title} image ${index + 1}`}
            />
          ))}
        </Slider>
      </S.SliderWrapper>
    </S.ServiceItemContainer>
  );
};
