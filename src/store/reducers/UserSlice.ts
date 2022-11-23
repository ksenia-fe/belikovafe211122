import { jsonData } from "../../data/initData";
import { User } from "../../data/types";
import { createSlice } from "@reduxjs/toolkit";

const usersData = [];
for (let item in jsonData) {
  var user = jsonData[item];
  usersData.push(user);
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: usersData,
};

export const userSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
