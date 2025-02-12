'use client';

import React from 'react';

// styled
import * as S from './OurServices.styled';
import { ServiceItem } from '@/components/NewHome/components';
import { mockServices } from '@/components/NewHome/OurServices/mockServices';
import { ServiceItemSlider } from '../components/ServiceItemSlider';
// import { type Locale, locales } from '@/i18n.config';
import { useTranslations } from 'next-intl';

export const OurServices = () => {
  const t = useTranslations('Services');

  
  return (
    <S.Container>
      <S.Title>{t('service_title')}</S.Title>
      {mockServices.map((service, index) => (
        <ServiceItem
          key={service.id}
          title={t(service.title)} // Only use the key
          description={t(service.description)} 
          image={service.image}
          hoverImage={service.hoverImage}
          isComing={service.isComing}
          isReverse={index % 2 !== 0}
          bgPos={service.bgPos}
          bgSize={service.bgSize}
          hoverBgPos={service.hoverBgPos}
          hoverBgSize={service.hoverBgSize}
        />
      ))}
     <ServiceItemSlider
        title={t('ready_mode_title', { fallback: 'Ready-made Modules' })}
        description={t('ready_mode_description', { default: 'Committed to eco-friendly practices.' })}

        images={[
          '/images/services/ready-made-modules.png',
          '/images/services/2.jpeg',
        ]}
        isComing={true}
        isReverse={false}
      />
    </S.Container>
  );
};
