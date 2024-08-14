import { AddToWishlistButton, ProductCardColor, ProductCardHeader } from "@/components/Products/ProductCard/ProductCard.styled";
import { Product } from "@/features/products/products.types";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import { Heart, Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProductMockImage from '@/public/images/korpus-pro/products/product.png';
import { capitalize } from '@mui/material';
import { theme } from '@/styles';
import * as S from './ProductItem.styled';

interface ProductItemProps {
    product: Product;
    handleSelectProduct: (productId: number | string, productName: string, count: number) => void;
    handleRemoveProduct: (productId: number | string) => void;
}

export default function ProductItem({ product, handleSelectProduct, handleRemoveProduct }: ProductItemProps) {
    const isMobile = useClientMediaQuery('(max-width: 768px)');
    const [count, setCount] = useState<number>(1);

    const handleMinusCount = (e: any) => {
        e.stopPropagation();
        if (count > 1) {
            setCount(count - 1);
            handleSelectProduct(product.id, product.name, count - 1);
        } else {
            handleRemoveProduct(product.id);
        }
    }

    const handlePlusCount = (e: any) => {
        e.stopPropagation();
        setCount(count + 1);
        handleSelectProduct(product.id, product.name, count + 1);
    }

    return (
        <S.ProductCard className='item' onClick={() => handleSelectProduct(product.id, product.name, count)}>
            <ProductCardHeader>
                <ProductCardColor color={product.color} />
                <AddToWishlistButton>
                    <Heart
                        size={isMobile ? 22 : 16}
                        color={theme.palette.common.secondaryGray}
                    />
                </AddToWishlistButton>
            </ProductCardHeader>
            <S.ProductImageWrapper>
                <S.ProductImage src={ProductMockImage.src} alt={'Korpus Pro Product image'}/>
            </S.ProductImageWrapper>
            <S.ProductCardFooter>
                <S.ProductInfo>
                    <S.ProductCategory>{capitalize(product.category)}</S.ProductCategory>
                    <S.ProductName>{product.name}</S.ProductName>
                </S.ProductInfo>
                <S.ProductActions>
                    <S.ProductPrice>
                        {product.price}
                        {product.currency}
                    </S.ProductPrice>
                    <S.Counter>
                        <S.CounterButton onClick={handleMinusCount} disabled={count === 1}><Minus size={16}/></S.CounterButton>
                        <S.CounterValue>{count}</S.CounterValue>
                        <S.CounterButton onClick={handlePlusCount}><Plus size={16}/></S.CounterButton>
                    </S.Counter>
                </S.ProductActions>
            </S.ProductCardFooter>
        </S.ProductCard>
    );
}