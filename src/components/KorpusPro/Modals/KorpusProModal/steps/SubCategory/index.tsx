'use client';

import React, {useEffect, useMemo, useState} from 'react';
import * as S from './SubCategory.styled';
import { getImageUrl } from '@/utils/getImageFullUrl';
import { useGetSubCategoriesQuery } from '@/features/korpusProSubCategories';
import { Check } from 'lucide-react';
import { updateStepData } from '@/features';
import { useAppDispatch } from '@/store/hooks';
import {useClientMediaQuery} from "@/hooks/useClientMediaQuery";

interface StepProps {
  data: any;
  error: string;
  step: number;
  existSubCategories: any;
}

const SubCategory: React.FC<StepProps> = ({ data, step, existSubCategories }) => {
  console.log({ subCategories: data });
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory>();
  const { data: subCategoriesData } = useGetSubCategoriesQuery({ categoryId: data.category.categoryId });
  const dispatch = useAppDispatch();
  const isMobile = useClientMediaQuery('(max-width: 768px)');

  const subCategories = useMemo(() => existSubCategories?.length ? subCategoriesData?.filter(subCategory => !existSubCategories.includes(subCategory.id)) : subCategoriesData, [subCategoriesData, existSubCategories])

  useEffect(() => {
    const notUsedCategories = subCategories?.filter(category => category.id !== selectedSubCategory?.id);
    const updatedData = {
      ...data,
      subCategory: { subCategory: selectedSubCategory, notUsedCategories },
    };
    dispatch(updateStepData({ data: updatedData, step }));
  }, [selectedSubCategory]);

  const handleClick = (subCategory: SubCategory) => {
    setSelectedSubCategory(subCategory);
  };

  return (
    <S.CategoriesWrapper>
      <S.SubCategories>
        {!isMobile && <S.SubCategoriesTitle>Type</S.SubCategoriesTitle>}
        {subCategories?.map((subCategory) => (
          <S.SubCategoryItem
            key={subCategory.id}
            onClick={() => handleClick(subCategory)}
            $active={selectedSubCategory?.id === subCategory.id}
            $bgImage={getImageUrl(subCategory.img)}
          >
            <span className="name">{subCategory.name}</span>
            {selectedSubCategory?.id === subCategory.id && (
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
