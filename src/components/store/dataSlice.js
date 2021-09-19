import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    name: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: initialValue,
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = dataSlice.actions;
export default dataSlice;