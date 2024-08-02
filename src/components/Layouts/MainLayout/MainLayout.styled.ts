import styled from 'styled-components';

export const MainLayout = styled.div`
  padding: 0 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const MainContent = styled.div`
  max-width: 1320px;
  width: 100%;
`;
