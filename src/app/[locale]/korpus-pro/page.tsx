'use client';

import React, { useEffect, useState } from 'react';
import * as S from './page.styled';
import { useParams } from 'next/navigation';

interface User {
  userId: number;
  login: string;
  password: string;
  accessToken: string;
  refreshToken: string;
}

const KorpusPro = () => {
  const { locale } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      const user = JSON.parse(localUser);
      setUser(user);
    }
  }, []);

  return (
    <S.KorpusProContainer>
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
    </S.KorpusProContainer>
  );
};

export default KorpusPro;
