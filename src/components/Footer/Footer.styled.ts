import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img``;

export const FooterContent = styled.div`
  background: ${({ theme }) => theme.palette.common.black};
  padding: 58px 60px 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
`;

export const FooterLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

export const FooterRightSide = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 52px;
  margin-top: 20px;
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
`;
