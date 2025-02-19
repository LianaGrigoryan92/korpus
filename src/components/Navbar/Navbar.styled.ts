'use client';

import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 520px) {
    justify-content: flex-end;
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  line-height: 18px;
`;

export const Button = styled.button`
  outline: none;
  background: ${({ theme }) => theme.palette.common.black};
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: 2px double black;
  padding: 10px 16px 10px;
  border-radius: 18px;
  transition: all 0.3s;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.palette.common.black};
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const LogOutButton = styled.button`
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 16px;
  font-weight: 500;
  border: 2px double black;
  padding: 10px 16px 10px;
  border-radius: 18px;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.palette.common.black};
    color: white;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const NavItemWrapper = styled.div`
  display: flex;
  gap: 24px;
  display: flex;
  align-items: center;

  .products {
    position: relative;
  }

  input {
    background: transparent;
    font-size: 17px;
    font-weight: 600;
    line-height: 18px;
    text-align: right;

    &::placeholder {
      color: ${({ theme }) => theme.palette.common.black};
      font-size: 17px;
      font-weight: 600;
      line-height: 18px;
      text-align: right;
    }
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  a,
  input {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.common.black};
    font-size: 17px;
    font-weight: 500;
    line-height: 18px;
  }

  @media (max-width: 768px) {
    gap: 12px;

    a,
    input {
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }
`;

export const ProductCategories = styled.div<{ $isVisible: boolean }>`
  background-color: #ffffff;
  border: 1px solid #f2f2f2;
  box-shadow: 6px 4px 30px 0px #00000026;
  padding: 20px;
  position: absolute;
  z-index: 1500;
  top: 30px;
  left: 0;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
`;

export const CategoryItem = styled.div`
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;

  &:hover {
    background-color: #f2f2f2;
  }
`;
