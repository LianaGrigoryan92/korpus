'use client';

import styled from 'styled-components';

export const SignUp = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #f2f2f2;
  padding: 24px;
  max-width: 424px;
  width: 424px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Label = styled.label<{ $isError: boolean }>`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: ${({ $isError }) => ($isError ? '#DA1937' : '#1A1A1A')};
`;

export const Wrap = styled.div`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 14px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  border-bottom: 1px solid #e4e4e4;
  border-radius: 4px;
  width: 100%;

  &::placeholder {
    color: #747474;
  }
`;

export const Select = styled.select`
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  border: none;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  padding: 5px 30px 5px 0;
  color: #000; /* Цвет текста */
  font-family: inherit;

  /* Убираем стандартные стрелки */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Пользовательская стрелка */
  background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none"%3E%3Cpath d="M6 7.48447L0 1.48447L1.4 0.0844727L6 4.68447L10.6 0.0844727L12 1.48447L6 7.48447Z" fill="%231C1B1F"/%3E%3C/svg%3E')
    no-repeat right 0 center;
  background-size: 12px;

  &:focus {
    outline: none;
    border-color: #000; /* Цвет подчеркивания при фокусе */
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 0 16px;
  font-size: 16px;
  color: #fff;
  background-color: #000;
  border: none;
  font-weight: 400;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #3f3f3f;
    transition: all 0.3s ease-in-out;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: #bd162f;
  line-height: 20px;
  margin-bottom: 10px;
  font-weight: 400;
  margin-top: 2px;
  letter-spacing: -0.5px;
`;

export const SuccessMessage = styled.div`
  font-size: 16px;
  color: green;
  text-align: center;
  margin-top: 20px;
`;
