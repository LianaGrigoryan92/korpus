import React from 'react';
import Image from 'next/image';

// styled & image
import * as S from './Contact.styled';
import ContactGif from '@/public/images/home/contact.gif';
import FacebookIcon from '@/public/images/icons/facebook.svg';
import InstagramIcon from '@/public/images/icons/instagram.svg';
import Link from 'next/link';
import { ContactForm } from '@/components/NewHome/components';
import { useTranslations } from 'next-intl';

export const ContactBlock = () => {
    const t = useTranslations('Contact');
  return (
    <S.ContactBlockContainer>
      <S.ContactBlockLeftContainer>
        <S.CollaborateTitle>{t('collaborate')}</S.CollaborateTitle>
        <S.ContactInfo>
          <S.ContactInfoItem>{t('call_number')} +374 44 711 611</S.ContactInfoItem>
          <S.ContactInfoItem>{t('email_adress')} info@korpus.am</S.ContactInfoItem>
          <S.ContactInfoItem>
          {t('adress')}{' '}
          </S.ContactInfoItem>
        </S.ContactInfo>
        <S.SocialButtons>
          <S.SocialItemButton>
            <Link
              href={'https://www.facebook.com/korpus.am/'}
              target={'_blank'}
            >
              <Image
                src={FacebookIcon.src}
                alt="Social Button"
                width={27}
                height={27}
              />
            </Link>
          </S.SocialItemButton>
          <S.SocialItemButton>
            <Link
              href={'https://www.instagram.com/korpus.am'}
              target={'_blank'}
            >
              <Image
                src={InstagramIcon.src}
                alt="Social Button"
                width={27}
                height={27}
              />
            </Link>
          </S.SocialItemButton>
        </S.SocialButtons>
        <S.ContactGif src={ContactGif.src} alt="korpus contact image" />
      </S.ContactBlockLeftContainer>
      <S.ContactBlockRightContainer>
        <S.Title>
        {t('contact_title')} 
        </S.Title>
        <ContactForm />
      </S.ContactBlockRightContainer>
    </S.ContactBlockContainer>
  );
};
