'use client';
import React, { useState, useEffect } from 'react';
import ArrowIcon from '@/public/images/cart/arrow_back.svg';
import * as S from './page.styled';
import { MainLayout } from '@/components';
import Image from "next/image";
import {useClientMediaQuery} from "@/hooks/useClientMediaQuery";

function Cart() {
    const isMobile = useClientMediaQuery('(max-width: 768px)');
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({});
    const [expandedSubCategories, setExpandedSubCategories] = useState<{ [key: number]: { [key: number]: boolean } }>({});
    const [expandedOrderProjects, setExpandedOrderProjects] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        const getCartItems = () => {
            const items: any = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('cartData-')) {
                    const item = JSON.parse(localStorage.getItem(key) as string);
                    items.push(item);
                }
            }
            setCartItems(items);
        };

        getCartItems();
    }, []);

    const toggleExpandProject = (index: number) => {
        setExpandedProjects((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const toggleExpandSubCategory = (projectIndex: number, subCategoryIndex: number) => {
        setExpandedSubCategories((prev) => ({
            ...prev,
            [projectIndex]: {
                ...prev[projectIndex],
                [subCategoryIndex]: !prev[projectIndex]?.[subCategoryIndex]
            }
        }));
    };

    const toggleExpandOrderProject = (index: number) => {
        setExpandedOrderProjects((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const updateProductQuantity = (projectIndex: number, productIndex: number, change: number) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((project, pIndex) => {
                if (pIndex !== projectIndex) return project;

                return {
                    ...project,
                    products: project.products.map((product: any, prodIndex: number) => {
                        if (prodIndex !== productIndex) return product;

                        return {
                            ...product,
                            count: Math.max(1, product.count + change)
                        };
                    })
                };
            });

            return updatedItems;
        });
    };

    return (
        <MainLayout>
            <S.CartContainer>
                <S.CartContent>
                    <S.CartItems>
                        <S.ProjectTitle>
                            Cart
                            <S.Link>Add new project</S.Link>
                        </S.ProjectTitle>
                        {cartItems.map((project, projectIndex) => (
                            <div key={projectIndex}>
                                <S.ProductTitle onClick={() => toggleExpandProject(projectIndex)}>
                                    <Image
                                        src={ArrowIcon}
                                        alt="Arrow icon"
                                        style={{
                                            transform: expandedProjects[projectIndex] ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                    />
                                    {project.projectName || `Project ${projectIndex + 1}`}
                                    <S.ItemCount>{project.products.length} item{project.products.length > 1 && 's'}</S.ItemCount>
                                    <S.Link>Add new item</S.Link>
                                </S.ProductTitle>

                                {expandedProjects[projectIndex] && project.subCategories && Object.values(project.subCategories).map((subCategory: any, subCategoryIndex) => (
                                    <div key={subCategoryIndex}>
                                        <S.SubCategoryTitle onClick={() => toggleExpandSubCategory(projectIndex, subCategoryIndex)}>
                                            <S.SubCategoryContent>
                                                <Image
                                                    src={ArrowIcon}
                                                    alt="Arrow icon"
                                                    style={{
                                                        transform: expandedSubCategories[projectIndex]?.[subCategoryIndex] ? 'rotate(180deg)' : 'rotate(0deg)',
                                                        transition: 'transform 0.3s ease',
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                                {subCategory.name || `Subcategory ${subCategoryIndex + 1}`}
                                                <S.ItemCount>{project.products.length} item{project.products.length > 1 && 's'}</S.ItemCount>
                                            </S.SubCategoryContent>
                                            <S.SubCategoryContent>
                                                <S.TotalPrice>Total price: {project.products.reduce((acc: number, curr: any) => acc += parseFloat(curr.productPrice) * curr.count, 0)} AMD</S.TotalPrice>
                                                <S.Link>Add</S.Link>
                                            </S.SubCategoryContent>
                                        </S.SubCategoryTitle>

                                        {expandedSubCategories[projectIndex]?.[subCategoryIndex] && project.products.map((product: any, productIndex: number) => (
                                            <S.CartItem key={productIndex}>
                                                <S.ItemImage src={product.image} alt={product.productName} />
                                                <S.ItemDetails>
                                                    <S.ItemTitle>{product.productName}</S.ItemTitle>
                                                    <S.ItemRef>REF. {product.productId}</S.ItemRef>
                                                    <S.ItemPrice>Price: {product.productPrice}</S.ItemPrice>
                                                    <S.QuantityDetails>
                                                        <S.QuantityText>Quantity</S.QuantityText>
                                                        <S.Quantity>
                                                            <S.QuantityControl onClick={() => updateProductQuantity(projectIndex, productIndex, -1)}>-</S.QuantityControl>
                                                            <S.QuantityAmount>{product.count}</S.QuantityAmount>
                                                            <S.QuantityControl onClick={() => updateProductQuantity(projectIndex, productIndex, 1)}>+</S.QuantityControl>
                                                        </S.Quantity>
                                                        <S.ItemLinks>
                                                            <S.Link>Save to favorites</S.Link>
                                                            <S.DeleteItem>Delete</S.DeleteItem>
                                                        </S.ItemLinks>
                                                    </S.QuantityDetails>
                                                </S.ItemDetails>
                                            </S.CartItem>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </S.CartItems>
                </S.CartContent>
                <S.OrderSummary>
                    <S.OrderSummaryDetailed>
                        {!isMobile && <S.OrderTitle>Order summary</S.OrderTitle>}
                        <S.OrderDetail>
                            {cartItems.map((project, projectIndex) => (
                                <S.OrderItem key={projectIndex}>
                                    <S.OrderItemProjectName onClick={() => toggleExpandOrderProject(projectIndex)}>
                                        <S.OrderItemProjectNameDetail>
                                            <Image
                                                src={ArrowIcon}
                                                alt="Arrow icon"
                                                style={{
                                                    transform: expandedOrderProjects[projectIndex] ? 'rotate(180deg)' : 'rotate(0deg)',
                                                    transition: 'transform 0.3s ease',
                                                    width: '12px',
                                                    cursor: 'pointer'
                                                }}
                                            />
                                            <S.OrderLabel>{project.projectName || `Project ${projectIndex + 1}`}</S.OrderLabel>
                                        </S.OrderItemProjectNameDetail>
                                        <S.OrderPrice>
                                            {project.products.reduce((acc: number, curr: any) => acc += parseFloat(curr.productPrice) * curr.count, 0)} AMD
                                        </S.OrderPrice>
                                    </S.OrderItemProjectName>

                                    {expandedOrderProjects[projectIndex] && project.subCategories && Object.values(project.subCategories).map((subCategory: any, subCategoryIndex) => (
                                        <S.OrderItemProjectName key={subCategoryIndex} style={{ paddingLeft: '22px' }}>
                                            <S.OrderLabel>{subCategory.name || `Subcategory ${subCategoryIndex + 1}`}</S.OrderLabel>
                                            <S.OrderPrice>
                                                {project.products.reduce((acc: number, curr: any) => acc += parseFloat(curr.productPrice) * curr.count, 0)} AMD
                                            </S.OrderPrice>
                                        </S.OrderItemProjectName>
                                    ))}
                                </S.OrderItem>
                            ))}
                            <S.OrderItem>
                                <S.OrderLabel>Delivery</S.OrderLabel>
                                <S.OrderLabel>Excluding delivery</S.OrderLabel>
                            </S.OrderItem>
                            <S.OrderTotal>
                                <S.TotalLabel>Total</S.TotalLabel>
                                <S.TotalAmount>
                                    {cartItems.reduce((acc: number, project: any) => acc + project.products.reduce((subAcc: number, curr: any) => subAcc += parseFloat(curr.productPrice) * curr.count, 0), 0)} AMD
                                </S.TotalAmount>
                            </S.OrderTotal>
                            <S.CheckoutButton>Continue to checkout</S.CheckoutButton>
                        </S.OrderDetail>
                    </S.OrderSummaryDetailed>
                </S.OrderSummary>
            </S.CartContainer>
        </MainLayout>
    );
}

export default Cart;
