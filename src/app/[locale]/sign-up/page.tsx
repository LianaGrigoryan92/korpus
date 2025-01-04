'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Link from 'next/link';
import * as S from './page.styled';
import { MainLayout } from '@/components';

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

          {registrationSuccess ? (
            <S.SuccessMessage>
              Registration successful! A confirmation email has been sent to
              your email address. Please check your inbox to activate your
              account.
              <br />
              <Link href="/sign-in">
                <S.LinkText>Click here to login</S.LinkText>
              </Link>
            </S.SuccessMessage>
          ) : (
            <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
              {/* Client Type */}
              <label>
                Client type *
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
                  <S.Input
                    placeholder="Company name"
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

                  <S.Input
                    placeholder="TIN"
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
                </>
              )}

              {/* Surname */}
              <S.Input
                placeholder="Surname *"
                {...register('surname', { required: 'Surname is required' })}
              />
              {errors.surname && (
                <S.ErrorMessage>
                  {String(errors.surname.message)}
                </S.ErrorMessage>
              )}

              {/* Name */}
              <S.Input
                placeholder="Name *"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <S.ErrorMessage>{String(errors.name.message)}</S.ErrorMessage>
              )}

              {/* Patronymic */}
              <S.Input placeholder="Middle name" {...register('patronymic')} />

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

              {/* Phone */}
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
                    placeholder="Phone number"
                    containerStyle={{
                      marginBottom: '15px',
                    }}
                    specialLabel=""
                    inputStyle={{
                      border: '1px solid #ccc',
                      width: '100%',
                      padding: '10px 10px 10px 50px',
                      fontSize: '16px',
                      marginBottom: '15px',
                    }}
                  />
                )}
              />
              {errors.phone && (
                <S.ErrorMessage>{String(errors.phone.message)}</S.ErrorMessage>
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

              {/* Submit Button */}
              <S.SubmitButton type="submit">CREATE AN ACCOUNT</S.SubmitButton>
            </S.SignUpForm>
          )}
        </S.SignUpWrapper>
      </MainLayout>
    </S.SignUp>
  );
}

export default SignUp;
