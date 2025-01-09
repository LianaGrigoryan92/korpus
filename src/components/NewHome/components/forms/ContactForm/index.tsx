"use client";

import React from "react";
import { useForm } from "react-hook-form";

// styled
import * as S from "./ContactForm.styled";
import {Label} from "./ContactForm.styled";

type FormData = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
    };

    return (
        <S.ContactFormContainer>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <S.FormField>
                    <S.Label htmlFor="name">Name</S.Label>
                    <S.Input
                        id="name"
                        placeholder="Type"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
                </S.FormField>

                {/* Phone Field */}
                <S.FormField>
                    <S.Label htmlFor="phone">Phone</S.Label>
                    <S.Input
                        id="phone"
                        placeholder="Type"
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
                    <S.Label htmlFor="email">Email</S.Label>
                    <S.Input
                        id="email"
                        type="email"
                        placeholder="Type"
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
                    <S.Label htmlFor="message">Message</S.Label>
                    <S.TextArea
                        id="message"
                        placeholder="Type"
                        {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && (
                        <S.ErrorMessage>{errors.message.message}</S.ErrorMessage>
                    )}
                </S.FormField>

                {/* Submit Button */}
                <S.SubmitButton type="submit">Submit</S.SubmitButton>
            </S.Form>
        </S.ContactFormContainer>
    );
};
