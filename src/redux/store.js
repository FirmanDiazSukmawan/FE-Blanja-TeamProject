import { configureStore } from "@reduxjs/toolkit";
import sellerSlice from "./reducer/sellerSlice";
import productSlice from "./reducer/productSlice";
import customerSlice from "./reducer/customerSlice";

export const store = configureStore({
  reducer: {
    seller: sellerSlice,
    product: productSlice,
    customer: customerSlice,
  },
});
