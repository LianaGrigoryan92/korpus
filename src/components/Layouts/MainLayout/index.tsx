'use client';

import { ReactNode } from 'react';

// styles
import * as S from './MainLayout.styled';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
      <S.MainLayout>
        <S.MainContent>{children}</S.MainContent>
      </S.MainLayout>
  );
}
