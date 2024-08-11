import styled from 'styled-components';

export const LanguageSwitcher = styled.div`
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 2px 2px 2px 2px;
    border: none;
  }

  @media (max-width: 980px) {
    padding: 8px 0;
  }
`;

export const LanguageSelect = styled.select`
  background-color: transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;

  @media (max-width: 980px) {
    display: block;
    font-weight: 500;
    line-height: 18px;
    border: none;
    font-size: 18px;
    padding: 5px;
    margin-left: -2px;
    height: 25px;
  }
`;

export const LanguageSelectOption = styled.option`
  text-decoration: none;
  border: none;
  color: ${({ theme }) => theme.palette.common.black};
  font-size: 17px;
  font-weight: 500;
  line-height: 18px;
  padding: 20px;
`;
