import styled from 'styled-components';

export const TermsContainer = styled.div`

  // background-color: #f9f9f9;
  min-height: 100vh;
  max-width: 1440px;
  padding:  40px 0;
`;

export const TermsTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  color: #1a1a1a;
  margin: 40px 0;
`;

export const TermsSubTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
  color: #1a1a1a;
  margin: 28px 0;
`;


export const TermsContent = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  color: #1a1a1a;
`;
export const TermsList = styled.ul`

  padding-left: 20px;
`;
export const TermsListPoint = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  color: #1a1a1a;
  list-style:none;
  margin-bottom: 20px;
`;


export const Link = styled.a`
    font-weight: bold;
    color: #000;
    text-decoration: underline;
    cursor: pointer;
    @media (max-width: 768px) {
        margin-left: unset;
        color: #414141;
        font-size: 14px;
    }
`;

