import styled from "styled-components";

export const FacadeMaterialItem = styled.div`
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
