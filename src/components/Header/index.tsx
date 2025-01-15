'use client';

import Image from 'next/image';
import { Navbar } from '@/components';

// styles
import * as S from './Header.styled';
import Logo from '@/public/images/logo.png';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const hide = ['sign-in', 'sign-up'].includes(pathname.split('/')[2]);

  useEffect(() => {
      const isLoggedIn = !!localStorage.getItem('user');
      setIsLoggedIn(isLoggedIn);
  }, [])

  return (
      <>
      {!hide && <S.Container>
           <S.Header>
        <Link href={'/'}>
          <Image src={Logo} alt="logo" />
        </Link>
        <Navbar isLoggedIn={isLoggedIn} />
      </S.Header>
    </S.Container>
    }
      </>
  );
}

export default Header;
