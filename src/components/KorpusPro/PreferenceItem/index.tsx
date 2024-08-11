'use client';

import { camelize } from '@/utils/camelize';
import { PreferenceValues } from '../Modals/KorpusProModal/steps/Preferences';
// styles
import * as S from './PreferenceItem.styled';
import { Dispatch, SetStateAction, useEffect, useMemo } from 'react';
import { IPreferenceItem } from '../Modals/KorpusProModal/steps/Preferences/mock';
import { ArrowRight, Check } from 'lucide-react';

interface PreferenceItemProps {
  imageUrl: string;
  title: string;
  isSelectable?: boolean;
  value?: string | number | null;
  isFixed?: boolean;
  isSingleValue?: boolean;
  options?: string[] | number[];
  defaultOption?: string | number;
  secondValue?: IPreferenceItem;
  category: string;
  defaultSelected?: string;
  selectedPreferencesValues: PreferenceValues;
  setSelectedPreferencesValues: Dispatch<SetStateAction<any>>;
  handleSelectPositionValues: (e: any, name: string) => void;
}

export default function PreferenceItem({
  title,
  options,
  imageUrl,
  value,
  isFixed,
  isSingleValue,
  defaultOption,
  defaultSelected,
  isSelectable,
  category,
  secondValue,
  selectedPreferencesValues,
  setSelectedPreferencesValues,
  handleSelectPositionValues,
}: PreferenceItemProps) {
  const camelizedTitle = useMemo(() => camelize(title), [title]);

  useEffect(() => {
    const updatedPreferences = { ...selectedPreferencesValues };
    let shouldUpdate = false;

    if (
      defaultOption &&
      (!updatedPreferences[category] ||
        updatedPreferences[category][camelizedTitle] !==
          defaultOption.toString())
    ) {
      updatedPreferences[category] = {
        ...updatedPreferences[category],
        [camelizedTitle]: defaultOption.toString(),
      };
      shouldUpdate = true;
    }

    if (
      secondValue &&
      secondValue.default &&
      (!updatedPreferences[category] ||
        updatedPreferences[category][camelize(secondValue.name)] !==
          secondValue.default.toString())
    ) {
      updatedPreferences[category] = {
        ...updatedPreferences[category],
        [camelize(secondValue.name)]: secondValue.default.toString(),
      };
      shouldUpdate = true;
    }

    if (
      !updatedPreferences[category]?.['type'] &&
      defaultSelected &&
      isSelectable &&
      updatedPreferences[category]?.['type'] !== defaultSelected
    ) {
      updatedPreferences[category] = {
        ...updatedPreferences[category],
        type: defaultSelected,
      };
      shouldUpdate = true;
    }

    if (shouldUpdate) {
      setSelectedPreferencesValues(updatedPreferences);
    }
  }, [
    defaultOption,
    defaultSelected,
    secondValue,
    camelizedTitle,
    category,
    selectedPreferencesValues,
    setSelectedPreferencesValues,
    isSelectable,
  ]);

  const handleTypeSelection = (value: string) => {
    console.log({ value });
    setSelectedPreferencesValues((prevState: any) => ({
      ...prevState,
      [category]: { type: value },
    }));
  };

  return (
    <S.PreferenceItem>
      {options && (
        <S.Content>
          <S.Image src={imageUrl} alt="Korpus Pro Preference Item Image" />
          <S.ActionsBlock>
            <S.Title>{title}</S.Title>
            <S.CheckboxWrapper>
              {options.map((option) => (
                <S.CheckboxItemWrapper key={option}>
                  <S.CheckboxItem
                    name={camelizedTitle}
                    type="checkbox"
                    checked={
                      selectedPreferencesValues[category]?.[camelizedTitle] ===
                      option.toString()
                    }
                    value={option}
                    onChange={(e) => handleSelectPositionValues(e, category)}
                  />
                  <S.CheckboxLabel>{option}</S.CheckboxLabel>
                </S.CheckboxItemWrapper>
              ))}
            </S.CheckboxWrapper>
          </S.ActionsBlock>
          {secondValue && (
            <S.ActionsBlock>
              <S.Title>{secondValue.name}</S.Title>
              <S.ValueWrapper>
                {(typeof secondValue.value === 'object' || isFixed) && (
                  <S.Selected />
                )}
                <S.Value $isSingle={!Array.isArray(secondValue.value)}>
                  {secondValue.value}
                  {secondValue.isFixed && ' (Fixed)'}
                </S.Value>
              </S.ValueWrapper>
            </S.ActionsBlock>
          )}
        </S.Content>
      )}
      {value && isSingleValue && !options && (
        <S.Content>
          <S.Image src={imageUrl} alt="Korpus Pro Preference Item Image" />
          <S.ActionsWrapper>
            <S.ActionsBlock>
              <S.Title>{title}</S.Title>
              <S.ValueWrapper>
                {(isSingleValue || isFixed) && <S.Selected />}
                <S.Value $isSingle={isSingleValue}>
                  {value}
                  {isFixed && ' (Fixed)'}
                </S.Value>
              </S.ValueWrapper>
            </S.ActionsBlock>
            {secondValue && (
              <S.ActionsBlock>
                <S.Title>{secondValue.name}</S.Title>
                <S.ValueWrapper>
                  {(typeof secondValue.value === 'object' || isFixed) && (
                    <S.Selected />
                  )}
                  <S.Value $isSingle={!Array.isArray(secondValue.value)}>
                    {secondValue.value}
                    {secondValue.isFixed && ' (Fixed)'}
                  </S.Value>
                </S.ValueWrapper>
              </S.ActionsBlock>
            )}
          </S.ActionsWrapper>
        </S.Content>
      )}
      {value && isSelectable && !options && (
        <S.Content>
          <S.Image src={imageUrl} alt="Korpus Pro Preference Item Image" />
          <S.ActionsWrapper>
            <S.ActionsBlock $isSelectable={isSelectable}>
              <S.Title>{title}</S.Title>
              <S.SelectValue
                onClick={() => handleTypeSelection(value as string)}
              >
                {selectedPreferencesValues[category]?.['type'] === value ? (
                  <Check size={22} strokeWidth={2} />
                ) : (
                  <ArrowRight size={22} strokeWidth={2} />
                )}
              </S.SelectValue>
            </S.ActionsBlock>
          </S.ActionsWrapper>
        </S.Content>
      )}
    </S.PreferenceItem>
  );
}
