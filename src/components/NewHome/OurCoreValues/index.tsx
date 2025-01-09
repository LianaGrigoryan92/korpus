import React from 'react';
import Image from "next/image";

// styled & images
import * as S from './OurCoreValues.styled';
import OurCoreValuesGif from '@/public/images/gif/ourcorevalues.gif';


export const OurCoreValues = () => {
    return (
        <S.Container>
            <S.Title>Our Core Values</S.Title>
            <S.InfoContent>
                <S.InfoBlockContainerLeft>
                    <S.InfoBlock>
                        <S.InfoItem>
                            <S.InfoItemTitle>Customer Focus</S.InfoItemTitle>
                            <S.InfoItemDescription>Your comfort and satisfaction are at the heart of our business model</S.InfoItemDescription>
                        </S.InfoItem>
                        <S.InfoItem>
                            <S.InfoItemTitle>Affordability</S.InfoItemTitle>
                            <S.InfoItemDescription>Luxury doesn’t have to break the bank.
                                We provide cost-effective options for everyone.</S.InfoItemDescription>
                        </S.InfoItem>
                    </S.InfoBlock>
                </S.InfoBlockContainerLeft>
                <Image src={OurCoreValuesGif.src} alt="Our core values" width={304} height={434} />
                <S.InfoBlockContainerRight>
                    <S.InfoBlock>
                        <S.InfoItem>
                            <S.InfoItemTitle>Quality Assurance</S.InfoItemTitle>
                            <S.InfoItemDescription>We handpick every piece to ensure it meets the highest quality standards</S.InfoItemDescription>
                        </S.InfoItem>
                        <S.InfoItem>
                            <S.InfoItemTitle>Sustainability</S.InfoItemTitle>
                            <S.InfoItemDescription>Committed to eco-friendly practices, we only source materials from sustainable vendors.</S.InfoItemDescription>
                        </S.InfoItem>
                    </S.InfoBlock>
                </S.InfoBlockContainerRight>
            </S.InfoContent>
        </S.Container>
    );
}