"use client"

import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h2`
    color: #000000;
    font-size: 50px;
    font-weight: 600;
    line-height: 54px;
    margin-bottom: 60px;
`;

export const InfoContent = styled.div`
    margin: 0 73px;
    display: flex;
    gap: 142px;
`;

export const InfoBlockContainerRight = styled.div`
    margin-bottom: 48px;
    display: flex;
    align-items: flex-end;
`;

export const InfoBlockContainerLeft = styled.div`
    margin-top: 22px;
    display: flex;
    align-items: start;
`;

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
`;

export const InfoItem = styled.div``;

export const InfoItemTitle = styled.h4`
    color: #000000;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 16px;
    border-bottom: 1px solid #E0DCDC;
    margin-bottom: 16px;
`;

export const InfoItemDescription = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.6);
`;