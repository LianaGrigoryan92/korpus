'use client';

import { Link, type Locale } from '@/i18n.config';
import { useLocale } from 'next-intl';
import LocaleSwitcher from '@/components/LanguageSwitcher';
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

// styles
import * as S from './Navbar.styled';
import { ArrowRight } from 'lucide-react';
import { theme } from '@/styles';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isMobile = useClientMediaQuery('(max-width: 980px)');
  const locale = useLocale() as Locale;
  const [isVisibleCategories, setIsVisibleCategories] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleVisibleCategories = () => {
    setIsVisibleCategories(!isVisibleCategories);
  }

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
              <S.NavItem className="products" onClick={handleVisibleCategories}>
                Products
                <S.ProductCategories $isVisible={isVisibleCategories}>
                  <S.CategoryItem>All <ArrowRight size={24} color={theme.palette.common.black} /></S.CategoryItem>
                  <S.CategoryItem>Lorem <ArrowRight size={24} color={theme.palette.common.black} /></S.CategoryItem>
                  <S.CategoryItem>Lorem <ArrowRight size={24} color={theme.palette.common.black} /></S.CategoryItem>
                  <S.CategoryItem>Lorem <ArrowRight size={24} color={theme.palette.common.black} /></S.CategoryItem>
                  <S.CategoryItem>Lorem <ArrowRight size={24} color={theme.palette.common.black} /></S.CategoryItem>
                  <S.CategoryItem>Lorem <ArrowRight size={24} color={theme.palette.common.black} /></S.CategoryItem>
                  <S.CategoryItem>Lorem <ArrowRight size={24} color={theme.palette.common.black} /></S.CategoryItem>
                </S.ProductCategories>
              </S.NavItem>
              <Link href={'/about'}>About</Link>
              <Link href={'/korpus-pro'}>KorpusPro</Link>
            </S.NavItemWrapper>
            <S.NavItemWrapper>
              <input type={'search'} placeholder='Search' />
              <LocaleSwitcher locale={locale} />
              <Link href={'/profile'}>Profile</Link>
              <Link href={'/cart'}>Cart (1)</Link>
            </S.NavItemWrapper>
          </>
        )}
      </S.Navbar>
      {isMenuOpen && <MobileMenu onClose={handleCloseMenu} />}
    </>
  );
}
