import styled from 'styled-components';

export const PreferencesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  row-gap: 18px;
`;

export const Preference = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreferenceCategory = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #1a1a1a;
  margin-bottom: 16px;
`;

export const PreferenceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 16px;
  column-gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 538px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  color: #1a1a1a;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;

export const Input = styled.input`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #1a1a1a;
  padding: 18px 0;
  border-bottom: 1px solid #e4e4e4;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  margin: 16px 0;
`;
