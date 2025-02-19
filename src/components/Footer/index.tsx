'use client';

// styles
import * as S from './Footer.styled';
import FooterBanner from '@/public/images/components/footer/banner.png';
import Logo from '@/public/images/components/footer/logo.png';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const isMobile = useClientMediaQuery('(max-width: 980px)');
  const pathname = usePathname();
  const hide = ['sign-in', 'sign-up'].includes(pathname.split('/')[2]);
    const t = useTranslations('Footer');

  return (
    <S.Container>
      {/* {!['/korpus-pro', '/cart'].some(path => pathname.includes(path)) && (
        <S.Image $bgImage={FooterBanner.src} />
      )} */}
      {!hide && <S.FooterContent>
        {!isMobile && (
          <S.FooterLeftSide>
            <S.Logo src={Logo.src} alt="Korpus Logo" />
            <S.Text>
              Korpus — A collectible furniture studio backed by <br />a
              manufacturing workshop.
            </S.Text>
          </S.FooterLeftSide>
        )}
        <S.FooterRightSide>
          <S.FooterNav>
            {!isMobile && (
              <>
                <S.FooterNavList>
                  {/* TODO about is must be here */}
                  {/* <S.FooterNavItem>
                    <Link href="/services">Services</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/shop">Shop</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/carriers">Carriers</Link>
                  </S.FooterNavItem> */}
                </S.FooterNavList>
                <S.FooterNavList>
                <S.FooterNavItem>
                    <Link href="/about">{t('about')}</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="#" onClick={(e) => {
                      e.preventDefault();
                      window.scrollBy({
                        top: -350,
                        behavior: 'smooth',
                      });
                    }}>Contact Us</Link>
                    
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/faq">FAQ</Link>
                  </S.FooterNavItem>
                  {/* <S.FooterNavItem>
                    <Link href="/shipping">Shipping & Delivery</Link>
                  </S.FooterNavItem> */}
                </S.FooterNavList>
                <S.FooterNavList>
                  <S.FooterNavItem>
                    <Link href="/terms">{t('terms')}</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/privacy">{t('privacy')}</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/refund">{t('refund')}</Link>
                  </S.FooterNavItem>
            
                </S.FooterNavList>
              </>
            )}
            {isMobile && (
              <S.FooterNavColumn>
                <S.FooterNavList>
                  <S.FooterNavItem>
                    <Link href="/about">{t('about')}</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/services">{t('services')}</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/shop">{t('shop')}</Link>
                  </S.FooterNavItem>
                  {/* <S.FooterNavItem>
                    <Link href="/carriers">Carriers</Link>
                  </S.FooterNavItem> */}
                  <S.FooterNavItem>
                    <Link href="/contact">{t('contact')}</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/shipping">{t('shipping')}</Link>
                  </S.FooterNavItem>

                </S.FooterNavList>
                <S.FooterNavList>
                <S.FooterNavItem>
                    <Link href="/refund">{t('refund')}</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/faq">FAQ</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/terms">{t('terms')}</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/privacy">{t('privacy')}</Link>
                  </S.FooterNavItem>
                </S.FooterNavList>
              </S.FooterNavColumn>
            )}
            <S.FooterNavList>
              <S.FooterNavItem>
                <Link href="mailto:info@korpus.am">
                  info@korpus.am
                  <ArrowUpRight size={22} color="#A3A3A3" />
                </Link>
              </S.FooterNavItem>
              <S.FooterNavItem>
                <Link href="https://www.instagram.com/korpus.am" target='_blank'>
                  Instagram
                  <ArrowUpRight size={22} color="#A3A3A3" />
                </Link>
              </S.FooterNavItem>
              <S.FooterNavItem>
                <Link href="https://www.facebook.com/korpus.am/" target='_blank'>
                  Facebook
                  <ArrowUpRight size={22} color="#A3A3A3" />
                </Link>
              </S.FooterNavItem>
            </S.FooterNavList>
          </S.FooterNav>
          {isMobile && (
            <S.FooterLeftSide>
              <S.Logo src={Logo.src} alt="Korpus Logo" />
              <S.Text>
                Korpus — A collectible furniture studio backed by <br />a
                manufacturing workshop.
              </S.Text>
            </S.FooterLeftSide>
          )}
          <S.TextWrapper>
            <S.Text>© 2024 Korpus</S.Text>
            <S.Text>All right Reserved.</S.Text>
          </S.TextWrapper>
        </S.FooterRightSide>
      </S.FooterContent>}
    </S.Container>
  );
}
