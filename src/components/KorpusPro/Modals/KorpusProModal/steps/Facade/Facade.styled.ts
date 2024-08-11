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
`;

export const FacadePreferenceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 16px;
  column-gap: 16px;
`;
