'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Link from 'next/link';
import * as S from './page.styled';
import { MainLayout } from '@/components';
import { useRouter } from 'next/navigation';

interface FormData {
  clientType: string;
  name: string;
  surname: string;
  patronymic?: string;
  email: string;
  phone: string;
  password: string;
  companyName?: string;
  tin?: string;
}

function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [clientType, setClientType] = useState('Individual'); // Default type: Individual
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // Success state

  const onSubmit = async (data: FormData) => {
    const requestBody = {
      id: 0,
      email: data.email,
      companyName: data.companyName || '',
      surname: data.surname,
      name: data.name,
      patronymic: data.patronymic || '',
      type: clientType === 'Individual' ? 0 : 1,
      languageCode: 'am',
      phone: data.phone,
      password: data.password,
      uid1C: '',
      remark: '',
      personalManagerId: 0,
      INN: data.tin || '',
      defaultDeliveryAddress: '',
      numberDocument: '',
      seriesDocument: '',
      dateOfIssueDocument: new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const result = await response.json();
      console.log('Response:', result);

      // Set success state
      setRegistrationSuccess(true);
      router.push('/sign-in');
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed!');
    }
  };

  return (
    <S.SignUp>
      <MainLayout>
        <S.SignUpWrapper>
          <S.Title>REGISTRATION</S.Title>
          <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
            {/* Client Type */}
            <S.Title>
              Hey, welcome to <br />
              the Korpus
            </S.Title>
            <label>
              <S.Select
                {...register('clientType')}
                value={clientType}
                onChange={(e) => setClientType(e.target.value)}
              >
                <option value="Individual">Individual</option>
                <option value="Legal entity">Legal entity</option>
              </S.Select>
            </label>

            {/* Conditional Fields for Legal Entity */}
            {clientType === 'Legal entity' && (
              <>
                <S.Wrap>
                  <S.Label $isError={!!errors.companyName}>
                    Company Name
                  </S.Label>
                  <S.Input
                    placeholder="Type"
                    {...register('companyName', {
                      required:
                        clientType === 'Legal entity' &&
                        'Company name is required',
                    })}
                  />
                  {errors.companyName && (
                    <S.ErrorMessage>
                      {String(errors.companyName.message)}
                    </S.ErrorMessage>
                  )}
                </S.Wrap>
                <S.Wrap>
                  <S.Label $isError={!!errors.tin}>TIN</S.Label>
                  <S.Input
                    placeholder="Type"
                    {...register('tin', {
                      required:
                        clientType === 'Legal entity' && 'TIN is required',
                    })}
                  />
                  {errors.tin && (
                    <S.ErrorMessage>
                      {String(errors.tin.message)}
                    </S.ErrorMessage>
                  )}
                </S.Wrap>
              </>
            )}

            {/* Name */}
            <S.Wrap>
              <S.Label $isError={!!errors.name}>Name</S.Label>
              <S.Input
                placeholder="Type"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <S.ErrorMessage>{String(errors.name.message)}</S.ErrorMessage>
              )}
            </S.Wrap>

            {/* Surname */}
            <S.Wrap>
              <S.Label $isError={!!errors.surname}>Surname</S.Label>
              <S.Input
                placeholder="Type"
                {...register('surname', { required: 'Surname is required' })}
              />
              {errors.surname && (
                <S.ErrorMessage>
                  {String(errors.surname.message)}
                </S.ErrorMessage>
              )}
            </S.Wrap>

            {/* Middle Name */}
            <S.Wrap>
              <S.Label $isError={!!errors.patronymic}>Middle Name</S.Label>
              <S.Input placeholder="Type" {...register('patronymic')} />
            </S.Wrap>

            {/* Email */}
            <S.Wrap>
              <S.Label $isError={!!errors.email}>Email</S.Label>
              <S.Input
                placeholder="Type"
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
            </S.Wrap>
            {/* Phone */}
            <S.Wrap>
              <S.Label $isError={!!errors.phone}>Phone Number</S.Label>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                rules={{ required: 'Phone number is required' }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country="am"
                    value={field.value}
                    onChange={(phone) => field.onChange(phone)}
                    buttonStyle={{
                      border: 'none',
                      background: 'transparent',
                      fontSize: '16px',
                      paddingBottom: '14px',
                    }}
                    containerStyle={{
                      marginTop: '12px',
                    }}
                    specialLabel=""
                    inputStyle={{
                      background: 'transparent',
                      border: 'none',
                      width: '100%',
                      padding: '10px 10px 20px 50px',
                      fontSize: '16px',
                      borderBottom: '1px solid #e4e4e4',
                      marginBottom: '15px',
                    }}
                  />
                )}
              />
              {errors.phone && (
                <S.ErrorMessage>{String(errors.phone.message)}</S.ErrorMessage>
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
            </S.Wrap>
            {/* Submit Button */}
            <S.SubmitButton type="submit">Sign Up</S.SubmitButton>
          </S.SignUpForm>
        </S.SignUpWrapper>
      </MainLayout>
    </S.SignUp>
  );
}

export default SignUp;
