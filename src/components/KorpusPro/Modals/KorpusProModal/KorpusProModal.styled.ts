import styled from 'styled-components';

export const KorpusProModalWrapper = styled.div`
  .modal-overlay {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 24px;
`;

export const ModalStepName = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  color: #1a1a1a;

  @media (max-width: 980px) {
    font-size: 22px;
    font-weight: 500;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
  }
`;

export const ModalStepCategories = styled.div`
  display: flex;
  gap: 24px;
`;

export const ModalStepCategoryItem = styled.div<{ $active: boolean }>`
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  line-height: 18px;
  color: #1a1a1a;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 24px;
  height: 100%;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const ModalRestartButton = styled.button`
  font-family: 'Graphik Trial', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  background-color: transparent;
  color: #1a1a1a;
  text-decoration: underline;

  @media (max-width: 980px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #414141;
  }
`;

export const ModalControls = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 980px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const ModalBackButton = styled.button`
  font-family: 'Graphik Trial', sans-serif;
  border: 1px solid #a3a3a3;
  background-color: transparent;
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 12px 76px;

  @media (max-width: 450px) {
    max-width: 150px;
    width: 100%;
    padding: 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalNextButton = styled.button`
  font-family: 'Graphik Trial', sans-serif;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 12px 76px;

  @media (max-width: 450px) {
    max-width: 150px;
    width: 100%;
    padding: 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileHeaderButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const CancelButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #414141;
`;
