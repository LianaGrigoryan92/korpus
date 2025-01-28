'use client';

import React from 'react';

// styled
import * as S from './OurServices.styled';
import { ServiceItem } from '@/components/NewHome/components';
import { mockServices } from '@/components/NewHome/OurServices/mockServices';
import { ServiceItemSlider } from '../components/ServiceItemSlider';

export const OurServices = () => {
  return (
    <S.Container>
      <S.Title>Our Services</S.Title>
      {mockServices.map((service, index) => (
        <ServiceItem
          key={service.id}
          title={service.title}
          description={service.description}
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
        title={'Ready-made Modules'}
        description={
          'Committed to eco-friendly practices, we only source materials from sustainable vendors. Committed to eco-friendly practices, we only source materials from sustainable vendors.Committed to eco-friendly practices, we only source materials from sustainable vendors. Committed to eco-friendly practices, we only source materials from sustainable vendors. Committed to eco-friendly practices, we only source materials from sustainable vendors. Committed to eco-friendly practices, we only source materials from sustainable vendors. Committed to eco-friendly practices, we only source materials from sustainable vendors.'
        }
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
