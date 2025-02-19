'use client';

import { KorpusProModal } from '@/components';
import { useAppDispatch } from '@/store/hooks';
import { useState } from 'react';
import { showModal } from '@/features';

// styles & images
import * as S from './Category.styled';
import ServiceCategoryImg from '@/public/images/korpus-pro/categories/service-category.png';
import ModulesCategoryImg from '@/public/images/korpus-pro/categories/modules-category.png';
import KorpusmenCategoryImg from '@/public/images/korpus-pro/categories/korpusmen-category.png';

export default function Category() {
  const dispatch = useAppDispatch();
  const [isServiceIframeOpen, setServiceIframeOpen] = useState(false);

  const handleModuleCategoryClick = () => {
    dispatch(showModal());
  };

  const handleServiceCategoryClick = () => {
    setServiceIframeOpen((prevState) => !prevState);
  };

  return (
      <S.CategoryWrapper>
        <KorpusProModal />
        <S.CategoryContainer>
          <S.CategoryItems>
            <S.CategoryItem
                $bgImage={ServiceCategoryImg.src}
                onClick={handleServiceCategoryClick}
            >
              <span>Service</span>
            </S.CategoryItem>
            {isServiceIframeOpen && (
                <S.ServiceBlock>
                  <iframe
                      src="https://cloud.bazissoft.ru/cutting/ru/#/client/auth/login?user=8782"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        backgroundColor: '#fff',
                        maxWidth: '1440px',
                        top: 0,
                      }}
                  />
                  <div
                    onClick={() => window.open('https://your-link.com', '_blank')}
                    style={{
                      position: 'absolute',
                      zIndex: 10,
                      top: '13%',
                      left: '42%',
                      transform: 'translateX(-50%)',
                      width: '300px',
                      height: '50px',
                      cursor: 'pointer',
                    }}
                  />
                </S.ServiceBlock>
            )}
            <S.CategoryItem
                $bgImage={ModulesCategoryImg.src}
                onClick={handleModuleCategoryClick}
            >
              <span>Modules</span>
            </S.CategoryItem>
          </S.CategoryItems>
          <S.CategoryItem $bgImage={KorpusmenCategoryImg.src}>
            <span>Korpusmen</span>
          </S.CategoryItem>
        </S.CategoryContainer>
      </S.CategoryWrapper>
  );
}
