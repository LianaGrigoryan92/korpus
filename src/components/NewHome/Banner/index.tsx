"use client"

import React from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";

// images
import CuttingGif from '@/public/images/gif/cutting.gif';
import EdgingGif from '@/public/images/gif/edging.gif';
import ProcessingGif from '@/public/images/gif/proccessing.gif';
import CoatingGif from '@/public/images/gif/coating.gif';
import Logo from '@/public/images/icons/logo.svg';
import { useTranslations } from 'next-intl';

// styled
import * as S from './Banner.styled';

export const Banner = () => {
    const router = useRouter();

    const handleBrowseShop = () => {
        router.push('/korpus-pro')
    }
      const t = useTranslations('Banner');

    return (
        <S.BannerWrapper>
            <S.BannerContent>
                <S.BannerTitle>{t('create')}</S.BannerTitle>
                <S.BannerGif><Image src={CuttingGif.src} alt="Cutting" width={425} height={102} /></S.BannerGif>
                <S.BannerTitle>{t('your')}</S.BannerTitle>
            </S.BannerContent>
            <S.BannerContent>
                <S.BannerTitle>{t('furniture')}</S.BannerTitle>
                <S.BannerGif><Image src={EdgingGif.src} alt="Edging" width={560} height={102} /></S.BannerGif>
            </S.BannerContent>
            {/* <S.BannerContent>
                <S.BannerGif><Image src={ProcessingGif.src} alt="Processing" width={594} height={102} /></S.BannerGif>
                <S.BannerTitle>together</S.BannerTitle>
            </S.BannerContent> */}
            <S.BannerContent>
                <S.BannerTitle>{t('with')}</S.BannerTitle>
                <S.BannerGif>
                    <Image src={CoatingGif.src} alt="Coating"  width={510} height={102} />
                </S.BannerGif>
                <S.BannerTitle>{t('us')}</S.BannerTitle>
                <S.BannerButton onClick={handleBrowseShop}>
                    <img src={Logo.src} alt="Korpus Logo" />
                </S.BannerButton>
            </S.BannerContent>
        </S.BannerWrapper>
    )
}