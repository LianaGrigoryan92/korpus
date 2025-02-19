'use client';

import React from 'react';
import * as S from './MobileMenu.styled';
import Logo from '@/public/images/moibile-logo.png';
import { ArrowRight } from 'lucide-react';
import { theme } from '@/styles';
import LocaleSwitcher from '@/components/LanguageSwitcher';
import { useLocale } from 'next-intl';
import { Locale } from '@/i18n.config';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const locale = useLocale() as Locale;

  return (
    <S.MobileMenu>
      <S.MobileMenuContent>
        <S.Header>
          <S.MenuButton>Menu</S.MenuButton>
          <S.CancelButton onClick={onClose}>Cancel</S.CancelButton>{' '}
        </S.Header>
        <S.Logo src={Logo.src} alt="logo" />
        <S.MenuListContainer>
          <S.MenuList>
            {/* <S.MenuItem>
              Products{' '}
              <ArrowRight size={24} color={theme.palette.common.black} />
            </S.MenuItem> */}
            <S.MenuItem href={'/about'}>
              About <ArrowRight size={24} color={theme.palette.common.black} />
            </S.MenuItem>
            <S.MenuItem href={'/korpus-pro'}>
              Korpuspro{' '}
              <ArrowRight size={24} color={theme.palette.common.black} />
            </S.MenuItem>
          </S.MenuList>
          {/* <S.Search type="search" placeholder="Search" /> */}
          <S.MenuList>
            <LocaleSwitcher locale={locale} />
            {/* <S.MenuItem>
              Profile{' '}
              <ArrowRight size={24} color={theme.palette.common.black} />
            </S.MenuItem> */}
          </S.MenuList>
        </S.MenuListContainer>
      </S.MobileMenuContent>
    </S.MobileMenu>
  );
};

export default MobileMenu;
