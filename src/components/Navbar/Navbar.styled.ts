'use client';

import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavItemWrapper = styled.div`
  display: flex;
  gap: 24px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;
