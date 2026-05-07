import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../client/axios-client";
import { type IUserData } from "../types/AuthType";

export interface IUserState {
  allUsers: Array<IUserData> | null,
  userDetail: IUserData | null
}


// develops a reducer function to handle async caller
export const getAllUsers = createAsyncThunk("user/getAllUsers", async() => {
  const response = await axiosInstance.get("/users", {
    params: {limit: 30, skip: 0}
  }) as {users: Array<IUserData>, skip: number, limit: number, total: number}

  return response.users;
});


export const getUserDetail = createAsyncThunk('user/getUserDetail', async(params: {userId: string}) => {
  const response = await axiosInstance.get("/user/"+params.userId)
  return response as unknown as IUserData
})



const UserSlicer = createSlice({
  name: "user",
  initialState: {
    allUsers: null,
    userDetail: null
  } as IUserState,
  reducers: {
    setAllUserList(state, action) {
      state.allUsers = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
    })
    builder.addCase(getAllUsers.rejected, (state) => {
      state.allUsers = null;
    });

    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      state.userDetail = action.payload
    });
    builder.addCase(getUserDetail.rejected, (state) => {
      state.userDetail = null;
    });
  }
})

export const { setAllUserList } = UserSlicer.actions;
export default UserSlicer.reducer;