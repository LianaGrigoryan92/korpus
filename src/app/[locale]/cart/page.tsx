'use client';
import React, { useState, useEffect } from 'react';
import * as S from './page.styled';
import { MainLayout } from '@/components';
import OrderSummary from "@/app/[locale]/cart/OrderSummary";
import CartItems from "@/app/[locale]/cart/CartItems";

function Cart() {
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

    const updateProductQuantity = (projectIndex: number, subCategoryIndex: number, productIndex: number, change: number) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((project, pIndex) => {
                if (pIndex !== projectIndex) return project;

                return {
                    ...project,
                    subCategories: project.subCategories.map((subCategory: any, subCatIndex: number) => {
                        if (subCatIndex !== subCategoryIndex) return subCategory;

                        return {
                            ...subCategory,
                            products: subCategory.products.map((product: any, prodIndex: number) => {
                                if (prodIndex !== productIndex) return product;

                                return {
                                    ...product,
                                    count: Math.max(1, product.count + change)
                                };
                            })
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
                    <CartItems
                        cartItems={cartItems}
                        toggleExpandProject={toggleExpandProject}
                        toggleExpandSubCategory={toggleExpandSubCategory}
                        updateProductQuantity={updateProductQuantity}
                        expandedProjects={expandedProjects}
                        expandedSubCategories={expandedSubCategories}
                    />
                </S.CartContent>
                <OrderSummary cartItems={cartItems} expandedOrderProjects={expandedOrderProjects} toggleExpandOrderProject={toggleExpandOrderProject} />
            </S.CartContainer>
        </MainLayout>
    );
}

export default Cart;
