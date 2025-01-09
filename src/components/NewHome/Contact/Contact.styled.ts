"use client"

import styled from 'styled-components';

export const ContactBlockContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 156px;
`;

export const ContactBlockLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollaborateTitle = styled.div`
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    color: #000;
    padding-bottom: 24px;
    border-bottom: 1px solid #D9D9D9;
    margin-bottom: 22px;
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 44px;
    border-bottom: 1px solid #D9D9D9;
    margin-bottom: 17px;
`;

export const ContactInfoItem = styled.div`
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #000;
`;

export const SocialButtons = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
`;

export const ContactGif = styled.img``;

export const SocialItemButton = styled.button`
    outline: none;
    background: transparent;
    cursor: pointer;
    padding: 5px;
`;

export const ContactBlockRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`;

export const Title = styled.h3`
    font-size: 50px;
    font-weight: 600;
    line-height: 54px;
    color: #000;
`;