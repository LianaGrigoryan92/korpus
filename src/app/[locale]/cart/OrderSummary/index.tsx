import * as S from './OrderSummary.styled';
import Image from "next/image";
import ArrowIcon from "@/public/images/cart/arrow_back.svg";
import React from "react";
import {useClientMediaQuery} from "@/hooks/useClientMediaQuery";

interface Props {
    cartItems: any[];
    expandedOrderProjects: { [key: number]: boolean };
    toggleExpandOrderProject: (index: number) => void;
}

const OrderSummary = ({ cartItems, expandedOrderProjects, toggleExpandOrderProject }: Props) => {
    const isMobile = useClientMediaQuery('(max-width: 768px)');

    return (
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
                                    {project.subCategories.reduce((acc: number, subCategory: any) => acc + (subCategory.products?.reduce((subAcc: number, curr: any) => subAcc += parseFloat(curr?.productPrice) * curr?.count, 0) || 0), 0)} AMD
                                </S.OrderPrice>
                            </S.OrderItemProjectName>

                            {expandedOrderProjects[projectIndex] && project.subCategories && project.subCategories.map((subCategory: any, subCategoryIndex: number) => (
                                <S.OrderItemProjectName key={subCategoryIndex} style={{ paddingLeft: '22px' }}>
                                    <S.OrderLabel>{subCategory.name || `Subcategory ${subCategoryIndex + 1}`}</S.OrderLabel>
                                    <S.OrderPrice>
                                        {subCategory.products?.reduce((acc: number, curr: any) => acc += parseFloat(curr?.productPrice) * curr.count, 0) || 0} AMD
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
                            {cartItems.reduce((acc: number, project: any) => acc + (project.subCategories?.reduce((subAcc: number, subCategory: any) => subAcc + (subCategory.products?.reduce((prodAcc: number, curr: any) => prodAcc += parseFloat(curr?.productPrice) * curr.count, 0) || 0), 0) || 0), 0)} AMD
                        </S.TotalAmount>
                    </S.OrderTotal>
                    <S.CheckoutButton>Continue to checkout</S.CheckoutButton>
                </S.OrderDetail>
            </S.OrderSummaryDetailed>
        </S.OrderSummary>
    )
}

export default OrderSummary;
