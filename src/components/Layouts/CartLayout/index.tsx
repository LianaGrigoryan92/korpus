'use client';

import { ReactNode } from 'react';

// styles
import * as S from './CartLayout.styled';

export default function CartLayout({ children }: { children: ReactNode }) {
  return (
    <S.MainLayout>
      <S.MainContent>{children}</S.MainContent>
    </S.MainLayout>
  );
}
