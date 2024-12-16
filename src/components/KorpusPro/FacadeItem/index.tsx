'use client';

import * as S from './FacadeItem.styled';
import { ArrowRight, Check } from 'lucide-react';

interface PreferenceItemProps {
  imageUrl: string;
  title: string;
  value: number | string;
  selectedFacadeValue: number | string;
  onSelect: (value: string | number) => void; // New prop
}

export default function FacadeItem({
  title,
  imageUrl,
  value,
  selectedFacadeValue,
  onSelect,
}: PreferenceItemProps) {
  return (
    <S.FacadeItem>
      <S.Content>
        <S.Image src={imageUrl} alt="Korpus Pro Preference Item Image" />
        <S.ActionsBlock $isSelectable={true}>
          <S.Title>{title}</S.Title>
          <S.SelectValue onClick={() => onSelect(value)}>
            {selectedFacadeValue === value ? (
              <Check size={22} strokeWidth={2} />
            ) : (
              <ArrowRight size={22} strokeWidth={2} />
            )}
          </S.SelectValue>
        </S.ActionsBlock>
      </S.Content>
    </S.FacadeItem>
  );
}
