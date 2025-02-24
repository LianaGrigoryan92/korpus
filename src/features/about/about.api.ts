// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { strapiLanguageAdapter } from '@/utils/strapi-language-adapter';

// export const aboutApi = createApi({
//   reducerPath: 'aboutApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
//   }),
//   endpoints: (builder) => ({
//     getAboutContent: builder.query<About, { locale: string }>({
//       query: ({locale}) => ({
//         // url: `/about?populate[about_info_block][populate]=firstImage,secondaryImage,lastImage&populate[about_questions][populate][questions][populate]=*&populate[about_questions][populate]=about_questions_image&populate[learn_more_block][populate]=image&locale=${strapiLanguageAdapter(locale)}`,
//         url: '/about?populate[about_info_block][populate]=firstImage,secondaryImage,lastImage&populate[about_questions][populate][questions][populate]=*&populate[about_questions][populate]=about_questions_image&populate[learn_more_block][populate]=image',
//         headers: {
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
//         },
//       }),
//       transformResponse: (response: { data: any }) => response.data.attributes,
//     }),
//   }),
// });

// export const { useGetAboutContentQuery } = aboutApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// console.log('API URL:', process.env.NEXT_PUBLIC_STRAPI_API_URL);
// console.log('API Token:', process.env.NEXT_PUBLIC_STRAPI_TOKEN);
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
