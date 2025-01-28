'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './page.styled';
import { MainLayout } from '@/components';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  login: string;
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
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const requestBody = {
      login: data.login,
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
        setErrorMessage(errorResponse.message);
        throw new Error('Failed to sign in');
      }

      const result = await response.json();
      localStorage.setItem(
        'user',
        JSON.stringify({
          login: requestBody.login,
          password: requestBody.password,
          accessToken: result.token.access,
          refreshToken: result.token.refresh,
          userId: 8782,
        }),
      );
      // Set success state
      setSignInSuccess(true);
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (signInSuccess) {
      window.location.href = '/korpus-pro';
    }
  }, [signInSuccess]);

  return (
    <S.SignIn>
      <MainLayout>
        <S.SignUpWrapper>
          {signInSuccess ? (
            <S.SuccessMessage>
              Sign-in successful! You are now logged in.
            </S.SuccessMessage>
          ) : (
            <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
              <S.Title>
                Hey, welcome to <br />
                the Korpus
              </S.Title>
              {/* Email */}
              <S.Wrap>
                <S.Label $isError={!!errors.login}>Email</S.Label>
                <S.Input
                  placeholder="Type"
                  type="email"
                  {...register('login', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.login && (
                  <S.ErrorMessage>
                    {String(errors.login.message)}
                  </S.ErrorMessage>
                )}
              </S.Wrap>

              <S.Wrap>
                {/* Password */}
                <S.Label $isError={!!errors.password}>Password</S.Label>
                <S.Input
                  placeholder="Type"
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
                {errorMessage && (
                  <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
                )}
              </S.Wrap>

              {/* Submit Button */}
              <S.SubmitButton type="submit">Sign In</S.SubmitButton>
              <S.Text>
                Don't have an account? <Link href={'/sign-up'}>Sign Up</Link>
              </S.Text>
            </S.SignUpForm>
          )}
        </S.SignUpWrapper>
      </MainLayout>
    </S.SignIn>
  );
}

export default SignIn;
