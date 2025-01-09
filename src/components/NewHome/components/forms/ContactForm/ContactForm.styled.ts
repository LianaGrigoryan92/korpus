"use client";

import styled from "styled-components";

export const ContactFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
`;

export const FormTitle = styled.h1`
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 40px;
    color: #000000;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    label {

    }
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #1A1A1A;
`;

export const Input = styled.input`
    width: 100%;
    padding: 16px 6px;
    border-bottom: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-family: inherit;

    &:focus {
        outline: none;
        border-color: #000;
    }
    
    &::placeholder {
        font-size: 16px;
        color: #747474;
        line-height: 16px;
        font-weight: 400;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 8px 12px;
    border-bottom: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-family: inherit;
    min-height: 80px;
    max-width: 600px;

    &:focus {
        outline: none;
        border-color: #000;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background-color: #444;
    }
`;

export const ErrorMessage = styled.span`
    font-size: 12px;
    color: red;
`;
