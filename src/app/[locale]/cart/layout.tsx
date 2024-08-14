import React from 'react';
import type { Metadata } from 'next';

// styles
import * as S from './layout.styled';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart description',
};

export default async function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <S.CartLayoutWrapper>{children}</S.CartLayoutWrapper>;
}
