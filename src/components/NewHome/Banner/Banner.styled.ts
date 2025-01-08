"use client"

import styled from 'styled-components'

export const BannerWrapper = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const BannerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const BannerTitle = styled.h1`
    font-family: 'Helvetica', sans-serif;
    font-size: 128px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 100px;
`;

export const BannerButton = styled.button`
    background: #141414;
    outline: none;
    border: none;
    border-radius: 8px;
    max-width: 256px;
    width: 100%;
    height: 102px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const BannerGif = styled.div``;