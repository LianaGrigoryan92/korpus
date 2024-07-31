// src/components/Modal.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { hideModal, nextStep, prevStep } from '@/features';
import * as S from './KorpusProModal.styled';
import Step2 from './steps/Category';
import ProjectName from './steps/ProjectName';

const steps: { [key: number]: React.ComponentType<StepProps> } = {
  1: ProjectName,
  2: Step2,
//   3: Step3,
//   4: Step4,  
//   5: Step5,
};

interface StepProps {
  onNext: (data: any) => void;
  onPrev: () => void;
  error: string;
  data: any;
  step: number;
}

const tabNames = ['Give a name to your project', 'Choose category', 'Choose korups color', 'Fasade', 'Fasade color', 'Choose Product'];

const tabCategories = [
  'Project Name',
  'Category',
  'Set up preferences',
  'Korups color',
  'Fasade',
  'Fasade Color',
  'Products',
];

function KorpusProModal() {
    const dispatch = useAppDispatch();
    const { step, data, isVisible } = useAppSelector((state: RootState) => state.modal);
    const [error, setError] = useState('');

    useEffect(() => {
      if (isVisible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
  
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isVisible]);
  
    const CurrentStep = steps[step];
  
    const validateStep = (stepData: any): boolean => {
      console.log({ stepData });
      if (step === 1 && !stepData.projectName) {
        setError('Project Name is required');
        return false;
      }
      setError('');
      return true;
    };

    const handleNext = () => {
      const currentStepData = data[`step${step}` as keyof typeof data];
      if (validateStep(currentStepData)) {
        dispatch(nextStep());
      }
    };
  
    const handlePrev = () => {
      dispatch(prevStep());
    };
  
    const handleSubmit = () => {
      console.log({ data });
      // Отправка данных на бэкенд
      // dispatch(api.endpoints.updateModalState.initiate(data));
    };
  
    const handleClose = () => {
      dispatch(hideModal());
    };
  
    return (
        <S.KorpusProModalWrapper>
          <Modal
            isOpen={isVisible}
            onRequestClose={handleClose}
            contentLabel="Modal"
            ariaHideApp={false}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                padding: '0',
                border: 'none',
                borderRadius: '0',
                width: '100%',
                maxWidth: '1088px',
                height: '80%', // Добавляем это свойство
              },
            }}
          >
            <S.ModalWrapper>
              <S.ModalHeader>
                <S.ModalStepName>{tabNames[step - 1]}</S.ModalStepName>
                <S.ModalStepCategories>
                  {tabCategories.map((category, index) => (
                    <S.ModalStepCategoryItem key={index} $active={step === index + 1}>
                      {category}
                    </S.ModalStepCategoryItem>
                  ))}
                </S.ModalStepCategories>
              </S.ModalHeader>
              <S.ModalBody>
                <CurrentStep onNext={handleNext} onPrev={handlePrev} error={error} data={data[`step${step}` as keyof typeof data]} step={step} />
                {/* {step === 2 && <button onClick={handleSubmit}>Submit</button>} */}
                {/* <button onClick={handleClose}>Close</button> */}
              </S.ModalBody>
              <S.ModalFooter>
                <S.ModalRestartButton>Restart</S.ModalRestartButton>
                <S.ModalControls>
                  <S.ModalBackButton onClick={handlePrev} disabled={step === 1}>Back</S.ModalBackButton>
                  <S.ModalNextButton onClick={handleNext} disabled={step === 5}>Next</S.ModalNextButton>
                </S.ModalControls>
              </S.ModalFooter>
            </S.ModalWrapper>
          </Modal>
        </S.KorpusProModalWrapper>
    );
}

export default KorpusProModal;
