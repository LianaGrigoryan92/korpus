'use client';

import { useState, useEffect } from 'react';
import { useGetColorsQuery } from '@/features/korpusProColors';
import * as S from './KorpusColor.styled';
import { useAppDispatch } from '@/store/hooks';
import { updateStepData } from '@/features';
import { Check } from 'lucide-react';

interface StepProps {
  onNext: (data: any) => void;
  onPrev: () => void;
  data: any;
  step: number;
}

const KorpusColor: React.FC<StepProps> = ({ data, step }) => {
  const { data: colors } = useGetColorsQuery();
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColorId, setSelectedColorId] = useState<
    string | number | null
  >(null);

  // Filter colors based on the search term
  const filteredColors = colors?.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.colorCategory.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Update the global state when selectedColorId changes
  useEffect(() => {
    const updatedData = { ...data, korpusColor: { colorId: selectedColorId } };
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

  return (
    <S.KorpusColorWrapper>
      <S.Title>Korpus Color</S.Title>
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
    </S.KorpusColorWrapper>
  );
};

export default KorpusColor;
