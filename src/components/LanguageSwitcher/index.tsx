'use client';

import React from 'react';

import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from '@/i18n.config';

// styles & images
import * as S from './LanguageSwitcher.styled';

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale;

    router.replace(pathname, { locale: newLocale });
  };

  return (
    <S.LanguageSwitcher>
      <S.LanguageSelect value={locale} onChange={changeLocale}>
        {locales.map((loc) => (
          <S.LanguageSelectOption key={loc} value={loc}>
            {localeNames[loc]}
          </S.LanguageSelectOption>
        ))}
      </S.LanguageSelect>
    </S.LanguageSwitcher>
  );
}
