'use client';

import React, { useEffect, useState } from 'react';
import * as S from './Facade.styled';
import { useAppDispatch } from '@/store/hooks';
import MockImage from '@/public/images/korpus-pro/preferences/image.png';
import { updateStepData } from '@/features';
import { facadeData } from './mock';
import FacadeItem from "@/components/KorpusPro/FacadeItem";
import { useGetFacadesQuery } from "@/features/korpusProFacade";

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
  const { data: facades } = useGetFacadesQuery();

  const dispatch = useAppDispatch();

  const [selectedFacadeValue, setSelectedFacadeValue] = useState<string>('with');
  const [selectedFacadeTypeValue, setSelectedFacadeTypeValue] = useState<string | number>('');
  const [selectedPreferencesValues, setSelectedPreferencesValues] = useState<PreferenceValues>({});

  useEffect(() => {
    const updatedData = { ...data, facade: { ...selectedPreferencesValues } };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [selectedPreferencesValues]);

  const handleSelectFacadeValues = (name: string, value: string | number) => {
    setSelectedFacadeValue(`${value}`);
    // @ts-ignore
    setSelectedPreferencesValues((prevState) => ({
      ...prevState,
      'type': value,
    }));
  };

  const handleSelectFacadeTypeValues = (name: string, value: string | number) => {
    setSelectedFacadeTypeValue(value);
    // @ts-ignore
    setSelectedPreferencesValues({
      [name]: value,
    });
  };

  return (
      <S.FacadePreferencesWrapper>
        {facadeData.facadePreferences && (
            <S.FacadePreference>
              <S.FacadePreferenceCategory>
                {facadeData.facadePreferences.name}
              </S.FacadePreferenceCategory>
              <S.FacadePreferenceContent>
                {facadeData.facadePreferences.items.map((item) => (
                    <FacadeItem
                        key={item.id}
                        title={item.name}
                        imageUrl={MockImage.src}
                        value={!Array.isArray(item.type) ? item.type : 'with'}
                        selectedFacadeValue={selectedFacadeValue}
                        onSelect={(value) => handleSelectFacadeValues(item.name, value)}
                    />
                ))}
              </S.FacadePreferenceContent>
            </S.FacadePreference>
        )}
        <S.Divider />
        {selectedFacadeValue !== 'without' &&
            facadeData.type && (
                <S.FacadePreference>
                  <S.FacadePreferenceCategory>
                    {facadeData.type.name}
                  </S.FacadePreferenceCategory>
                  <S.FacadePreferenceContent>
                    {facades?.map((item) => (
                        <FacadeItem
                            key={item.id}
                            title={item.title}
                            imageUrl={item.image}
                            value={item.id}
                            selectedFacadeValue={selectedFacadeTypeValue}
                            onSelect={(value) => handleSelectFacadeTypeValues('facadeType', item.id)}
                        />
                    ))}
                  </S.FacadePreferenceContent>
                </S.FacadePreference>
            )}
      </S.FacadePreferencesWrapper>
  );
};

export default Facade;
