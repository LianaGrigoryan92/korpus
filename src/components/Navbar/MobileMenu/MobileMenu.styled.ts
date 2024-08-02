import styled from 'styled-components';

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 16px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
`;

export const CancelButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
`;

export const Logo = styled.img`
  width: 100%;
  font-weight: bold;
  margin: 24px 0;
`;

export const MenuList = styled.div`
  padding: 0;
  margin: 0;
`;

export const MenuListContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 84px;
`;

export const Search = styled.input`
  padding: 8px 0;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
      background: transparent;
    font-size: 18px;
    line-height: 18px;
  
    &::placeholder {
      color: ${({ theme }) => theme.palette.common.black};
      font-size: 18px;
      line-height: 18px;
    }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration { display: none; }
`;

export const MenuItem = styled.div`
  padding: 8px 0;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;
