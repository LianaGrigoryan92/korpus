'use client';

import * as S from './FacadeColorItem.styled';
import { ArrowRight, Check } from 'lucide-react';

interface FacadeItemProps {
    imageUrl: string;
    title: string;
    value: number | string;
    selectedFacadeColorValue: number | string;
    onSelect: (value: string | number) => void; // New prop
}

export default function FacadeColorItem({
   title,
   imageUrl,
   value,
   selectedFacadeColorValue,
   onSelect,
}: FacadeItemProps) {
    return (
        <S.FacadeColorItem>
            <S.Content>
                <S.Image src={imageUrl} alt="Korpus Pro Preference Item Image" />
                <S.ActionsWrapper>
                    <S.ActionsBlock>
                        <S.Title>{title}</S.Title>
                        <S.SelectValue
                            onClick={() => onSelect(value)}
                        >
                            {selectedFacadeColorValue === value ? (
                                <Check size={22} strokeWidth={2} />
                            ) : (
                                <ArrowRight size={22} strokeWidth={2} />
                            )}
                        </S.SelectValue>
                    </S.ActionsBlock>
                </S.ActionsWrapper>
            </S.Content>
        </S.FacadeColorItem>
    );
}
