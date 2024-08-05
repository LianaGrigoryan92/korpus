'use client';

import styled from 'styled-components';

export const AboutContainer = styled.div``;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  color: ${({ theme }) => theme.palette.common.secondaryGray};
  margin-bottom: 40px;
`;

export const AboutFirstContent = styled.div`
  display: flex;
  margin-bottom: 60px;
  gap: 96px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

export const AboutFirstInfoContent = styled.div`
    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

  h2 {
    max-width: 468px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-align: left;
    color: ${({ theme }) => theme.palette.common.black};

    @media (max-width: 1200px) {
    text-align: center;
    max-width: 80%;
  }
  }

  p:last-of-type {
    margin-top: 110px;

    @media (max-width: 1200px) {
      margin-top: 0;

  }
  }

  p {
    max-width: 580px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #414141;

    @media (max-width: 1200px) {
      text-align: center;
      max-width: 80%;
    }
  }
`;

export const AboutFirstImage = styled.img`
    @media (max-width: 1200px) {
      width: 100%;
    }
`;

export const AboutSecondaryContent = styled.div`
  display: flex;
  margin-bottom: 120px;
  gap: 60px;

  @media (max-width: 1200px) {
      height: min-content;
      flex-direction: column;
      gap: 30px;
    }
`;

export const AboutSecondaryInfoContent = styled.div`
    @media (max-width: 1200px) {
      display: flex;
      justify-content: center;
      gap: 0;
    }

  p {
    max-width: 580px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #414141;

    @media (max-width: 1200px) {
      text-align: center;
      max-width: 80%;
    }
  }
`;

export const AboutSecondaryImage = styled.img`
    @media (max-width: 1200px) {
      width: 100%;
      height: 100%;
    }
`;

export const AboutLastContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-bottom: 40px;
  }
`;

export const AboutLastInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 516px;

  @media (max-width: 1200px) {
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    color: #000000;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #414141;

    @media (max-width: 1200px) {
      text-align: center;
      max-width: 90%;
    }
  }
`;

export const AboutLastImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AboutLastImage = styled.img`
  max-width: 100%;
  height: 660px;

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
  }
`;

export const Questions = styled.div`
  display: flex;
  gap: 60px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 120px;

  @media (max-width: 1200px) {
    gap: 32px;
    margin-bottom: 40px;
    flex-direction: column;
  }
`;

export const QuestionsBLock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .accordion-summary {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
    color: #000;

    @media (max-width: 960px) {
      font-size: 18px;
    }
  }

  .accordion-details {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #414141;
  }
`;

export const Image = styled.img`
  max-height: 412px;

  @media (max-width: 1200px) {
      width: 100%;
      height: 100%;
  }
`;

export const AboutBlog = styled.div`
  display: flex;
  gap: 49px;
  justify-content: space-between;
  margin-bottom: 120px;
  margin-top: 60px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }
`;

export const AboutBlogImage = styled.img`
  width: 100%;
  height: 562px;

  @media (max-width: 1200px) {
      width: 100%;
      height: 100%;
  }
`;

export const AboutBlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;


`;

export const AboutBlogTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  color: #1A1A1A;
`;

export const AboutBlogDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #1A1A1A;
`;

export const AboutBlogButton = styled.button`
  margin-top: 36px;
  display: flex;
  gap: 4px;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #000000;

  svg {
    padding-bottom: 3px;
  }

  @media (max-width: 1200px) {
    margin-top: 0;
  }
`;