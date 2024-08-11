import styled from 'styled-components';

export const PreferenceItem = styled.div`
  border: 1px solid #a3a3a3;
  padding: 16px;
  max-height: 154px;
`;

export const Content = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 18px;
`;

export const SelectValue = styled.div`
  cursor: pointer;
`;

export const ActionsBlock = styled.div<{ $isSelectable?: boolean }>`
  display: flex;
  flex-direction: ${({ $isSelectable }) => ($isSelectable ? 'row' : 'column')};
  justify-content: ${({ $isSelectable }) =>
    $isSelectable ? 'space-between' : 'flex-start'};
  align-items: ${({ $isSelectable }) =>
    $isSelectable ? 'center' : 'flex-start'};
  gap: 5px;
  max-width: ${({ $isSelectable }) => ($isSelectable ? '100%' : '156px')};
  width: 100%;
`;

export const Image = styled.img`
  max-width: 118px;
  max-height: 118px;
  width: 100%;
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

export const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Selected = styled.div`
  width: 12px;
  height: 12px;
  background-color: #a3a3a3;
`;

export const Value = styled.div<{ $isSingle: boolean }>`
  width: ${({ $isSingle }) => ($isSingle ? '' : 100)};
`;
