"use client";

import { useAppDispatch } from '@/store/hooks';
import ProductItem from './ProductItem';

// styles
import * as S from './Products.styled';

import {useCallback, useEffect, useMemo, useState} from 'react';
import { updateStepData } from '@/features';
import {useGetProductsBySubCategoryIdQuery} from "@/features/korpusProProducts";

interface SelectedProduct {
    count: number;
    productId: number | string;
    productName: string;
}

interface StepProps {
    onNext: (data: any) => void;
    onPrev: () => void;
    data: any;
    step: number;
    existProducts: number[];
}

export default function Products({ data, step, existProducts }: StepProps) {
  console.log(data.subCategory, existProducts)
  const { data: productsData } = useGetProductsBySubCategoryIdQuery({ subCategoryId: data.subCategory.subCategory.id });
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>();
  const dispatch = useAppDispatch();

  const products = useMemo(() => existProducts?.length ? productsData?.filter(subCategory => !existProducts.includes(subCategory.id)) : productsData, [productsData, existProducts])

  const handleRemoveProduct = useCallback((productId: string | number) => {
    setSelectedProducts((prevState) => {
      return prevState?.filter((product) => product.productId !== productId);
    });
  }, [])

  const handleSelectProduct = useCallback((productId: string | number, productName: string, productPrice: string, productImage: string, count: number) => {
    console.log({ count })
    setSelectedProducts((prevState) => {
      const isProductSelected = prevState?.find((product) => product.productId === productId);

      if (isProductSelected) {
        return prevState?.map((product) => {
          if (product.productId === productId) {
            return {
              ...product,
              productName,
              productPrice,
              productImage,
              count,
            };
          }

          return product;
        });
      }

      return [
        ...(prevState || []),
        {
          productId,
          productName,
          productPrice,
          productImage,
          count,
        },
      ];
    })
  }, [])

  useEffect(() => {
    const updatedData = { ...data, products: selectedProducts };
    dispatch(updateStepData ({ data: updatedData, step }));
  }, [selectedProducts]);

  console.log(selectedProducts);

  return (
    <S.ProductsWrapper>
      <S.Title>Korpuses</S.Title>
      <S.Products>
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleSelectProduct={handleSelectProduct}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </S.Products>
    </S.ProductsWrapper>
  );
}
