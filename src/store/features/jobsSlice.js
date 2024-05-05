import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL } from "../../constants/index";

const initialState = {
  loading: false,
  jobsList: [],
};
export const getJobsList = createAsyncThunk(
  "getJobsList",
  async ({ limit = 10, offset = 0 }) => {
    try {
      const url = `${BASE_URL}/adhoc/getSampleJdJSON`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ limit: limit, offset: offset }),
      });
      let data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobsList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getJobsList.fulfilled, (state, action) => {
        state.loading = false;
        state.jobsList = action.payload?.jdList;
      })
      .addCase(getJobsList.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default jobsSlice.reducer;
