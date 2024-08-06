'use client';

import { useGetCategoriesQuery } from '@/features/korpusProCategories';
import React, { useState } from 'react';
import * as S from './Category.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useGetSubCategoriesQuery } from '@/features/korpusProSubCategories';

interface StepProps {
  onNext: (data: any) => void;
  onPrev: () => void;
  data: any;
}

const Category: React.FC<StepProps> = ({ data }) => {
  const [stepData, setStepData] = useState(data || {});
  const {data: categories} = useGetCategoriesQuery();
  
  // TODO categoryType-ov get anel subCategories
  const {data: subCategories} = useGetSubCategoriesQuery({ categoryType: stepData.categoryType });

  console.log({ categories, subCategories });


  const handleClick = (categoryType: string) => {
    setStepData({ ...stepData, categoryType });
  };

  return (
    <S.CategoriesWrapper>
      {!stepData.categoryType && categories?.map((category) => (
        <S.CategoryItem 
          key={category.id}
          $bgImage={getImageUrl(category.img)}
          onClick={() => handleClick(category.type)}
        >
          <span>{category.name}</span>
        </S.CategoryItem>
      ))}
      {stepData.categoryType && (
        <S.SubCategories>
          {subCategories?.map((subCategory) => (
            <S.SubCategoryItem key={subCategory.id} $bgImage={getImageUrl(subCategory.img)}>
              <span>{subCategory.name}</span>
            </S.SubCategoryItem>
          ))}
        </S.SubCategories>
      )}
    </S.CategoriesWrapper>
  );
};

export default Category;
