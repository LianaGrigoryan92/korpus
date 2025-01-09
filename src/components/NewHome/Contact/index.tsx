import React from 'react';
import Image from "next/image";

// styled & image
import * as S from './Contact.styled';
import ContactGif from '@/public/images/home/contact.gif';
import FacebookIcon from '@/public/images/icons/facebook.svg';
import InstagramIcon from '@/public/images/icons/instagram.svg';
import Link from "next/link";
import {ContactForm} from "@/components/NewHome/components";

export const ContactBlock = () => {
    return (
        <S.ContactBlockContainer>
            <S.ContactBlockLeftContainer>
                <S.CollaborateTitle>Let’s Collaborate.</S.CollaborateTitle>
                <S.ContactInfo>
                    <S.ContactInfoItem>Call us +374 44 711 611</S.ContactInfoItem>
                    <S.ContactInfoItem>Say hi info@korpus.am</S.ContactInfoItem>
                    <S.ContactInfoItem>Visit us Yerevan, Tevosyan 13/11 </S.ContactInfoItem>
                </S.ContactInfo>
                <S.SocialButtons>
                    <S.SocialItemButton>
                        <Link href={'https://google.com/'}>
                            <Image src={FacebookIcon.src} alt="Social Button" width={27} height={27} />
                        </Link>
                    </S.SocialItemButton>
                    <S.SocialItemButton>
                        <Link href={'https://google.com/'}>
                            <Image src={InstagramIcon.src} alt="Social Button" width={27} height={27} />
                        </Link>
                    </S.SocialItemButton>
                </S.SocialButtons>
                <S.ContactGif src={ContactGif.src} alt="korpus contact image" />
            </S.ContactBlockLeftContainer>
            <S.ContactBlockRightContainer>
                <S.Title>Get in touch with us. <br/> We are here to assist you</S.Title>
                <ContactForm />
            </S.ContactBlockRightContainer>
        </S.ContactBlockContainer>
    );
}