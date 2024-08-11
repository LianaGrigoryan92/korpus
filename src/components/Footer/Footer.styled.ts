import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div<{ $bgImage: string }>`
  background-image: url(${({ $bgImage }) => $bgImage});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 660px;

  @media (max-width: 980px) {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    height: 516px;
  }
`;

export const FooterContent = styled.div`
  background: ${({ theme }) => theme.palette.common.black};
  padding: 58px 60px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1400px) {
    align-items: center;
  }

  @media (max-width: 980px) {
    align-items: flex-start;
    padding: 32px 24px;
    grid-template-columns: 1fr;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #a3a3a3;
`;

export const Logo = styled.img`
  max-width: 516px;

  @media (max-width: 980px) {
    max-width: 350px;
  }
`;

export const FooterLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;

  @media (max-width: 980px) {
    padding-top: 24px;
    border-top: 1px solid #1a1a1a;
    gap: 10px;
    align-items: flex-start;
    margin: 24px 0;
  }
`;

export const FooterRightSide = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1400px) {
    align-items: center;
    gap: 24px;
  }

  @media (max-width: 980px) {
    align-items: flex-start;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 52px;
  margin-top: 20px;

  @media (max-width: 1400px) {
    gap: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    width: 100%;
    gap: 24px;

    & > :last-child {
      padding-top: 24px;
      border-top: 1px solid #1a1a1a;
    }
  }
`;

export const FooterNavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterNavItem = styled.div`
  a {
    color: #a3a3a3;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    svg {
      margin-left: 4px;
      margin-bottom: -5px;
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;

  @media (max-width: 980px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
`;
