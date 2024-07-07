import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    margin: 60px 0;
    padding-bottom: 24px;
    border-bottom: 1px solid #E4E4E4;
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
`;

export const BenefitSectionTitle = styled.h2`
    font-size: 50px;
    font-weight: 600;
    line-height: 54px;
`;

export const BenefitSectionDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 24px;
    margin-bottom: 60px
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
    
    svg {
        margin-top: -4px;
    }
`;
