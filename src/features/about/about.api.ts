import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  }),
  endpoints: (builder) => ({
    getAboutContent: builder.query<About, void>({
      query: () => ({
        url: '/about?populate[about_info_block][populate]=firstImage,secondaryImage,lastImage&populate[about_questions][populate][questions][populate]=*&populate[about_questions][populate]=about_questions_image&populate[learn_more_block][populate]=image',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }),
      transformResponse: (response: { data: any }) => response.data.attributes,
    }),
  }),
});

export const { useGetAboutContentQuery } = aboutApi;
