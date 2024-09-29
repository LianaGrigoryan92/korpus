import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getImageUrl } from "@/utils/getImageFullUrl";

export const productsApi = createApi({
  reducerPath: 'korpusProductsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getProductsBySubCategoryId: builder.query<Product[], { subCategoryId: string | number, minHeight?: number, maxHeight?: number, korpusColorId?: string | number, facadeColorType?: number | string, lacquerPercentage?: number, facadeHex?: string, [key: string]: any  }>({
      query: ({ subCategoryId, minHeight, maxHeight, korpusColorId, facadeColorType, lacquerPercentage, facadeHex, ...dynamicPreferencesParams }) => ({
        url: `/products`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
        params: {
          'populate[sub_categories][populate][0]': 'category',
          'populate[image]': 'true',
          'sort[0]': 'id',
          'filters[sub_categories][id][$eq]': subCategoryId,
          ...(minHeight && {'filters[$or][0][minHeight][$lte]': minHeight}),
          ...(maxHeight && {'filters[$or][0][maxHeight][$gte]': maxHeight}),
          'filters[korpus_colors][id][$eq]': korpusColorId,
          ...(facadeColorType && { 'filters[facade_color_types][id][$eq]': facadeColorType }),
          ...(lacquerPercentage && { 'filters[lacquerPercentages][title][$eq]': lacquerPercentage }),
          ...(facadeHex && { 'filters[facadeColor][hex][$eq]': facadeHex }),
          ...dynamicPreferencesParams,
        },
      }),
      transformResponse: (response: { data: any[] }, meta, arg) => {
        return response.data.map((item) => ({
          ...item.attributes,
          id: item.id,
          title: item.attributes.title,
          price: item.attributes.price,
          image: getImageUrl(item.attributes.image),
          currency: item.attributes.currency,
          category: item.attributes.sub_categories.data[0].attributes.category.data.attributes.name,
        }));
      }
    }),
  }),
});

export const { useGetProductsBySubCategoryIdQuery } = productsApi;
