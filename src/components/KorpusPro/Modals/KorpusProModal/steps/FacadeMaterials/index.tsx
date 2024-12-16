'use client';

import React, { useEffect, useState } from 'react';
import * as S from './FacadeMaterials.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useAppDispatch } from '@/store/hooks';
import MockImage from '@/public/images/korpus-pro/preferences/image.png';
import { updateStepData } from '@/features';
import PreferenceItem from '@/components/KorpusPro/PreferenceItem';
import { facadeMaterialsData } from './mock';
import FacadeMaterialItem from "@/components/KorpusPro/FacadeMaterialItem";
import {useGetFacadesQuery} from "@/features/korpusProFacade";
import {useGetFacadeMaterialsByFacadeIdQuery} from "@/features/korpusProFacadeMaterial";

interface StepProps {
  data: any;
  error: string;
  step: number;
}

const FacadeMaterialType: React.FC<StepProps> = ({ data, error, step }) => {
  const { data: facadeMaterials } = useGetFacadeMaterialsByFacadeIdQuery({ facadeId: data.facade.facadeType });
  const dispatch = useAppDispatch();
  const [selectedPreferencesValue, setSelectedPreferencesValue] =
    useState<number>(1);

  useEffect(() => {
    const updatedData = {
      ...data,
      facadeMaterialType: selectedPreferencesValue,
    };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [selectedPreferencesValue]);

  const handleSelectPositionValue = (
    value: number
  ) => {
    setSelectedPreferencesValue(value);
  };

  return (
    <S.FacadePreferencesWrapper>
      {facadeMaterialsData.type && (
        <S.FacadePreference>
          <S.FacadePreferenceCategory>
            {facadeMaterialsData.type.name}
          </S.FacadePreferenceCategory>
          <S.FacadePreferenceContent>
            {facadeMaterials?.map((item) => (
              <FacadeMaterialItem
                key={item.id}
                title={item.title}
                imageUrl={item.image}
                selectedFacadeMaterialValue={selectedPreferencesValue}
                onSelect={handleSelectPositionValue}
                value={item.id}
              />
            ))}
          </S.FacadePreferenceContent>
        </S.FacadePreference>
      )}
    </S.FacadePreferencesWrapper>
  );
};

export default FacadeMaterialType;
