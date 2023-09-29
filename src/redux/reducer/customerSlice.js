import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../baseUrl/url";
import Swal from "sweetalert2";

const initialState = {
  customer: [],
  status: "idle",
  isLoading: false,
};

export const getCustomerById = createAsyncThunk(
  "customer/getCustomerById",
  async (userId) => {
    const response = await axios.get(`${url}/customer/${userId}`);
    return response?.data;
  }
);

export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async ({ userId, data, saveImage }) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone_number", data.phone_number);
      formData.append("gender", data.gender);
      formData.append("birthday", data.birthday);
      formData.append("image", saveImage);
      const response = await axios.put(`${url}/customer/${userId}`, formData);
      if (!response) {
        Swal.fire({
          text: "please,input data",
          icon: "error",
        });
      } else {
        Swal.fire({
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

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomerById.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(getCustomerById.fulfilled, (state, action) => {
        state.status = "success";
        state.customer = action.payload;
        state.isLoading = false;
      })
      .addCase(getCustomerById.rejected, (state, action) => {
        state.status = "failed";
        state.customer = action.error.message;
        state.isLoading = false;
      })

      .addCase(updateCustomer.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        state.status = "success";
        state.customer = action.payload;
        state.isLoading = false;
      })
      .addCase(updateCustomer.rejected, (state, action) => {
        state.status = "failed";
        state.customer = action.error.message;
        state.isLoading = false;
      });
  },
});

export const customerSelector = (state) => state.customer?.customer?.data;
export const thisLoadingSelector = (state) => state.customer?.isLoading;
export default customerSlice.reducer;
