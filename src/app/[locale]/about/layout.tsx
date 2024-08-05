import React from 'react';
import type { Metadata } from 'next';

// styles
import * as S from './layout.styled';

export const metadata: Metadata = {
  title: 'Korpus Pro',
  description: 'Korpus Pro description',
};

export default async function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.AboutLayoutWrapper>{children}</S.AboutLayoutWrapper>;
}
