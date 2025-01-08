"use client"

import React, { useState } from 'react'
import { truncateText } from "@/utils/truncateText";

// styled
import * as S from './ServiceItem.styled';

interface IProps {
    title: string
    description: string
    image: string
    isComing: boolean
    isReverse: boolean
}

export const ServiceItem = ({
    isComing,
    title,
    image,
    description,
    isReverse
    }: IProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <S.ServiceItemContainer $isReverse={isReverse} $isComing={isComing}>
            <S.ServiceItemContent>
                <S.ServiceItemTitle $isReverse={isReverse}>{title}</S.ServiceItemTitle>
                <S.ServiceItemText $isReverse={isReverse} $isExpanded={isExpanded}>
                    {isExpanded ? description : truncateText(description, 100)}
                    <S.ServiceItemTextReadButton onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? "Read Less" : "Read More"}
                    </S.ServiceItemTextReadButton>
                </S.ServiceItemText>
                {isComing && (
                    <S.ComingSoon $isReverse={isReverse}>Coming Soon</S.ComingSoon>
                )}
            </S.ServiceItemContent>
            <S.ServiceItemImageWrapper $isExpanded={isExpanded}>
                <S.ServiceItemImage  src={image} alt={`${title} service image`}/>
            </S.ServiceItemImageWrapper>
        </S.ServiceItemContainer>
    );
}