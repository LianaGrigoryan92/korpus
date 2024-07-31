import styled from "styled-components";

export const StepWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 538px;
    width: 100%;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: #1A1A1A;
`;

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    margin-top: 5px;
    display: block;
`;

export const Input = styled.input`
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: #1A1A1A;
    padding: 18px 0;
    border-bottom: 1px solid #E4E4E4
`;