'use client';
import { useState } from 'react';

// styles
import * as S from './ProductsSection.styled';
import { ArrowRight } from 'lucide-react';
import { theme } from '@/styles';
import {
  categories,
  products,
} from '@/components/Products/ProductsSection/mock';
import ProductCard from '@/components/Products/ProductCard';

export default function ProductsSection() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);

  const handleChangeSelectedCategory = (id: number) => {
    setSelectedCategoryId(id);
  };

  return (
    <S.ProductsSectionContainer>
      <S.ProductsSectionHeader>
        <S.ProductsSectionTitle>Suggested products</S.ProductsSectionTitle>
        <S.SeeAll>
          See All <ArrowRight size={18} color={theme.palette.common.black} />
        </S.SeeAll>
      </S.ProductsSectionHeader>
      <S.ProductCategories>
        {categories.map((category) => (
          <S.ProductCategoryItem
            key={category.id}
            selected={category.id === selectedCategoryId}
            onClick={() => handleChangeSelectedCategory(category.id)}
          >
            {category.name}
          </S.ProductCategoryItem>
        ))}
      </S.ProductCategories>
      <S.Products>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            image={product.image}
            currency={product.currency}
            color={product.color}
          />
        ))}
      </S.Products>
    </S.ProductsSectionContainer>
  );
}
