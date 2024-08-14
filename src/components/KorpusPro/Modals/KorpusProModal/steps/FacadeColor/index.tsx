'use client';

import React, { useEffect, useState } from 'react';
import * as S from './FacadeColor.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useAppDispatch } from '@/store/hooks';
import MockImage from '@/public/images/korpus-pro/preferences/image.png';
import { updateStepData } from '@/features';
import PreferenceItem from '@/components/KorpusPro/PreferenceItem';
import { facadeColorData, facadeColors } from './mock';
import { camelize } from '@/utils/camelize';
import { Check } from 'lucide-react';

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
        ...prevState['type'],
        [e.target.name]: e.target.value,
      },
    }));
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColorId, setSelectedColorId] = useState<
    string | number | null
  >(null);

  // Filter colors based on the search term
  const filteredColors = facadeColors?.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.colorCategory.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
  };

  console.log({ selectedPreferencesValues, data });

  return (
    <S.FacadePreferencesWrapper>
      {facadeColorData.type && (
        <S.FacadePreference>
          <S.FacadePreferenceCategory>
            {facadeColorData.type.name}
          </S.FacadePreferenceCategory>
          <S.FacadePreferenceContent>
            {facadeColorData.type.items.map((item) => (
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
                category={'facadeColor'}
                selectedPreferencesValues={selectedPreferencesValues}
                setSelectedPreferencesValues={setSelectedPreferencesValues}
                handleSelectPositionValues={handleSelectPositionValues}
              />
            ))}
          </S.FacadePreferenceContent>
        </S.FacadePreference>
      )}
      <S.Divider />
      <S.Title>{facadeColorData.lacquerPercentage.name}</S.Title>
      <S.CheckboxWrapper>
        {facadeColorData.lacquerPercentage.items[0].value.map((option) => (
          <S.CheckboxItemWrapper key={option}>
            <S.CheckboxItem
              name={camelize(facadeColorData.lacquerPercentage.items[0].name)}
              type="checkbox"
              checked={
                selectedPreferencesValues['facadeColor']?.[
                  camelize(facadeColorData.lacquerPercentage.items[0].name)
                ] === option.toString()
              }
              value={option}
              onChange={handleSelectPositionValues}
            />
            <S.CheckboxLabel>{option}</S.CheckboxLabel>
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
                  <S.ColorName>{color.name}</S.ColorName>
                </S.ColorInfoWrapper>
                {selectedColorId === color.id && <Check size={22} />}
              </S.ColorInfo>
            </S.ColorItem>
          ))}
        </S.ColorsWrapper>
    </S.FacadeColorWrapper>
    </S.FacadePreferencesWrapper>
  );
};

export default FacadeColor;
