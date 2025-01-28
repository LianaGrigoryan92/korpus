'use client';

import styled from 'styled-components';

export const SignIn = styled.div`
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

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  display: flex;
  gap: 12px;
  margin-top: 24px;

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 600;
  }
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
  margin-bottom: 24px;
`;

export const Input = styled.input`
  padding: 16px 0;
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
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  appearance: none;
  cursor: pointer;
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
  color: white;
  text-align: center;
  margin-top: 20px;
`;
