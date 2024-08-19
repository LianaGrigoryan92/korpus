import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {getImageUrl} from "@/utils/getImageFullUrl";

export const productsApi = createApi({
  reducerPath: 'korpusProductsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getProductsBySubCategoryId: builder.query<Product[], { subCategoryId: string | number}>({
      query: ({ subCategoryId }) => ({
        url: `/products?populate[sub_categories][populate][0]=category&populate[image]=true&sort[0]=id&filters[sub_categories][id][$eq]=${subCategoryId}`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
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
