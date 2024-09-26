import { camelize } from '@/utils/camelize';
import * as S from './PreferenceItem.styled';
import { Dispatch, SetStateAction, useEffect, useMemo } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface PreferenceItemProps {
    imageUrl: string;
    title: string;
    value?: string | number | null;
    isFixed?: boolean;
    options: string[];
    defaultOption?: string | number;
    defaultSelected?: string;
    selectedPreferencesValues: any;
    setSelectedPreferencesValues: Dispatch<SetStateAction<any>>;
    handleSelectPositionValues: (e: any) => void;
    secondValue?: {
        title: string;
        value: string | number | null;
        isFixed?: boolean;
    };
    itemType?: string;
}

export default function PreferenceItem({
   title,
   options,
   imageUrl,
   value,
   isFixed,
   defaultOption,
   defaultSelected,
   selectedPreferencesValues,
   setSelectedPreferencesValues,
   handleSelectPositionValues,
   secondValue,
   itemType,
}: PreferenceItemProps) {
    const camelizedTitle = useMemo(() => camelize(title), [title]);

    useEffect(() => {
        const updatedPreferences = { ...selectedPreferencesValues };
        let shouldUpdate = false;

        if (
            defaultOption &&
            !updatedPreferences[camelizedTitle] &&
            itemType !== 'singleSelect' &&
            !isFixed
        ) {
            updatedPreferences[camelizedTitle] = [defaultOption.toString()];
            shouldUpdate = true;
        }

        if (shouldUpdate) {
            setSelectedPreferencesValues(updatedPreferences);
        }
    }, [
        defaultOption,
        defaultSelected,
        camelizedTitle,
        selectedPreferencesValues,
        setSelectedPreferencesValues,
        itemType,
    ]);

    const handleTypeSelection = (value: string) => {
        setSelectedPreferencesValues((prevState: any) => ({
            ...prevState,
            type: value,
        }));
    };

    const renderContent = () => {
        switch (itemType) {
            case 'singleSelect':
                return (
                    <S.Content>
                        <S.Image src={imageUrl} alt="Korpus Pro Preference Item Image" />
                        <S.ActionsWrapper>
                            <S.ActionsBlock $isSelectable>
                                <S.Title>{title}</S.Title>
                                <S.SelectValue onClick={() => handleTypeSelection(value as string)}>
                                    {selectedPreferencesValues['type'] === value ? (
                                        <Check size={22} strokeWidth={2} />
                                    ) : (
                                        <ArrowRight size={22} strokeWidth={2} />
                                    )}
                                </S.SelectValue>
                            </S.ActionsBlock>
                        </S.ActionsWrapper>
                    </S.Content>
                );
            case 'grouped':
            case 'fixed':
                return (
                    <S.Content>
                        <S.Image src={imageUrl} alt="Korpus Pro Preference Item Image" />
                        <S.ActionsWrapper>
                            <S.ActionsBlock>
                                <S.Title>{title}</S.Title>
                                <S.ValueWrapper>
                                    {isFixed && <S.Selected />}
                                    <S.Value $isSingle>
                                        {value}
                                        {isFixed && ' (Fixed)'}
                                    </S.Value>
                                </S.ValueWrapper>
                            </S.ActionsBlock>
                            {secondValue && (
                                <S.ActionsBlock>
                                    <S.Title>{secondValue.title}</S.Title>
                                    <S.ValueWrapper>
                                        {secondValue.isFixed && <S.Selected />}
                                        <S.Value $isSingle>
                                            {secondValue.value}
                                            {secondValue.isFixed && ' (Fixed)'}
                                        </S.Value>
                                    </S.ValueWrapper>
                                </S.ActionsBlock>
                            )}
                        </S.ActionsWrapper>
                    </S.Content>
                );
            default:
                return (
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
                                selectedPreferencesValues[camelizedTitle]?.includes(option.toString())
                              }
                              value={option}
                              onChange={handleSelectPositionValues}
                            />
                            <S.CheckboxLabel>{option}</S.CheckboxLabel>
                          </S.CheckboxItemWrapper>
                        ))}
                      </S.CheckboxWrapper>
                    </S.ActionsBlock>
                  </S.Content>
                );
        }
    };

    return <S.PreferenceItem>{renderContent()}</S.PreferenceItem>;
}
