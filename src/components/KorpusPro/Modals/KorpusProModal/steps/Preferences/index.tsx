'use client';

import React, { useEffect, useState } from 'react';
import * as S from './Preferences.styled';
import * as PS from '../../../../PreferenceItem/PreferenceItem.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useAppDispatch } from '@/store/hooks';
import { preferencesData } from './mock';
import MockImage from '@/public/images/korpus-pro/preferences/image.png';
import { updateStepData } from '@/features';
import PreferenceItem from '@/components/KorpusPro/PreferenceItem';

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
  const dispatch = useAppDispatch();
  const [selectedPreferencesValues, setSelectedPreferencesValues] =
    useState<PreferenceValues>({});

  useEffect(() => {
    const updatedData = {
      ...data,
      preferences: { ...selectedPreferencesValues },
    };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [selectedPreferencesValues]);

  const handleChangeTotalHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPreferencesValues((prevState: any) => ({
      ...prevState,
      position: { [e.target.name]: e.target.value },
    }));
  };

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
    <S.PreferencesWrapper>
      {preferencesData.position && (
        <S.Preference>
          <S.PreferenceCategory>
            {preferencesData.position.name}
          </S.PreferenceCategory>
          <S.PreferenceContent>
            <PS.PreferenceItem>
              <PS.Content>
                <PS.Image
                  src={MockImage.src}
                  alt="Korpus Pro Preference Item Image"
                />
                <PS.ActionsBlock>
                  <S.InputWrapper>
                    <S.Label>Total Height*</S.Label>
                    <S.Input
                      name="totalHeight"
                      value={
                        selectedPreferencesValues['position']?.totalHeight || ''
                      }
                      onChange={handleChangeTotalHeight}
                      placeholder="Type"
                    />
                    {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                  </S.InputWrapper>
                </PS.ActionsBlock>
              </PS.Content>
            </PS.PreferenceItem>
            {preferencesData.position.items.map((item) => (
              <PreferenceItem
                key={item.id}
                title={item.name}
                imageUrl={MockImage.src}
                isFixed={item.isFixed}
                isSingleValue={!item.editable}
                options={Array.isArray(item.value) ? item.value : undefined}
                value={!Array.isArray(item.value) ? item.value : null}
                isSelectable={item.value instanceof Object}
                defaultOption={item.default}
                category={preferencesData.position.name.toLowerCase()}
                selectedPreferencesValues={selectedPreferencesValues}
                setSelectedPreferencesValues={setSelectedPreferencesValues}
                handleSelectPositionValues={handleSelectPositionValues}
              />
            ))}
          </S.PreferenceContent>
        </S.Preference>
      )}
      <S.Divider />
      {preferencesData.totalSize && (
        <S.Preference>
          <S.PreferenceCategory>
            {preferencesData.totalSize.name}
          </S.PreferenceCategory>
          <S.PreferenceContent>
            {preferencesData.totalSize.items.map((item: any) =>
              Array.isArray(item) ? (
                <PreferenceItem
                  key={item[0].id}
                  title={item[0].name}
                  imageUrl={MockImage.src}
                  isFixed={item[0].isFixed}
                  isSingleValue={!item[0].editable}
                  options={
                    Array.isArray(item[0].value) ? item[0].value : undefined
                  }
                  value={!Array.isArray(item[0].value) ? item[0].value : null}
                  isSelectable={item[0].value instanceof Object}
                  defaultOption={item[0].default}
                  category={preferencesData.totalSize.name
                    .toLowerCase()
                    .replace(' ', '_')}
                  selectedPreferencesValues={selectedPreferencesValues}
                  setSelectedPreferencesValues={setSelectedPreferencesValues}
                  handleSelectPositionValues={handleSelectPositionValues}
                  secondValue={item[1]}
                />
              ) : (
                <PreferenceItem
                  key={item.id}
                  title={item.name}
                  imageUrl={MockImage.src}
                  isFixed={item.isFixed}
                  isSingleValue={!item.editable}
                  options={Array.isArray(item.value) ? item.value : undefined}
                  value={!Array.isArray(item.value) ? item.value : null}
                  isSelectable={item.value instanceof Object}
                  defaultOption={item.default}
                  category={preferencesData.position.name.toLowerCase()}
                  selectedPreferencesValues={selectedPreferencesValues}
                  setSelectedPreferencesValues={setSelectedPreferencesValues}
                  handleSelectPositionValues={handleSelectPositionValues}
                />
              ),
            )}
          </S.PreferenceContent>
        </S.Preference>
      )}
      {preferencesData.type && (
        <S.Preference>
          <S.PreferenceCategory>
            {preferencesData.type.name}
          </S.PreferenceCategory>
          <S.PreferenceContent>
            {preferencesData.type.items.map((item) => (
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
                category={'korpusType'}
                selectedPreferencesValues={selectedPreferencesValues}
                setSelectedPreferencesValues={setSelectedPreferencesValues}
                handleSelectPositionValues={handleSelectPositionValues}
              />
            ))}
          </S.PreferenceContent>
        </S.Preference>
      )}
    </S.PreferencesWrapper>
  );
};

export default Preferences;
