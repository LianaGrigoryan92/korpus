'use client';

import React from 'react';
import Image from 'next/image';

// styled & images
import * as S from './OurCoreValues.styled';
import OurCoreValuesGif from '@/public/images/gif/ourcorevalues.gif';
import { useTranslations } from 'next-intl';

export const OurCoreValues = () => {
      const t = useTranslations('CoreValues');
  return (
    <S.Container>
      <S.Title>{t('core_title')}</S.Title>
      <S.InfoContent>
    
          <S.InfoBlock>
            <S.InfoItem>
              <S.InfoItemTitle>{t('core_title_customer')}</S.InfoItemTitle>
              <S.InfoItemDescription>
              {t('core_description_customer')}
              </S.InfoItemDescription>
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoItemTitle>{t('core_title_qa')}</S.InfoItemTitle>
              <S.InfoItemDescription>
              {t('core_description_qa')}
              </S.InfoItemDescription>
            </S.InfoItem>
          </S.InfoBlock>
     
        {/* <Image
          src={OurCoreValuesGif.src}
          alt="Our core values"
          width={304}
          height={434}
        /> */}
   
          <S.InfoBlock>
          <S.InfoItem>
              <S.InfoItemTitle>{t('core_title_accessibility')}</S.InfoItemTitle>
              <S.InfoItemDescription>
              {t('core_description_accessibility')}
              </S.InfoItemDescription>
            </S.InfoItem>
   
            <S.InfoItem>
              <S.InfoItemTitle>{t('core_title_responsibility')}</S.InfoItemTitle>
              <S.InfoItemDescription>
              {t('core_description_responsibility')}
              </S.InfoItemDescription>
            </S.InfoItem>
          </S.InfoBlock>
      
      </S.InfoContent>
    </S.Container>
  );
};
