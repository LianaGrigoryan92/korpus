'use client';

import Image from 'next/image';
import { Navbar } from '@/components';

// styles
import * as S from './Header.styled';
import Logo from '@/public/images/logo.png';
import Link from 'next/link';

function Header() {
  return (
    <S.Container>
      <S.Header>
        <Link href={'/'}>
          <Image src={Logo} alt="logo" />
        </Link>
        <Navbar />
      </S.Header>
    </S.Container>
  );
}

export default Header;
