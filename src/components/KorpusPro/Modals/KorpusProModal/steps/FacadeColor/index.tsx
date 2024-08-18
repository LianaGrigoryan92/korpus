'use client';

import React, { useEffect, useState } from 'react';
import * as S from './FacadeColor.styled';
import { useAppDispatch } from '@/store/hooks';
import MockImage from '@/public/images/korpus-pro/preferences/image.png';
import { updateStepData } from '@/features';
import { facadeColorData } from './mock';
import { camelize } from '@/utils/camelize';
import { Check } from 'lucide-react';
import FacadeColorItem from "@/components/KorpusPro/FacadeColorItem";
import {useGetFacadeColorByFacadeMaterialIdQuery} from "@/features/korpusProFacadeColor";

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

const FacadeColor: React.FC<StepProps> = ({ data, error, step }) => {
  const { data: facadeColorTypes } = useGetFacadeColorByFacadeMaterialIdQuery({ facadeMaterialId: data.facadeMaterialType });
  const dispatch = useAppDispatch();
  const [selectedPreferencesValues, setSelectedPreferencesValues] =
    useState<PreferenceValues>({});

  useEffect(() => {
    const updatedData = {
      ...data,
      facadeColor: selectedPreferencesValues.facadeColor,
    };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [selectedPreferencesValues]);

  const handleSelectPositionValues = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedPreferencesValues((prevState: any) => ({
      ['facadeColor']: {
        ...prevState['facadeColor'],
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleFacadeColorPositionValue = (
      value: string | number,
  ) => {
    setSelectedPreferencesValues((prevState: any) => ({
      ['facadeColor']: {
        ...prevState['facadeColor'],
        ['type']: value,
      },
    }));
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColorId, setSelectedColorId] = useState<
    string | number | null
  >(null);

  // Filter colors based on the search term

  // Update the global state when selectedColorId changes
  useEffect(() => {
    const updatedData = { ...data, facadeColor: { ...selectedPreferencesValues.facadeColor, colorId: selectedColorId } };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [selectedColorId]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle color selection
  const handleClick = (colorId: string | number) => {
    setSelectedColorId(colorId);
    setSelectedPreferencesValues((prevState: any) => ({
      ['facadeColor']: {
        ...prevState['facadeColor'],
        ['color']: colorId,
      },
    }));
  };

  const { lacquerPercentages, facadeColors } = facadeColorTypes?.find(facadeColorType => facadeColorType.id === +selectedPreferencesValues?.facadeColor?.type) || {} as unknown as FacadeColor;

  const filteredColors = facadeColors?.filter(
      (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.colorCategory.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  console.log({ selectedPreferencesValues, data });

  return (
    <S.FacadePreferencesWrapper>
      {facadeColorData.type && (
        <S.FacadePreference>
          <S.FacadePreferenceCategory>
            {facadeColorData.type.name}
          </S.FacadePreferenceCategory>
          <S.FacadePreferenceContent>
            {facadeColorTypes?.map((item) => (
              <FacadeColorItem
                key={item.id}
                title={item.title}
                imageUrl={MockImage.src}
                onSelect={handleFacadeColorPositionValue}
                value={item.id}
                selectedFacadeColorValue={selectedPreferencesValues['facadeColor']?.['type'] as unknown as number} // Safely accessing 'type'
              />
            ))}
          </S.FacadePreferenceContent>
        </S.FacadePreference>
      )}
      {selectedPreferencesValues?.facadeColor?.type && <>
        <S.Divider />
        <S.Title>{facadeColorData.lacquerPercentage.name}</S.Title>
        <S.CheckboxWrapper>
          {lacquerPercentages?.map((option) => (
              <S.CheckboxItemWrapper key={option.id}>
                <S.CheckboxItem
                    name={camelize(facadeColorData.lacquerPercentage.items[0].name)}
                    type="checkbox"
                    checked={
                        selectedPreferencesValues['facadeColor']?.[
                            camelize(facadeColorData.lacquerPercentage.items[0].name)
                            ] === option.title.toString()
                    }
                    value={option.title}
                    onChange={handleSelectPositionValues}
                />
                <S.CheckboxLabel>{option.title}%</S.CheckboxLabel>
              </S.CheckboxItemWrapper>
          ))}
        </S.CheckboxWrapper>
        <S.Divider />
        <S.FacadeColorWrapper>
          <S.Title>Facade Color</S.Title>
          <S.Search
              type="text"
              placeholder="Search Color"
              value={searchTerm}
              onChange={handleSearchChange}
          />
          <S.ColorsWrapper>
            {filteredColors?.map((color) => (
                <S.ColorItem key={color.id} onClick={() => handleClick(color.id)}>
                  <S.Color $color={color.hex} />
                  <S.ColorInfo>
                    <S.ColorInfoWrapper>
                      <S.ColorHex>{color.hex}</S.ColorHex>
                      <S.ColorName>{color.title}</S.ColorName>
                    </S.ColorInfoWrapper>
                    {selectedColorId === color.id && <Check size={22} />}
                  </S.ColorInfo>
                </S.ColorItem>
            ))}
          </S.ColorsWrapper>
        </S.FacadeColorWrapper>
      </>}
    </S.FacadePreferencesWrapper>
  );
};

export default FacadeColor;
