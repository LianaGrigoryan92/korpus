import React from 'react';

// styles & images
import * as S from './page.styled';
import { MainLayout } from '@/components';

function Cart() {
  return (
    <S.CartContainer>
      <MainLayout>
        <S.Title>Cart</S.Title>
      </MainLayout>
    </S.CartContainer>
  );
}

export default Cart;
