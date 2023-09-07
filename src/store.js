import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { puppyApi } from "./PuppyApi";

const store = configureStore({
    reducer:{
        [puppyApi.reducerPath]: puppyApi.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(puppyApi.middleware)
})

setupListeners(store.dispatch)

export default store;