import * as S from "./CartItems.styled";
import Image from "next/image";
import ArrowIcon from "@/public/images/cart/arrow_back.svg";
import React from "react";
import {showModal, changeStepCustom} from "@/features";
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

    const handleAddNewProject = () => {
        router.push('/korpus-pro');
        dispatch(showModal());
    };

    const handleAddNewItem = (project: any) => {
        router.push('/korpus-pro');
        const existSubCategories = project.subCategories.filter((subCategory: any) => subCategory?.products?.length).map((subCategory: any) => subCategory.id);
        dispatch(changeStepCustom({
            step: 3,
            category: {
                categoryId: project.subCategories[0].category.data.id,
            },
            projectName: project.projectName,
            existSubCategories,
        }));
    };

    const handleAdd = (subCategory: any, projectName: string) => {
        console.log(3333, subCategory);
        router.push('/korpus-pro');
        dispatch(changeStepCustom({
            step: subCategory?.products?.length ? 9 : 4,
            category: {
                categoryId: subCategory.category.data.id,
            },
            subCategory: {
                subCategory
            },
            existProducts: subCategory?.products?.length ? subCategory.products.map((product: any) => product.productId) : [],
            projectName,
            // height: subCategory.preferences.position['Total Height*'],
            korpusColor: {
                colorId: subCategory.korpusColorId,
            },
            facadeColor: {
                type: subCategory.facadeColorType,
                lacquerPercentage: subCategory.lacquerPercentage,
                color: subCategory.facadeHex,
            },
        }));
    };

    return (
        <S.CartItems>
            <S.ProjectTitle>
                Cart
                <S.Link onClick={handleAddNewProject}>Add new project</S.Link>
            </S.ProjectTitle>
            {cartItems.map((project, projectIndex) => (
                <div key={projectIndex}>
                    <S.ProductTitle onClick={() => toggleExpandProject(projectIndex)}>
                        <S.ProductChild>
                            <Image
                                src={ArrowIcon}
                                alt="Arrow icon"
                                style={{
                                    transform: expandedProjects[projectIndex] ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                            />
                            {project.projectName}
                            <S.ItemCount>{project.subCategories.reduce((acc: number, curr: any) => acc + (curr.products ? curr.products.length : 0), 0)} item{project.subCategories.length > 1 && 's'}</S.ItemCount>
                        </S.ProductChild>
                        <S.Link onClick={() => handleAddNewItem(project)}>Add new item</S.Link>
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
                                        <S.Link onClick={() => handleAdd(subCategory, project.projectName)}>Add</S.Link>
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
