import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'korpusProductsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getProductsBySubCategoryId: builder.query<Product[], { subCategoryId: string | number}>({
      query: ({ subCategoryId }) => ({
        url: `/products?populate[sub_categories][populate]=category&sort[0]=id&filters[sub_categories][id][$eq]=${subCategoryId}`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any[] }, meta, arg) => {
       return response.data.map((item) => ({
         id: item.id,
         title: item.attributes.title,
         price: item.attributes.price,
         image: item.attributes.image,
         currency: item.attributes.currency,
         category: item.attributes.sub_categories.data[0].attributes.category.data.attributes.name,
         ...item.attributes,
       }));
      }
    }),
  }),
});

export const { useGetProductsBySubCategoryIdQuery } = productsApi;
