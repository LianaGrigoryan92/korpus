import styled from 'styled-components';

export const RefundContainer = styled.div`
  padding: 20px;
  // background-color: #f9f9f9;
  min-height: 100vh;
`;

export const RefundTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const RefundContent = styled.div`
  font-size: 1rem;
  line-height: 1.5;
`;

export const RefundSubTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const RefundParagraph = styled.p`
  margin-bottom: 10px;
`;

export const RefundLink = styled.a`
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;