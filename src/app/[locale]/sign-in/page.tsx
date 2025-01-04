'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './page.styled';
import { MainLayout } from '@/components';

interface FormData {
  email: string;
  password: string;
}

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [signInSuccess, setSignInSuccess] = useState(false); // Success state
  const [errorMessage, setErrorMessage] = useState(''); // Error state

  const onSubmit = async (data: FormData) => {
    const requestBody = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await fetch('/api/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        setErrorMessage(errorResponse.message || 'Sign-in failed!');
        throw new Error('Failed to sign in');
      }

      const result = await response.json();
      console.log('Response:', result);

      // Set success state
      setSignInSuccess(true);
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <S.SignUp>
      <MainLayout>
        <S.SignUpWrapper>
          <S.Title>SIGN IN</S.Title>

          {signInSuccess ? (
            <S.SuccessMessage>
              Sign-in successful! You are now logged in.
            </S.SuccessMessage>
          ) : (
            <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <S.Input
                placeholder="Email *"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <S.ErrorMessage>{String(errors.email.message)}</S.ErrorMessage>
              )}

              {/* Password */}
              <S.Input
                placeholder="Password *"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters long',
                  },
                })}
              />
              {errors.password && (
                <S.ErrorMessage>
                  {String(errors.password.message)}
                </S.ErrorMessage>
              )}

              {/* Error Message */}
              {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

              {/* Submit Button */}
              <S.SubmitButton type="submit">SIGN IN</S.SubmitButton>
            </S.SignUpForm>
          )}
        </S.SignUpWrapper>
      </MainLayout>
    </S.SignUp>
  );
}

export default SignIn;
