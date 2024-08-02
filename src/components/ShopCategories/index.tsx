'use client';

import * as S from './ShopCategories.styled';
import Slider from 'react-slick';
import { CategoryItem } from '@/components';
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery';

const slides = [
  {
    img: '/images/components/category-slider/1.png',
    title: 'Sideboard',
  },
  {
    img: '/images/components/category-slider/1.png',
    title: 'Sideboard',
  },
  {
    img: '/images/components/category-slider/1.png',
    title: 'Sideboard',
  },
  {
    img: '/images/components/category-slider/1.png',
    title: 'Sideboard',
  },
];

const settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 4.1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '40px',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.05,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function ShopCategories() {
  const isMobile = useClientMediaQuery('(max-width: 768px)');

  return (
    <S.ShopCategoriesContainer>
      <S.Title>Shop Categories</S.Title>
      <S.SliderWrapper>
        <Slider {...settings} centerPadding={isMobile ? '15px' : '40px'}>
          {slides.map((slide, index) => (
            <CategoryItem key={index} image={slide.img} name={slide.title} />
          ))}
        </Slider>
      </S.SliderWrapper>
    </S.ShopCategoriesContainer>
  );
}
