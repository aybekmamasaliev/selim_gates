import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";

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
      query: (count, reload) => `news?limit=${count}&offset=${reload}`,
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.map(({ id }) => ({ type: "News", id })),
      //         { type: "News", id: "LIST" },
      //       ]
      //     : [{ type: "News", id: "LIST" }],
    }),
    getSingleNews: build.query({
      query: (id) => `/news/${id}`,
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
    getFeedBacks: build.query({
      query: () => `feedback`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "FeedBack", id })),
              { type: "FeedBack", id: "LIST" },
            ]
          : [{ type: "FeedBack", id: "LIST" }],
    }),
    getCategories: build.query({
      query: () => `categories`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Categories", id })),
              { type: "Categories", id: "LIST" },
            ]
          : [{ type: "Categories", id: "LIST" }],
    }),
    
    getMap: build.query({
      query: () => `/main_info/map/`,
    }),

    getSubCategory: build.query({
      query: (id) => `/categories/${id}/`,
    }),
    getCategoryAdvantages: build.query({
      query: () => `/category-advantages/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "CategoryAdvantages", id })),
              { type: "CategoryAdvantages", id: "LIST" },
            ]
          : [{ type: "CategoryAdvantages", id: "LIST" }],
    }),

    addFeedBacks: build.mutation({
      query: (body) => ({
        url: "/feedback/",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "FeedBack", id: "LIST" }],
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

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: "hidden",
  },
  reducers: {
    increment: (state) => {
      state.value = "visible";
    },
    decrement: (state) => {
      state.value = "hidden";
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const {
  useGetAdvantagesQuery,
  useGetServicesQuery,
  useGetGoodsQuery,
  useGetProductsQuery,
  useGetNewsQuery,
  useGetAboutUsQuery,
  useGetMainInfoQuery,
  useGetNumbersQuery,
  useGetScheduleQuery,
  useGetSocialMediaQuery,
  useGetFeedBacksQuery,
  useGetSingleNewsQuery,
  useAddFeedBacksMutation,
  useGetCategoriesQuery,
  useGetMapQuery,
  useDeleteProductMutation,
  useAddProductsMutation,
  useGetSubCategoryQuery,
  useGetCategoryAdvantagesQuery,
} = goodsApi;
