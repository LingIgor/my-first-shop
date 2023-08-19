import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

// export const getUser = createAsyncThunk(
//   "user/getUser",
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios(`${BASE_URL}/user`);
//       return res.data;
//     } catch (e) {
//       console.log(e);
//       return thunkAPI.rejectWithValue(e);
//     }
//   }
// );

const initialState = {
  currentUser: [],
  cart: [],
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });

      state.cart = newCart;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getUser.fulfilled, (state, { payload }) => {
    //     state.list = payload;
    //     state.isLoading = false;
    //   })
    //   .addCase(getUser.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getUser.rejected, (state) => {
    //     state.isLoading = false;
    //   });
  },
});

export const { addItemToCart } = userSlice.actions;

export default userSlice.reducer;
