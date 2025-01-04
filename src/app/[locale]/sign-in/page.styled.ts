'use client';

import styled from 'styled-components';

export const SignUp = styled.div`
  margin: 150px 0;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  color: red;
  margin-bottom: 10px;
`;

export const SuccessMessage = styled.div`
  font-size: 16px;
  color: green;
  text-align: center;
  margin-top: 20px;
`;
