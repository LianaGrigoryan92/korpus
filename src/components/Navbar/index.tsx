'use client';

import { Link, type Locale } from '@/i18n.config';
import { useLocale } from 'next-intl';
import LocaleSwitcher from '@/components/LanguageSwitcher';
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery';
import {useEffect, useState} from 'react';
import MobileMenu from './MobileMenu';

// styles
import * as S from './Navbar.styled';
import { ArrowRight } from 'lucide-react';
import { theme } from '@/styles';
import {Button} from "./Navbar.styled";
import {useRouter} from "next/navigation";

export default function Navbar(
    // { isLoggedIn }: { isLoggedIn?: boolean }
) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const isMobile = useClientMediaQuery('(max-width: 980px)');
  const locale = useLocale() as Locale;
  const [isVisibleCategories, setIsVisibleCategories] =
    useState<boolean>(false);
  const router = useRouter();

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleVisibleCategories = () => {
    setIsVisibleCategories(!isVisibleCategories);
  };

  const handleClickSignInButton = () => {
    router.push('/sign-in');
  };

  const handleClickProfileButton = () => {
    router.push('/korpus-pro');
  };

  useEffect(() => {
    const countCartItems = () => {
      let count = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('cartData-')) {
          count++;
        }
      }
      setCartItemCount(count);
    };

    countCartItems();
  });

  const handleLogout = async () => {
    localStorage.removeItem('user');
    window.location.reload();

    // try {
    //   // Вызываем API logout
    //   const response = await axios.get('/api/logout', {
    //     headers: {
    //       Authorization: `Bearer ${user.accessToken}`, // Убедитесь, что токен верный
    //     },
    //   });

    //   console.log('Logout response:', response.data);

    //   // Удаляем пользователя из localStorage

    //   // Обновляем страницу или перенаправляем
    //   if (pathname.includes('korpus-pro')) {
    //     window.location.reload();
    //   } else {
    //     router.push('/sign-in'); // Перенаправляем на страницу входа
    //   }
    // } catch (error) {
    //   console.error('Ошибка при logout:');
    // }
  };

  return (
    <>
      <S.Navbar>
        {isMobile ? (
          <S.NavItemWrapper>
            <S.Button onClick={() => handleOpenMenu()}>Menu</S.Button>
            <Link href={'/profile'}>Facade</Link>
          </S.NavItemWrapper>
        ) : (
          <>
            <S.NavItemWrapper>
              {/* <S.NavItem className="products" onClick={handleVisibleCategories}>
                Products
                <S.ProductCategories $isVisible={isVisibleCategories}>
                  <S.CategoryItem>
                    All{' '}
                    <ArrowRight size={24} color={theme.palette.common.black} />
                  </S.CategoryItem>
                  <S.CategoryItem>
                    Lorem{' '}
                    <ArrowRight size={24} color={theme.palette.common.black} />
                  </S.CategoryItem>
                  <S.CategoryItem>
                    Lorem{' '}
                    <ArrowRight size={24} color={theme.palette.common.black} />
                  </S.CategoryItem>
                  <S.CategoryItem>
                    Lorem{' '}
                    <ArrowRight size={24} color={theme.palette.common.black} />
                  </S.CategoryItem>
                  <S.CategoryItem>
                    Lorem{' '}
                    <ArrowRight size={24} color={theme.palette.common.black} />
                  </S.CategoryItem>
                  <S.CategoryItem>
                    Lorem{' '}
                    <ArrowRight size={24} color={theme.palette.common.black} />
                  </S.CategoryItem>
                  <S.CategoryItem>
                    Lorem{' '}
                    <ArrowRight size={24} color={theme.palette.common.black} />
                  </S.CategoryItem>
                </S.ProductCategories>
              </S.NavItem> */}
              <Link href={'/about'}>About</Link>
              <Link href={'/korpus-pro'}>KorpusPro</Link>
            </S.NavItemWrapper>
            <S.NavItemWrapper>
              {/* <input type={'search'} placeholder="Search" /> */}
              <LocaleSwitcher locale={locale} />
              {/*{!isLoggedIn ? (*/}
              {/*  <Button onClick={handleClickSignInButton}>Sign In</Button>*/}
              {/*) : (*/}
              {/*  <Button onClick={handleClickProfileButton}>Profile</Button>*/}
              {/*)}*/}

              {/*{isLoggedIn && (*/}
              {/*  <S.LogOutButton onClick={handleLogout}>LogOut</S.LogOutButton>*/}
              {/*)}*/}
              {/* <Link href={'/profile'}>Profile</Link> */}
              {/* <Link href={'/cart'}>Cart ({cartItemCount})</Link> */}
            </S.NavItemWrapper>
          </>
        )}
      </S.Navbar>
      {isMenuOpen && <MobileMenu onClose={handleCloseMenu} />}
    </>
  );
}
