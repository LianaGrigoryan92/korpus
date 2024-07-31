import styled from "styled-components";

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
  color: #1A1A1A;
`;

export const ModalStepCategories = styled.div`
  display: flex;
  gap: 24px;
`;

export const ModalStepCategoryItem = styled.div<{ $active: boolean }>`
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 500 : 400)};
  line-height: 18px;
  color: #1A1A1A;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  margin-top: 24px;
  padding: 24px;
  height: 100%;
`;

export const ModalFooter = styled.div`
  border-top: 1px solid #E4E4E4;
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
  color: #1A1A1A;
  text-decoration: underline;
`;

export const ModalControls = styled.div`
  display: flex;
  gap: 24px;
`;

export const ModalBackButton = styled.button`
  font-family: 'Graphik Trial', sans-serif;
  border: 1px solid #A3A3A3;
  background-color: transparent;
  color: #1A1A1A;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 12px 76px;
`;

export const ModalNextButton = styled.button`
  font-family: 'Graphik Trial', sans-serif;
  background-color: #000000;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  padding: 12px 76px;
`;