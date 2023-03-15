import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  tagTypes: ["Goods"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://sms-h9zb.onrender.com/" }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => `user`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Goods", id })),
              { type: "Goods", id: "LIST" },
            ]
          : [{ type: "Goods", id: "LIST" }],
    }),
  }),
});

export const {useGetGoodsQuery}=goodsApi;