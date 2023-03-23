import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  tagTypes: ["Goods"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://161.35.29.179:8001/" }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => `review`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Goods", id })),
              { type: "Goods", id: "LIST" },
            ]
          : [{ type: "Goods", id: "LIST" }],
    }),
    getServices: build.query({
      query: () => `services`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Services", id })),
              { type: "Services", id: "LIST" },
            ]
          : [{ type: "Services", id: "LIST" }],
    }),
    getAdvantages: build.query({
      query: () => `advantages`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Advantages", id })),
              { type: "Advantages", id: "LIST" },
            ]
          : [{ type: "Advantages", id: "LIST" }],
    }),
    getProducts: build.query({
      query: () => `products`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Products", id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
    getNews: build.query({
      query: () => `news`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "News", id })),
              { type: "News", id: "LIST" },
            ]
          : [{ type: "News", id: "LIST" }],
    }),
    getAboutUs: build.query({
      query: () => `/main_info/about_us/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "About_us", id })),
              { type: "About_us", id: "LIST" },
            ]
          : [{ type: "About_us", id: "LIST" }],
    }),
    getMainInfo: build.query({
      query: () => `/main_info/main_info/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Main_info", id })),
              { type: "Main_info", id: "LIST" },
            ]
          : [{ type: "Main_info", id: "LIST" }],
    }),

    getNumbers: build.query({
      query: () => `/main_info/phone_number/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Phone_numbers", id })),
              { type: "Phone_numbers", id: "LIST" },
            ]
          : [{ type: "Phone_numbers", id: "LIST" }],
    }),
    getSchedule: build.query({
      query: () => `/main_info/schedule/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Schedule", id })),
              { type: "Schedule", id: "LIST" },
            ]
          : [{ type: "Schedule", id: "LIST" }],
    }),
    getSocialMedia: build.query({
      query: () => `/main_info/social_media/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Social_media", id })),
              { type: "Social_media", id: "LIST" },
            ]
          : [{ type: "Social_media", id: "LIST" }],
    }),
    addProducts: build.mutation({
      query: (body) => ({
        url: "review",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Goods", id: "LIST" }],
    }),

    deleteProduct: build.mutation({
      query: (id) => ({
        url: `review/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Goods", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAdvantagesQuery,
  useGetServicesQuery,
  useGetGoodsQuery,
  useDeleteProductMutation,
  useAddProductsMutation,
  useGetProductsQuery,
  useGetNewsQuery,
  useGetAboutUsQuery,
  useGetMainInfoQuery,
  useGetNumbersQuery,
  useGetScheduleQuery,
  useGetSocialMediaQuery,
} = goodsApi;
