"use client";

import { KorpusProModal } from '@/components';
import { useAppDispatch } from '@/store/hooks';
import { showModal } from '@/features';

// styles & images
import * as S from './Category.styled';
import ServiceCategoryImg from '@/public/images/korpus-pro/categories/service-category.png';
import ModulesCategoryImg from '@/public/images/korpus-pro/categories/modules-category.png';
import KorpusmenCategoryImg from '@/public/images/korpus-pro/categories/korpusmen-category.png';

export default function Category() {
    const dispatch = useAppDispatch();

    const handleCategoryClick = () => {
      dispatch(showModal());
    };

    return (
        <S.CategoryWrapper>
            <KorpusProModal />
            <S.CategoryContainer>
                <S.CategoryItems>
                    <S.CategoryItem $bgImage={ServiceCategoryImg.src} onClick={handleCategoryClick}>
                        <span>Service</span>
                    </S.CategoryItem>
                    <S.CategoryItem $bgImage={ModulesCategoryImg.src} onClick={handleCategoryClick}>
                        <span>Modules</span>
                    </S.CategoryItem>
                </S.CategoryItems>
                <S.CategoryItem $bgImage={KorpusmenCategoryImg.src} onClick={handleCategoryClick}>
                    <span>Korpusmen</span>
                </S.CategoryItem>
            </S.CategoryContainer>
        </S.CategoryWrapper>
    );
}