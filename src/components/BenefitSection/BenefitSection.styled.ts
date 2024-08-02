import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin: 60px 0;
  padding-bottom: 24px;
  border-bottom: 1px solid #e4e4e4;

  @media (max-width: 1400px) {
    flex-direction: column;
    padding: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const BenefitSectionImage = styled.img``;

export const BenefitSectionContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
  margin-top: 130px;
  width: 100%;
  height: 100%;

  @media (max-width: 980px) {
    margin-top: 64px;
  }

  @media (max-width: 450px) {
    margin-bottom: 60px;
    padding: 0;
    max-width: 322px;
  }
`;

export const BenefitSectionTitle = styled.h2`
  font-size: 50px;
  font-weight: 600;
  line-height: 54px;

  @media (max-width: 768px) {
    font-size: 22px;
    font-weight: 500;
    line-height: 28px;
  }
`;

export const BenefitSectionDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 24px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 16px;
    margin-bottom: 24px;
  }
`;

export const LearnMore = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  background: transparent;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #1a1a1a;

  svg {
    margin-top: -4px;
  }

  @media (max-width: 980px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;
