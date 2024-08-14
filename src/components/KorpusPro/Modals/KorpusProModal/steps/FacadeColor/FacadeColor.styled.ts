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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
  margin: 16px 0;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #1a1a1a;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CheckboxItemWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CheckboxLabel = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #1a1a1a;
`;

export const CheckboxItem = styled.input`
  width: 12px;
  height: 12px;
  accent-color: #1a1a1a;
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid #1a1a1a;
  cursor: pointer;

  &:checked {
    background-color: #1a1a1a;
    border: 1px solid #1a1a1a;
  }
`;

export const FacadeColorWrapper = styled.div``;

export const Search = styled.input`
  width: 100%;
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  padding: 10px 0;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;
    color: #747474;
  }

  &:focus {
    border-bottom: 1px solid black;
  }
`;

export const ColorsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const ColorItem = styled.div`
  border: 1px solid #e4e4e4;
  padding: 12px;
  cursor: pointer;
`;

export const Color = styled.div<{ $color: string }>`
  max-width: 236px;
  width: 100%;
  height: 236px;
  background-color: ${({ $color }) => $color};
`;

export const ColorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ColorInfoWrapper = styled.div`
  margin-top: 8px;
  gap: 6px;
  display: flex;
  flex-direction: column;
`;

export const ColorHex = styled.span`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: #414141;
`;

export const ColorName = styled.span`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #1a1a1a;
  margin-bottom: 6px;
`;
