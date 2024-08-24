import * as S from "./CartItems.styled";
import Image from "next/image";
import ArrowIcon from "@/public/images/cart/arrow_back.svg";
import React from "react";
import {showModal} from "@/features";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/store/hooks";

interface Props {
    cartItems: any[];
    toggleExpandProject: (index: number) => void;
    toggleExpandSubCategory: (index: number, index2: number) => void;
    updateProductQuantity: (index: number, index2: number, index3: number, quantity: number) => void;
    expandedProjects: any;
    expandedSubCategories: any;
}

const CartItems = ({ cartItems, toggleExpandProject, expandedProjects, expandedSubCategories, toggleExpandSubCategory, updateProductQuantity }: Props) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleAddNewProjectClick = () => {
        router.push('/korpus-pro');
        dispatch(showModal());
    };

    return (
        <S.CartItems>
            <S.ProjectTitle>
                Cart
                <S.Link onClick={handleAddNewProjectClick}>Add new project</S.Link>
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
                        <S.ItemCount>{project.subCategories.reduce((acc: number, curr: any) => acc + (curr.products ? curr.products.length : 0), 0)} item{project.subCategories.length > 1 && 's'}</S.ItemCount>
                        <S.Link>Add new item</S.Link>
                    </S.ProductTitle>

                    {expandedProjects[projectIndex] && project.subCategories && project.subCategories.map((subCategory: any, subCategoryIndex: number) => {
                        return (
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
                                        {subCategory.name}
                                        <S.ItemCount>{subCategory.products?.length || 0} item{subCategory.products?.length !== 1 && 's'}</S.ItemCount>
                                    </S.SubCategoryContent>
                                    <S.SubCategoryContent>
                                        <S.TotalPrice>Total price: {subCategory.products?.reduce((acc: number, curr: any) => acc += parseFloat(curr?.productPrice) * curr.count, 0) || 0} AMD</S.TotalPrice>
                                        <S.Link>Add</S.Link>
                                    </S.SubCategoryContent>
                                </S.SubCategoryTitle>

                                {expandedSubCategories[projectIndex]?.[subCategoryIndex] && (
                                    subCategory.products && subCategory.products.length > 0 ? (
                                        subCategory.products.map((product: any, productIndex: number) => (
                                            <S.CartItem key={productIndex}>
                                                <S.ItemImage src={product.productImage} alt={product.productName} />
                                                <S.ItemDetails>
                                                    <S.ItemTitle>{product.productName}</S.ItemTitle>
                                                    <S.ItemRef>REF. {product.productId}</S.ItemRef>
                                                    <S.ItemPrice>Price: {product.productPrice}</S.ItemPrice>
                                                    <S.QuantityDetails>
                                                        <S.QuantityText>Quantity</S.QuantityText>
                                                        <S.Quantity>
                                                            <S.QuantityControl onClick={() => updateProductQuantity(projectIndex, subCategoryIndex, productIndex, -1)}>-</S.QuantityControl>
                                                            <S.QuantityAmount>{product.count}</S.QuantityAmount>
                                                            <S.QuantityControl onClick={() => updateProductQuantity(projectIndex, subCategoryIndex, productIndex, 1)}>+</S.QuantityControl>
                                                        </S.Quantity>
                                                        <S.ItemLinks>
                                                            <S.Link>Save to favorites</S.Link>
                                                            <S.DeleteItem>Delete</S.DeleteItem>
                                                        </S.ItemLinks>
                                                    </S.QuantityDetails>
                                                </S.ItemDetails>
                                            </S.CartItem>
                                        ))
                                    ) : (
                                        <S.CartItem>
                                            <S.ItemDetails>
                                                <S.ItemTitle>No products available in this subcategory.</S.ItemTitle>
                                            </S.ItemDetails>
                                        </S.CartItem>
                                    )
                                )}
                            </div>
                        )})}
                </div>
            ))}
        </S.CartItems>
    )
}

export default CartItems;
