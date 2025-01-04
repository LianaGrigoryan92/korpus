'use client';

import React, { useEffect, useRef } from 'react';

// styles & images
import * as S from './page.styled';
import { useParams } from 'next/navigation';
import md5 from 'md5';
// import { KorpusProCategories, MainLayout } from '@/components';

const url =
  'https://cloud.bazissoft.ru/cutting/ru/#/client/auth/login?user=0&email=логин&password=пароль&md5';

async function KorpusPro() {
  const { locale } = useParams();
  const user = {
    login: 'kahoga3317@cctoolz.com',
    password: 'Arthur110458',
    userId: 8782,
  };

  // useEffect(() => {
  //   try {
  //     const response = fetch('/api/sign-in', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         login: 'kahoga3317@cctoolz.com',
  //         password: 'Arthur110458',
  //         userId: 8782,
  //       }),
  //     });

  //     console.log('Response:', response);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }, []);
  return (
    <S.KorpusProContainer>
      {/* <MainLayout> */}
      <S.FrameLayout>
        <S.FrameWrapper>
          <iframe
            src={
              user
                ? `https://cloud.bazissoft.ru/cutting/ru/#/client/auth/login?user=8782&email=${user.login}&password=${user.password}&md5`
                : `https://cloud.bazissoft.ru/cutting/${locale ? (locale === 'am' ? 'hy' : locale) : 'en'}/#/client/auth/login?user=8782`
            }
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
