import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

// styles & images
import * as S from './page.styled';
import KorpusBannerLogo from '@/public/images/home/banner-korpus-logo.svg';

// components
import {
    Banner, MainLayout, OurCoreValues, OurServices, ContactBlock
} from '@/components';

function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  return (
    <S.HomeWrapper>
      <MainLayout>
        <Banner />
        <OurServices />
        <OurCoreValues />
        <ContactBlock />
      </MainLayout>
      {/* <SliderLayout>
        <ShopCategories />
      </SliderLayout> */}
      {/* <MainLayout>
        <BlogsSection />
        <ProductSection />
        <BenefitSection />
      </MainLayout> */}
    </S.HomeWrapper>
  );
}

export default Home;
