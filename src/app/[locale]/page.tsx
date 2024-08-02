import React from 'react';
import Image from 'next/image';
import { unstable_setRequestLocale } from 'next-intl/server';

// styles & images
import * as S from './page.styled';
import KorpusBannerLogo from '@/public/images/home/banner-korpus-logo.svg';

// components
import {
  SliderLayout,
  ShopCategories,
  BlogsSection,
  MainLayout,
  BenefitSection,
  ProductSection,
} from '@/components';

function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

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
