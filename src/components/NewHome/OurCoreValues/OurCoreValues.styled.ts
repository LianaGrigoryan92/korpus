"use client"

import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h2`
    color: #000000;
    font-size: 50px;
    font-weight: 600;
    line-height: 54px;
    margin-bottom: 60px;
  @media (max-width: 1280px) {
    font-size: 40px;
  }
    @media (max-width: 768px) {
    font-size: 32px;
    line-height: 36px;
    text-align: center;
  }
`;

export const InfoContent = styled.div`
    // margin: 0 73px;
    display: flex;
    gap: 42px;
     @media (max-width: 1200px) {
    gap: 10px;
    }

    @media (max-width: 1040px) {
    // flex-direction: column;
    gap: 0;
    flex-wrap: wrap;
    img {
        width: 40%;
        height: auto;
        }
    
    }
        @media (max-width: 768px) {
 
    img {
      display: none;
        }
 
`;

export const InfoBlockContainerRight = styled.div`
    margin-bottom: 48px;
    display: flex;
    align-items: flex-end;
    width: calc(100% - 304px);
    @media (max-width: 1040px) {
        width: 100%;
    }
`;

export const InfoBlockContainerLeft = styled.div`
    margin-top: 22px;
    display: flex;
    align-items: start;
    width: calc(100% - 304px);
    @media (max-width: 1040px) {
        width: 60%;
        padding-right: 20px;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 40px;
    }
`;

export const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 56px;
    @media (max-width: 1040px) {
        
        gap: 40px;
       
    }
`;

export const InfoItem = styled.div``;

export const InfoItemTitle = styled.h4`
    color: #000000;
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 16px;
    border-bottom: 1px solid #E0DCDC;
    margin-bottom: 16px;

    @media (max-width: 1280px) {
    font-size: 20px;
    }
`;

export const InfoItemDescription = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.6);
`;