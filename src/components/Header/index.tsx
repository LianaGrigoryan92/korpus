'use client';

import Image from 'next/image';
import { Navbar } from '@/components';

// styles
import * as S from './Header.styled';
import Logo from '@/public/images/logo.png';
import Link from 'next/link';
import {usePathname} from "next/navigation";

function Header() {
  const pathname = usePathname();
  const hide = ['sign-in', 'sign-up'].includes(pathname.split('/')[2]);

  return (
      <>
      {!hide && <S.Container>
           <S.Header>
        <Link href={'/'}>
          <Image src={Logo} alt="logo" />
        </Link>
        <Navbar />
      </S.Header>
    </S.Container>
    }
      </>
  );
}

export default Header;
