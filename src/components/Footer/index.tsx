'use client';

// styles
import * as S from './Footer.styled';
import FooterBanner from '@/public/images/components/footer/banner.png';
import Logo from '@/public/images/components/footer/logo.png';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery';

export default function Footer() {
  const isMobile = useClientMediaQuery('(max-width: 980px)');
  const pathname = usePathname();

  return (
    <S.Container>
      {!pathname.includes('korpus-pro') && (
        <S.Image $bgImage={FooterBanner.src} />
      )}
      <S.FooterContent>
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
                  <S.FooterNavItem>
                    <Link href="/about">About</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/services">Services</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/shop">Shop</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/carriers">Carriers</Link>
                  </S.FooterNavItem>
                </S.FooterNavList>
                <S.FooterNavList>
                  <S.FooterNavItem>
                    <Link href="/contact">Contact</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/shipping">Shipping & Delivery</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/refund">Return & Refund</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/faq">FAQ</Link>
                  </S.FooterNavItem>
                </S.FooterNavList>
                <S.FooterNavList>
                  <S.FooterNavItem>
                    <Link href="/terms">Terms & conditions</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/privacy">Privacy policy</Link>
                  </S.FooterNavItem>
                </S.FooterNavList>
              </>
            )}
            {isMobile && (
              <>
                <S.FooterNavList>
                  <S.FooterNavItem>
                    <Link href="/about">About</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/services">Services</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/shop">Shop</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/carriers">Carriers</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/contact">Contact</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/shipping">Shipping & Delivery</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/refund">Return & Refund</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/faq">FAQ</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/terms">Terms & conditions</Link>
                  </S.FooterNavItem>
                  <S.FooterNavItem>
                    <Link href="/privacy">Privacy policy</Link>
                  </S.FooterNavItem>
                </S.FooterNavList>
              </>
            )}
            <S.FooterNavList>
              <S.FooterNavItem>
                <Link href="/email">
                  info@korpus.com
                  <ArrowUpRight size={22} color="#A3A3A3" />
                </Link>
              </S.FooterNavItem>
              <S.FooterNavItem>
                <Link href="/instagram">
                  Instagram
                  <ArrowUpRight size={22} color="#A3A3A3" />
                </Link>
              </S.FooterNavItem>
              <S.FooterNavItem>
                <Link href="/facebook">
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
      </S.FooterContent>
    </S.Container>
  );
}
