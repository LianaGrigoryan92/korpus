'use client';

import React, { useEffect, useRef } from 'react';

// styles & images
import * as S from './page.styled';
import { useParams } from 'next/navigation';
// import { KorpusProCategories, MainLayout } from '@/components';

async function KorpusPro() {
  const { locale } = useParams();
  return (
    <S.KorpusProContainer>
      {/* <MainLayout> */}
      <S.FrameLayout>
        <S.FrameWrapper>
          <iframe
            src={`https://cloud.bazissoft.ru/cutting/${locale ? (locale === 'am' ? 'hy' : locale) : 'en'}/#/client/auth/login?user=8782`}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </S.FrameWrapper>
      </S.FrameLayout>
      {/* <S.Title>Korpus Pro</S.Title>
        <KorpusProCategories /> */}
      {/* </MainLayout> */}
    </S.KorpusProContainer>
  );
}

export default KorpusPro;
