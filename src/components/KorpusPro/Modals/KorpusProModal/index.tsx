'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import {
  customNextStep,
  customPrevStep,
  firstStep,
  hideModal,
  nextStep,
  prevStep, StepData,
} from '@/features';
import * as S from './KorpusProModal.styled';
import Category from './steps/Category';
import ProjectName from './steps/ProjectName';
import Preferences from './steps/Preferences';
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery';
import SubCategory from './steps/SubCategory';
import KorpusColor from './steps/KorpusColor';
import Facade from './steps/Facade';
import FacadeMaterialType from './steps/FacadeMaterials';
import FacadeColor from './steps/FacadeColor';
import Products from './steps/Products';

interface StepProps {
  onNext: (data: any) => void;
  onPrev: () => void;
  error: string;
  data: any;
  step: number;
  existSubCategories: number[];
  existProducts: number[];
}

const tabNames = [
  'Give a name to your project',
  'Choose category',
  'Choose category', // Repeated for step 3
  'Set up preferences',
  'Choose korpus color',
  'Facade',
  'Facade', // Repeated for step 7
  'Facade color',
  'Choose product',
];

const tabNamesMobile = [
  'Name Your Project',
  'Choose category',
  'Choose category', // Repeated for step 3
  'Choose korpus color',
  'Facade',
  'Facade', // Repeated for step 7
  'Facade', // Repeated for step 8
  'Facade', // Repeated for step 9
  'Korpuses',
];

// Create an array of unique categories
const uniqueTabCategories = [
  'Project Name',
  'Category',
  'Set up preferences',
  'Korpus color',
  'Facade',
  'Facade Color',
  'Products',
];

// Mapping each step to the correct unique category index
const stepToCategoryIndexMap: { [key: number]: number } = {
  1: 0, // Project Name
  2: 1, // Category
  3: 1, // Category (same as step 2)
  4: 2, // Set up preferences
  5: 3, // Korpus color
  6: 4, // Facade
  7: 4, // Facade (same as step 6)
  8: 5, // Facade Color
  9: 6, // Products
};

const steps: { [key: number]: React.ComponentType<StepProps> } = {
  1: ProjectName,
  2: Category,
  3: SubCategory,
  4: Preferences,
  5: KorpusColor,
  6: Facade,
  7: FacadeMaterialType,
  8: FacadeColor,
  9: Products,
};

function KorpusProModal() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { step, data, isVisible, existSubCategories, existProducts } = useAppSelector(
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

  const validateStep = (stepData: any): boolean => {
    console.log({ stepData });
    if (step === 1 && !stepData.projectName) {
      setError('Project Name is required');
      return false;
    }
    if (step === 2 && !stepData.categoryId) {
      return false;
    }
    if (step === 3 && !stepData?.subCategory) {
      return false;
    }
    if (step === 4 && (!stepData['height'] || !stepData?.type)) {
      return false;
    }
    if (step === 5 && !stepData.colorId) {
      return false;
    }
    if (step === 6 && !stepData.facadeType && stepData.type !== 'without') {
      return false;
    }
    if (step === 7 && !stepData) {
      return false;
    }

    const checkLogicFacadeColor = stepData?.haveLacquer ? !stepData.color || !stepData.colorId || !stepData.lacquerPercentage || !stepData?.type : !stepData?.type;

    if (step === 8 && checkLogicFacadeColor) {
      return false;
    }
    if (step === 9 && !Array.isArray(stepData)) {
      return false;
    }
    setError('');
    return true;
  };

  const handleNext = () => {
    const stepKeys = Object.keys(data) as Array<keyof typeof data>;
    const currentStepData = data[stepKeys[step - 1]];

    if (validateStep(currentStepData)) {
      console.log('CHECK ALL STEPS DATA', data)
      if (step === 6 && (currentStepData as StepData)?.type === 'without') {
        dispatch(customNextStep(3));
      } else if (step === 9) {
        let index = 1;
        let existingKey = null;
        let storedData = null;

        while (localStorage.getItem(`cartData-${index}`)) {
          const item = localStorage.getItem(`cartData-${index}`);

          if (item) {
            storedData = JSON.parse(item);
            if (storedData.projectName === data.project) {
              existingKey = `cartData-${index}`;
              break;
            }
          }
          index++;
        }

        if (storedData && existingKey) {
          const subCategoryIndex = storedData.subCategories.findIndex(
              (subCat: any) => subCat.id === data.subCategory.subCategory.id
          );

          const existingProducts = storedData.subCategories[subCategoryIndex] ? storedData.subCategories[subCategoryIndex]?.products ?? [] : [];

          const products = [...existingProducts, ...data.products];

          if (subCategoryIndex !== -1) {
            storedData.subCategories[subCategoryIndex] = {
              ...data.subCategory.subCategory,
              products,
            };
          } else {
            storedData.subCategories.push({
              ...data.subCategory.subCategory,
              products,
            });
          }

          localStorage.setItem(existingKey, JSON.stringify(storedData));
        } else {
          const notUsedCategories = data.subCategory.notUsedCategories.map((category: any) => ({
            ...category,
            products: [],
          }))
          const dataToSave = {
            subCategories: [{
              ...data.subCategory.subCategory,
              products: data.products,
              korpusColorId: data.korpusColor.colorId,
              facadeColorType: data.facadeColor.type,
              lacquerPercentage: data.facadeColor.lacquerPercentage,
              facadeHex: data.facadeColor.color,
              preferences: data.preferences,
            }, ...notUsedCategories],
            projectName: data.project.projectName,
          };

          localStorage.setItem(`cartData-${index}`, JSON.stringify(dataToSave));
        }
        router.push('/cart');
      } else {
        dispatch(nextStep());
      }
    }
  };

  const handlePrev = () => {
    const currentStepData = data['facade'];
    console.log({ currentStepData });
    if (step === 9 && currentStepData.facadePreferences?.type === 'without') {
      dispatch(customPrevStep(3));
    } else {
      dispatch(prevStep());
    }
  };

  const handleClose = () => {
    dispatch(hideModal());
  };

  const handleReturnTabName = (step: number) => {
    if (isMobile) {
      return tabNamesMobile[step - 1];
    }

    if (step === 2 || step === 3) {
      return tabNames[1]; // "Choose Category"
    }

    if (step === 6 || step === 7) {
      return tabNames[5]; // "Facade"
    }

    return tabNames[step - 1];
  };

  const CurrentStep =
    step === 7 && data?.facade?.facadePreferences?.type === 'without'
      ? steps[8]
      : steps[step];

  const handleRestart = () => {
    dispatch(firstStep())
  }

  const isNextButtonDisabled = useMemo(() => {
    const stepKeys = Object.keys(data) as Array<keyof typeof data>;
    const currentStepData = data[stepKeys[step - 1]];
    return !validateStep(currentStepData);
  }, [data, step]);

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
              {handleReturnTabName(step)}
              {isMobile && (
                <S.MobileHeaderButtons>
                  <S.CancelButton onClick={handleClose}>Cancel</S.CancelButton>
                  <S.ModalRestartButton onClick={handleRestart}>Restart</S.ModalRestartButton>
                </S.MobileHeaderButtons>
              )}
            </S.ModalStepName>
            <S.ModalStepCategories>
              {uniqueTabCategories.map((category, index) => (
                <S.ModalStepCategoryItem
                  key={index}
                  $active={stepToCategoryIndexMap[step] === index}
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
              existSubCategories={existSubCategories}
              existProducts={existProducts}
            />
          </S.ModalBody>
          <S.ModalFooter>
            {!isMobile && <S.ModalRestartButton onClick={handleRestart}>Restart</S.ModalRestartButton>}
            <S.ModalControls>
              <S.ModalBackButton onClick={handlePrev} disabled={step === 1}>
                Back
              </S.ModalBackButton>
              <S.ModalNextButton
                  disabled={isNextButtonDisabled}
                  onClick={handleNext}
              >
                {step === 9 ? 'Continue to cart' : 'Next'}
              </S.ModalNextButton>
            </S.ModalControls>
          </S.ModalFooter>
        </S.ModalWrapper>
      </Modal>
    </S.KorpusProModalWrapper>
  );
}

export default KorpusProModal;
