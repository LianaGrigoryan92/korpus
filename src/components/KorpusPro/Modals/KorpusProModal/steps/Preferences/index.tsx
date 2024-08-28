'use client';

import React, { useEffect, useState } from 'react';
import * as S from './Preferences.styled';
import { useAppDispatch } from '@/store/hooks';
import { updateStepData } from '@/features';
import PreferenceItem from '@/components/KorpusPro/PreferenceItem';
import { useGetPreferenceBySubCategoryIdQuery } from '@/features/korpusProPreferences';

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

const Preferences: React.FC<StepProps> = ({ data, error, step }) => {
  const { data: preferences } = useGetPreferenceBySubCategoryIdQuery({ subCategoryId: data.subCategory.subCategory.id });
  const dispatch = useAppDispatch();
  const [selectedPreferencesValues, setSelectedPreferencesValues] = useState<PreferenceValues>({});

  useEffect(() => {
    const updatedData = {
      ...data,
      preferences: { ...selectedPreferencesValues },
    };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [selectedPreferencesValues]);

  const handleChangeTotalHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^\d*$/.test(e.target.value)) {
      setSelectedPreferencesValues((prevState) => ({
        ...prevState,
        position: {
          ...prevState.position,
          [e.target.name]: e.target.value,
        },
      }));
    }
  };

  const handleSelectPositionValues = (
      e: React.ChangeEvent<HTMLInputElement>,
      name: string,
  ) => {
    setSelectedPreferencesValues((prevState: any) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        [e.target.name]: e.target.value,
      },
    }));
  };

  const renderGroupedItems = (name: string, type: string | undefined, preferenceItems: any[]) => {
    const renderedItems = [];

    for (let i = 0; i < preferenceItems.length; i++) {
      const item = preferenceItems[i];

      const globalType = type || item.type;

      switch (type || item.type) {
        case 'input':
          renderedItems.push(
              <S.Preference key={`${item.id}`}>
                <PreferenceItem
                    title={item.name}
                    imageUrl={item.image}
                    isFixed={item.isFixed}
                    options={item.items}
                    value={item.items[0]}
                    defaultOption={item.default}
                    category={name.trim().toLowerCase()}
                    selectedPreferencesValues={selectedPreferencesValues}
                    setSelectedPreferencesValues={setSelectedPreferencesValues}
                    handleSelectPositionValues={handleSelectPositionValues}
                    handleChangeTotalHeight={handleChangeTotalHeight}
                    itemType={globalType}
                />
              </S.Preference>
          );
          break;
        case 'grouped':
          const nextItem = preferenceItems[i + 1];
          if (nextItem) {
            renderedItems.push(
                <S.Preference key={`${item.id}-${nextItem.id}`}>
                  <PreferenceItem
                      title={item.name}
                      imageUrl={item.image}
                      isFixed={item.isFixed}
                      options={item.items}
                      value={item.items[0]}
                      defaultOption={item.default}
                      category={name.trim().toLowerCase()}
                      selectedPreferencesValues={selectedPreferencesValues}
                      setSelectedPreferencesValues={setSelectedPreferencesValues}
                      handleSelectPositionValues={handleSelectPositionValues}
                      secondValue={{
                        title: nextItem.name,
                        value: nextItem.items[0],
                        isFixed: nextItem.isFixed,
                      }}
                      itemType={globalType}
                  />
                </S.Preference>
            );
          }
          break;

        default:
          renderedItems.push(
              <PreferenceItem
                  key={item.id}
                  title={item.name}
                  imageUrl={item.image}
                  isFixed={item.isFixed}
                  options={item.items}
                  value={item.items[0]}
                  defaultOption={item.default}
                  category={name.trim().toLowerCase()}
                  selectedPreferencesValues={selectedPreferencesValues}
                  setSelectedPreferencesValues={setSelectedPreferencesValues}
                  handleSelectPositionValues={handleSelectPositionValues}
                  itemType={item.isFixed ? 'fixed' : globalType}
              />
          );
      }
    }

    return renderedItems;
  };

  return (
      <S.PreferencesWrapper>
        {preferences?.map((preference) => (
            <S.Preference key={preference.id}>
              <S.PreferenceCategory>{preference.name}</S.PreferenceCategory>
              <S.PreferenceContent>
                {renderGroupedItems(preference.name, preference.type, preference.preferenceItems)}
              </S.PreferenceContent>
            </S.Preference>
        ))}
      </S.PreferencesWrapper>
  );
};

export default Preferences;
