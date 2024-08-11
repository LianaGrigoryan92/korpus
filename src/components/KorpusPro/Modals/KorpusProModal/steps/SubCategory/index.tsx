'use client';

import React, { useEffect, useState } from 'react';
import * as S from './SubCategory.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useGetSubCategoriesQuery } from '@/features/korpusProSubCategories';
import { Check } from 'lucide-react';
import { updateStepData } from '@/features';
import { useAppDispatch } from '@/store/hooks';

interface StepProps {
  data: any;
  error: string;
  step: number;
}

const SubCategory: React.FC<StepProps> = ({ data, step }) => {
  console.log({ subCategories: data });
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<
    string | number | null
  >(null);
  const { data: subCategories } = useGetSubCategoriesQuery({ categoryId: 1 });
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updatedData = {
      ...data,
      subCategory: { subCategoryId: selectedSubCategoryId },
    };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [selectedSubCategoryId]);

  const handleClick = (categoryId: string | number) => {
    setSelectedSubCategoryId(categoryId);
  };

  return (
    <S.CategoriesWrapper>
      <S.SubCategories>
        <S.SubCategoriesTitle>Type</S.SubCategoriesTitle>
        {subCategories?.map((subCategory) => (
          <S.SubCategoryItem
            key={subCategory.id}
            onClick={() => handleClick(subCategory.id)}
            $active={selectedSubCategoryId === subCategory.id}
            $bgImage={getImageUrl(subCategory.img)}
          >
            <span className="name">{subCategory.name}</span>
            {selectedSubCategoryId === subCategory.id && (
              <span className="active-name">
                <Check size={22} />
              </span>
            )}
          </S.SubCategoryItem>
        ))}
      </S.SubCategories>
    </S.CategoriesWrapper>
  );
};

export default SubCategory;
