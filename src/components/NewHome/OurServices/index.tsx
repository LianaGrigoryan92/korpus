import React from 'react';

// styled
import * as S from './OurServices.styled';
import { ServiceItem } from "@/components/NewHome/components";
import {mockServices} from "@/components/NewHome/OurServices/mockServices";

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
                    isComing={service.isComing}
                    isReverse={index % 2 !== 0}
                />
            ))}
        </S.Container>
    )
}