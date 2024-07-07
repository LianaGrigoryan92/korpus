'use client';

// styles
import * as S from './CategoryItem.styled';
import { ArrowRight } from 'lucide-react';
import { theme } from '@/styles';

interface CategoryProps {
  image: string;
  name: string;
}

export default function CategoryItem({ image, name }: CategoryProps) {
  return (
    <S.CategoryItemContainer $backgroundImage={image}>
      <S.CategoryItemContent>
        <S.CategoryItemTitle>{name}</S.CategoryItemTitle>
        <S.SeeCategoryButton>
          See more <ArrowRight size={20} color={theme.palette.common.white} />
        </S.SeeCategoryButton>
      </S.CategoryItemContent>
    </S.CategoryItemContainer>
  );
}
