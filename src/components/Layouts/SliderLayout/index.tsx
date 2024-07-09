'use client';

import { ReactNode } from 'react';

// styles
import * as S from './SliderLayout.styled';

export default function SliderLayout({ children }: { children: ReactNode }) {
  return <S.SliderLayout>{children}</S.SliderLayout>;
}
