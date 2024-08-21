'use client';

import * as S from './FacadeMaterialItem.styled';
import { ArrowRight, Check } from 'lucide-react';

interface PreferenceItemProps {
    imageUrl: string;
    title: string;
    value: number;
    selectedFacadeMaterialValue: number;
    onSelect: (value: number) => void;
}

export default function FacadeMaterialItem({
   title,
   imageUrl,
   value,
   selectedFacadeMaterialValue,
   onSelect,
}: PreferenceItemProps) {
    return (
        <S.FacadeMaterialItem>
            <S.Content>
                <S.Image src={imageUrl} alt="Korpus Pro Preference Item Image" />
                <S.ActionsWrapper>
                    <S.ActionsBlock $isSelectable={true}>
                        <S.Title>{title}</S.Title>
                        <S.SelectValue
                            onClick={() => onSelect(value)}
                        >
                            {selectedFacadeMaterialValue === value ? (
                                <Check size={22} strokeWidth={2} />
                            ) : (
                                <ArrowRight size={22} strokeWidth={2} />
                            )}
                        </S.SelectValue>
                    </S.ActionsBlock>
                </S.ActionsWrapper>
            </S.Content>
        </S.FacadeMaterialItem>
    );
}
