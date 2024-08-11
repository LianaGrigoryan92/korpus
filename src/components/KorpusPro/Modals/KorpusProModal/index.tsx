// src/components/Modal.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { hideModal, nextStep, prevStep } from '@/features';
import * as S from './KorpusProModal.styled';
import Category from './steps/Category';
import ProjectName from './steps/ProjectName';
import Preferences from './steps/Preferences';
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery';
import SubCategory from './steps/SubCategory';
import KorpusColor from './steps/KorpusColor';
import Facade from './steps/Facade';

const steps: { [key: number]: React.ComponentType<StepProps> } = {
  1: ProjectName,
  2: Category,
  3: SubCategory,
  4: Preferences,
  5: KorpusColor,
  6: Facade,
};

interface StepProps {
  onNext: (data: any) => void;
  onPrev: () => void;
  error: string;
  data: any;
  step: number;
}

const tabNames = [
  'Give a name to your project',
  'Choose category',
  'Choose korups color',
  'Fasade',
  'Fasade color',
  'Choose Product',
];

const tabNamesMobile = [
  'Name Your Project',
  'Choose category',
  'Choose korups color',
  'Fasade',
  'Fasade color',
  'Choose Product',
];

const tabCategories = [
  'Project Name',
  'Category',
  'Category',
  'Set up preferences',
  'Korups color',
  'Fasade',
  'Fasade Color',
  'Products',
];

function KorpusProModal() {
  const dispatch = useAppDispatch();
  const { step, data, isVisible } = useAppSelector(
    (state: RootState) => state.modal,
  );
  const [error, setError] = useState('');
  const isMobile = useClientMediaQuery('(max-width: 980px)');

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
    const stepKeys = Object.keys(data) as Array<keyof typeof data>;
    const currentStepData = data[stepKeys[step - 1]];

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

  console.log({ data });

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
            padding: isMobile ? '30px 0' : '0',
            border: 'none',
            borderRadius: '0',
            overflowY: isMobile ? 'hidden' : 'auto',
            overflowX: isMobile ? 'hidden' : 'auto',
            width: isMobile ? '100vw' : '100%',
            maxWidth: '1088px',
            height: isMobile ? '100vh' : '95%',
          },
        }}
      >
        <S.ModalWrapper>
          <S.ModalHeader>
            <S.ModalStepName>
              {isMobile ? tabNamesMobile[step - 1] : tabNames[step - 1]}
              {isMobile && (
                <S.MobileHeaderButtons>
                  <S.CancelButton onClick={handleClose}>Cancel</S.CancelButton>
                  <S.ModalRestartButton>Restart</S.ModalRestartButton>
                </S.MobileHeaderButtons>
              )}
            </S.ModalStepName>
            <S.ModalStepCategories>
              {tabCategories.map((category, index) => (
                <S.ModalStepCategoryItem
                  key={index}
                  $active={step === index + 1}
                >
                  {category}
                </S.ModalStepCategoryItem>
              ))}
            </S.ModalStepCategories>
          </S.ModalHeader>
          <S.ModalBody>
            <CurrentStep
              onNext={handleNext}
              onPrev={handlePrev}
              error={error}
              data={data}
              step={step}
            />
          </S.ModalBody>
          <S.ModalFooter>
            {!isMobile && <S.ModalRestartButton>Restart</S.ModalRestartButton>}
            <S.ModalControls>
              <S.ModalBackButton onClick={handlePrev} disabled={step === 1}>
                Back
              </S.ModalBackButton>
              <S.ModalNextButton onClick={handleNext} disabled={false}>
                Next
              </S.ModalNextButton>
            </S.ModalControls>
          </S.ModalFooter>
        </S.ModalWrapper>
      </Modal>
    </S.KorpusProModalWrapper>
  );
}

export default KorpusProModal;
