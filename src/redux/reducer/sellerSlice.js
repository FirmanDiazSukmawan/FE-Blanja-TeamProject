import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../baseUrl/url";
import Swal from "sweetalert2";

const initialState = {
  seller: [],
  status: "idle",
  isLoading: false,
};

export const getSellerById = createAsyncThunk(
  "seller/getSellerById",
  async (users_id) => {
    const response = await axios.get(`${url}/seller/${users_id}`);
    console.log(response);
    return response;
  }
);

export const updateSeller = createAsyncThunk(
  "seller/updateSeller",
  async ({ users_id, data, saveImage }) => {
    try {
      const formData = new FormData();
      formData.append("store_name", data.store_name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("store_description", data.store_description);
      formData.append("image", saveImage);
      const response = await axios.put(`${url}/seller/${users_id}`, formData);
      if (!response?.data) {
        Swal.fire({
          tittle: "Update failed",
          text: "please,input data",
          icon: "error",
        });
      } else {
        Swal.fire({
          tittle: "update Succes",
          text: "Update data succesfuly",
          icon: "success",
        });

        setTimeout(() => {
          window.location.reload();
        }, 500);
        return response?.data;
      }
    } catch (error) {
      Swal.fire({
        tittle: "Update failed",
        text: "please,input data",
        icon: "error",
      });
      setTimeout(() => {
        window.location.reload();
      }, 500);
      throw error;
    }
  }
);

export const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSellerById.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(getSellerById.fulfilled, (state, action) => {
        state.status = "success";
        state.seller = action.payload;
        state.isLoading = false;
      })
      .addCase(getSellerById.rejected, (state, action) => {
        state.status = "failed";
        state.seller = action.error.message;
        state.isLoading = false;
      })

      .addCase(updateSeller.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(updateSeller.fulfilled, (state, action) => {
        state.status = "success";
        state.seller = action.payload;
        state.isLoading = false;
      })
      .addCase(updateSeller.rejected, (state, action) => {
        state.status = "failed";
        state.seller = action.error.message;
        state.isLoading = false;
      });
  },
});

export const sellerSelector = (state) => state.seller.seller.data;
export const isLoadingSelector = (state) => state.seller.isLoading;
export default sellerSlice.reducer;
