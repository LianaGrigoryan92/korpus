'use client';

import { Heart } from 'lucide-react';
import { theme } from '@/styles';

//styles
import * as S from './ProductCard.styled';
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  image: string;
  currency: string;
  color: string;
}

export default function ProductCard({
  name,
  category,
  currency,
  price,
  image,
  color,
}: ProductCardProps) {
  return (
    <S.ProductCardContainer>
      <S.ProductCardHeader>
        <S.ProductCardColor color={color} />
        <S.AddToWishlistButton>
          <Heart size={16} color={theme.palette.common.secondaryGray} />
        </S.AddToWishlistButton>
      </S.ProductCardHeader>
      <S.ProductCardContent>
        <Image
          src={image}
          alt="Korpus Product Image"
          width={240}
          height={240}
        />
      </S.ProductCardContent>
      <S.ProductCardFooter>
        <S.ProductCardFooterContent>
          <S.ProductCardCategory>{category}</S.ProductCardCategory>
          <S.ProductCardName>{name}</S.ProductCardName>
        </S.ProductCardFooterContent>
        <S.ProductCardFooterContent>
          <S.ProductCardPrice>
            {price}
            {currency}
          </S.ProductCardPrice>
          <S.ProductCardAddToCard>Add to cart</S.ProductCardAddToCard>
        </S.ProductCardFooterContent>
      </S.ProductCardFooter>
    </S.ProductCardContainer>
  );
}
