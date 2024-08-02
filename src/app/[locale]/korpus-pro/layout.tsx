import React from 'react';
import type { Metadata } from 'next';

// styles
import * as S from './layout.styled';

export const metadata: Metadata = {
  title: 'Korpus Pro',
  description: 'Korpus Pro description',
};

export default async function KorpusProLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.KorpusProLayoutWrapper>{children}</S.KorpusProLayoutWrapper>;
}
