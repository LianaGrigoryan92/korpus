"use client";

import React, { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { updateStepData } from '@/features';

//styles
import * as S from './ProjectName.styled';

interface StepProps {
  data: any;
  error: string;
  step: number;
}

const ProjectName: React.FC<StepProps> = ({ data, error, step }) => {
  const [stepData, setStepData] = useState(data || {});
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = { ...stepData, [e.target.name]: e.target.value };
    setStepData(updatedData);
    dispatch(updateStepData({ step, data: updatedData }));
  };

  return (
    <S.StepWrapper>
      <S.InputWrapper>
        <S.Label>Project Name*</S.Label>
        <S.Input
          name="projectName"
          value={stepData.projectName || ''}
          onChange={handleChange}
          placeholder="Enter project name"
        />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.InputWrapper>
    </S.StepWrapper>
  );
};

export default ProjectName;