'use client';

import { useGetCategoriesQuery } from '@/features/korpusProCategories';
import React, { use, useEffect, useState } from 'react';
import * as S from './Category.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { Check } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { updateStepData } from '@/features';

interface StepProps {
  onNext: (data: any) => void;
  onPrev: () => void;
  data: any;
  step: number;
}

const Category: React.FC<StepProps> = ({ data, step }) => {
  const { data: categories } = useGetCategoriesQuery();
  const dispatch = useAppDispatch();
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | number | null
  >(null);

  useEffect(() => {
    const updatedData = {
      ...data,
      category: { categoryId: selectedCategoryId },
    };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [selectedCategoryId]);

  const handleClick = (categoryId: string | number) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <S.CategoriesWrapper>
      <S.Categories>
        {categories?.map((category) => (
          <S.CategoryItem
            key={category.id}
            $active={selectedCategoryId === category.id}
            $bgImage={getImageUrl(category.img)}
            onClick={() => handleClick(category.id)}
          >
            <span className="name">{category.name}</span>
            {selectedCategoryId === category.id && (
              <span className="active-name">
                <Check size={22} />
              </span>
            )}
          </S.CategoryItem>
        ))}
      </S.Categories>
    </S.CategoriesWrapper>
  );
};

export default Category;
