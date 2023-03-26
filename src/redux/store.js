import { configureStore , combineReducers } from "@reduxjs/toolkit";

import { goodsApi } from "./goodsApi";

import { counterSlice } from "./goodsApi";

const rootReducer = combineReducers({
    counter:counterSlice.reducer,
    [goodsApi.reducerPath]:goodsApi.reducer,
});


export const store = configureStore({
    reducer: rootReducer,
    middleware:(something)=>something().concat(goodsApi.middleware),
  });

// export const store = configureStore({
//     reducer:{
//         [goodsApi.reducerPath]:goodsApi.reducer,
//     },
//     middleware:(something)=>something().concat(goodsApi.middleware),
// });