import React from 'react';

// styles & images
import * as S from './page.styled';
import { KorpusProCategories, MainLayout } from '@/components';


function KorpusPro() {
  return (
    <S.KorpusProContainer>
        <MainLayout>
            <S.Title>Korpus Pro</S.Title>
            <KorpusProCategories />
        </MainLayout>
    </S.KorpusProContainer>
  );
}

export default KorpusPro;
