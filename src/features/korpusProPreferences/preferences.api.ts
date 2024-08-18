import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {getImageUrl} from "@/utils/getImageFullUrl";

export const preferencesApi = createApi({
  reducerPath: 'preferencesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getPreferenceBySubCategoryId: builder.query<Preference[], { subCategoryId: string | number }>({
      query: ({ subCategoryId }) => {
        return {
          url: `/preferences?populate[preferenceItems][populate]=items,image&sort[0]=id&filters[sub_category][id][$eq]=${subCategoryId}`,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
          },
        };
      },
      transformResponse: (response: { data: any[] }) => {
        if (response.data.length) {
          return response.data.map(item => ({
            id: item.id,
            name: item.attributes.name,
            type: item.attributes.type,
            preferenceItems: item.attributes.preferenceItems?.map((prefItem: any) => {
              const items = prefItem.items.map((item: { value: string }) => item.value);
             return {
               id: prefItem.id,
               name: prefItem.name,
               default: prefItem.default,
               editable: prefItem.editable,
               isFixed: prefItem.isFixed,
               selectable: prefItem.selectable,
               type: prefItem.type,
               image: prefItem.image?.data ? prefItem.image : null,
               items,
             }
            }),
          }));
        }
        return [];
      },
    }),
  }),
});

export const { useGetPreferenceBySubCategoryIdQuery } = preferencesApi;
