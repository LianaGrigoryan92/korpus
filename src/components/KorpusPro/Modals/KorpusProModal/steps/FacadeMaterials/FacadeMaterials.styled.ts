import styled from 'styled-components';

export const FacadePreferencesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FacadePreference = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FacadePreferenceCategory = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #1a1a1a;
  margin-bottom: 16px;
    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

export const FacadePreferenceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 16px;
  column-gap: 16px;
    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  margin: 16px 0;
`;
