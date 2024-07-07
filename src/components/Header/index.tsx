'use client';

import Image from 'next/image';
import { Navbar } from '@/components';

// styles
import * as S from './Header.styled';
import Logo from '@/public/images/logo.png';

function Header() {
  return (
    <S.Container>
        <S.Header>
            <Image src={Logo} alt="logo" />
            <Navbar />
        </S.Header>
    </S.Container>
  );
}

export default Header;
