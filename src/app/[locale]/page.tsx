import React from 'react';
import Image from 'next/image';

// styles & images
import * as S from './page.styled';
import KorpusBannerLogo from '@/public/images/home/banner-korpus-logo.svg';
import {
    SliderLayout,
    ShopCategories,
    BlogsSection,
    MainLayout, BenefitSection, ProductSection,
} from '@/components';

// components

function Home() {
  return (
    <S.HomeWrapper>
      <S.ContentWrapper>
        <Image
          src={KorpusBannerLogo.src}
          alt="korpus-banner-logo"
          priority
          width={1320}
          height={376}
        />
      </S.ContentWrapper>
      <SliderLayout>
        <ShopCategories />
      </SliderLayout>
      <MainLayout>
        <BlogsSection />
        <ProductSection />
        <BenefitSection />
      </MainLayout>
    </S.HomeWrapper>
  );
}

export default Home;
