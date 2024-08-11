'use client';

import React, { useEffect, useState } from 'react';
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
  const dispatch = useAppDispatch();
  const [projectName, setProjectName] = useState(
    data.project.projectName || '',
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(() => e.target.value);
  };

  useEffect(() => {
    const updatedData = { ...data, project: { projectName } };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [projectName]);

  return (
    <S.StepWrapper>
      <S.InputWrapper>
        <S.Label>Project Name*</S.Label>
        <S.Input
          name="projectName"
          value={projectName || ''}
          onChange={handleChange}
          placeholder="Enter project name"
        />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.InputWrapper>
    </S.StepWrapper>
  );
};

export default ProjectName;
