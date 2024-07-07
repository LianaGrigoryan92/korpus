'use client';

import Link from 'next/link';

// styles
import * as S from './Navbar.styled';

export default function Navbar() {
  return (
    <S.Navbar>
      <S.NavItemWrapper>
        <Link href={'/products'}>Products</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/korpus-pro'}>KorpusPro</Link>
      </S.NavItemWrapper>
      <S.NavItemWrapper>
        <Link href={'/search'}>Search</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/cart'}>Cart (1)</Link>
      </S.NavItemWrapper>
    </S.Navbar>
  );
}
