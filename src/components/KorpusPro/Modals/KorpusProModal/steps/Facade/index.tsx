'use client';

import React, { useEffect, useState } from 'react';
import * as S from './Facade.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useAppDispatch } from '@/store/hooks';
import MockImage from '@/public/images/korpus-pro/preferences/image.png';
import { updateStepData } from '@/features';
import PreferenceItem from '@/components/KorpusPro/PreferenceItem';
import { facadeData } from './mock';

interface StepProps {
  data: any;
  error: string;
  step: number;
}

export interface PreferenceValues {
  [key: string]: {
    [key: string]: string;
  };
}

const Facade: React.FC<StepProps> = ({ data, error, step }) => {
  const dispatch = useAppDispatch();
  const [selectedPreferencesValues, setSelectedPreferencesValues] =
    useState<PreferenceValues>({});

  useEffect(() => {
    const updatedData = { ...data, facade: { ...selectedPreferencesValues } };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [selectedPreferencesValues]);

  const handleSelectPositionValues = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    setSelectedPreferencesValues((prevState: any) => ({
      ...prevState,
      [name]: { [e.target.name]: e.target.value },
    }));
  };

  console.log({ selectedPreferencesValues, data });

  return (
    <S.FacadePreferencesWrapper>
      {facadeData.facadePreferences && (
        <S.FacadePreference>
          <S.FacadePreferenceCategory>
            {facadeData.facadePreferences.name}
          </S.FacadePreferenceCategory>
          <S.FacadePreferenceContent>
            {facadeData.facadePreferences.items.map((item) => (
              <PreferenceItem
                key={item.id}
                title={item.name}
                imageUrl={MockImage.src}
                isFixed={item.isFixed}
                isSingleValue={!item.editable}
                options={Array.isArray(item.type) ? item.type : undefined}
                value={!Array.isArray(item.type) ? item.type : null}
                isSelectable={true}
                defaultSelected={item.default ? item.type : undefined}
                category={'facadePreferences'}
                selectedPreferencesValues={selectedPreferencesValues}
                setSelectedPreferencesValues={setSelectedPreferencesValues}
                handleSelectPositionValues={handleSelectPositionValues}
              />
            ))}
          </S.FacadePreferenceContent>
        </S.FacadePreference>
      )}
    </S.FacadePreferencesWrapper>
  );
};

export default Facade;
