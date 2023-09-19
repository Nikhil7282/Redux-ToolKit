import {configureStore } from "@reduxjs/toolkit"
import cartSlice from "./features/cart/cartSlice";
import modelSlice from "./features/model/modelSlice";

export const store=configureStore({
    reducer:{
        cart:cartSlice,
        model:modelSlice
    },
});

// export const store=createStore(applyMiddleware())