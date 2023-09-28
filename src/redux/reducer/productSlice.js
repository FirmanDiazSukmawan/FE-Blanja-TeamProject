import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../baseUrl/url";
import Swal from "sweetalert2";

const initialState = {
  product: [],
  status: "idle",
  isLoading: false,
};

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const response = await axios.get(`${url}/product`);
  return response.data;
});

export const getProductId = createAsyncThunk(
  "product/getProductId",
  async (product_id) => {
    const response = await axios.get(`${url}/product/${product_id}`);
    return response.data;
  }
);

export const getProductUsersId = createAsyncThunk(
  "product/getProductUsersId",
  async (users_id) => {
    const response = await axios.get(`${url}/product/user/${users_id}`);
    return response.data;
  }
);

export const getProductCategoryId = createAsyncThunk(
  "product/getProductCategoryId",
  async (category_id) => {
    const response = await axios.get(`${url}/product/category/${category_id}`);
    return response.data;
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async ({ data, saveImage }) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const formDataToSend = new FormData();
      formDataToSend.append("name_product", data.name_product);
      formDataToSend.append("price", data.price);
      formDataToSend.append("color", data.color);
      formDataToSend.append("size", data.size);
      formDataToSend.append("stock", data.stock);
      formDataToSend.append("condition", data.condition);
      formDataToSend.append("image_product", saveImage);
      formDataToSend.append("description", data.description);
      formDataToSend.append("users_id", data.users_id);
      formDataToSend.append("category_id", data.category_id);

      const response = await axios.post(
        `${url}/product`,
        formDataToSend,
        config
      );
      Swal.fire({
        tittle: "Create Success",
        text: "Create Product Success",
        icon: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return response.data;
    } catch (error) {
      Swal.fire({
        tittle: "Create failed",
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

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ product_id, data, saveImage }) => {
    const formData = new FormData();
    formData.append("name_product", data.name_product);
    formData.append("price", data.price);
    formData.append("color", data.color);
    formData.append("size", data.size);
    formData.append("stock", data.stock);
    formData.append("image_product", saveImage);
    formData.append("description", data.description);

    try {
      const response = await axios.put(
        `${url}/product/${product_id}`,
        formData
      );

      if (!response?.data) {
        Swal.fire({
          tittle: "input Error",
          text: "Please try again",
          icon: "error",
        });
      } else {
        Swal.fire({
          tittle: "update Success",
          text: "update Product Success",
          icon: "success",
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
        return response?.data;
      }
    } catch (error) {
      Swal.fire({
        tittle: "update Error",
        text: "update Product Error",
        icon: "error",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async ({ product_id }) => {
    try {
      const response = await axios.delete(`${url}/product/${product_id}`);
      if (!response?.data) {
        Swal.fire({
          tittle: "delete Error",
          text: "Please try again",
          icon: "error",
        });
      } else {
        Swal.fire({
          tittle: "Delete Succes",
          text: "already deleted product",
          icon: "success",
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000);

        return response?.data;
      }
    } catch (err) {
      Swal.fire({
        tittle: "delete error",
        text: "delete product error",
        icon: "error",
      });
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = false;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = false;
        state.product = action.error.message;
      })
      .addCase(getProductId.pending, (state) => {
        state.status = true;
      })
      .addCase(getProductId.fulfilled, (state, action) => {
        state.status = false;
        state.product = action.payload;
      })
      .addCase(getProductId.rejected, (state, action) => {
        state.status = false;
        state.product = action.error.message;
      })
      .addCase(getProductUsersId.pending, (state) => {
        state.status = true;
      })
      .addCase(getProductUsersId.fulfilled, (state, action) => {
        state.status = false;
        state.product = action.payload;
      })
      .addCase(getProductUsersId.rejected, (state, action) => {
        state.status = false;
        state.product = action.error.message;
      })
      .addCase(getProductCategoryId.pending, (state) => {
        state.status = true;
      })
      .addCase(getProductCategoryId.fulfilled, (state, action) => {
        state.status = false;
        state.product = action.payload;
      })
      .addCase(getProductCategoryId.rejected, (state, action) => {
        state.status = false;
        state.product = action.error.message;
      })
      .addCase(createProduct.pending, (state) => {
        state.status = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = false;
        state.product = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = false;
        state.product = action.error.message;
      });
  },
});

export const productSelector = (state) => state.product?.product.data;
export const loadingSelector = (state) => state.product?.loading;
export default productSlice.reducer;
