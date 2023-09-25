import { configureStore } from "@reduxjs/toolkit";
import sellerSlice from "./reducer/sellerSlice";

export const store = configureStore({
  reducer: {
    seller: sellerSlice,
  },
});
