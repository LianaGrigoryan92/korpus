"use client";

import React from "react";
import { useForm } from "react-hook-form";

// styled
import * as S from "./ContactForm.styled";
import {Label} from "./ContactForm.styled";
import { useTranslations } from 'next-intl';

type FormData = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

export const ContactForm = () => {
    const t = useTranslations('ContactForm');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
        const message = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message}`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "37499603750";  
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };
    
    

    return (
        <S.ContactFormContainer>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <S.FormField>
                    <S.Label htmlFor="name">{t('name')}</S.Label>
                    <S.Input
                        id="name"
                        placeholder={t('type')}
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
                </S.FormField>

                {/* Phone Field */}
                <S.FormField>
                    <S.Label htmlFor="phone">{t('phone')}</S.Label>
                    <S.Input
                        id="phone"
                        // placeholder={t('type')}
                        placeholder="+374 44 711 611"
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^\+?[0-9]{10,15}$/,
                                message: "Invalid phone number",
                            },
                        })}
                    />
                    {errors.phone && <S.ErrorMessage>{errors.phone.message}</S.ErrorMessage>}
                </S.FormField>

                {/* Email Field */}
                <S.FormField>
                    <S.Label htmlFor="email">{t('email')}</S.Label>
                    <S.Input
                        id="email"
                        type="email"
                        placeholder={t('type')}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
                </S.FormField>

                {/* Message Field */}
                <S.FormField>
                    <S.Label htmlFor="message">{t('message')}</S.Label>
                    <S.TextArea
                        id="message"
                        placeholder={t('type')}
                        {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && (
                        <S.ErrorMessage>{errors.message.message}</S.ErrorMessage>
                    )}
                </S.FormField>

                {/* Submit Button */}
                <S.SubmitButton type="submit">{t('submit')}</S.SubmitButton>
            </S.Form>
        </S.ContactFormContainer>
    );
};
