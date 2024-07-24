import { User } from '../../types';
import { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UsersState {
  users: User[];
  selectedUser: User | null;
  originalUsers: User[];
}

const initialState: UsersState = {
  users: [],
  selectedUser: null,
  originalUsers: [],
};

const usersInfoSlice = createSlice({
  name: 'usersInfo',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    setSelectedUser(state, action: PayloadAction<User | null>) {
      state.selectedUser = action.payload;
    },
    setOriginalUsers(state, action: PayloadAction<User[]>) {
      state.originalUsers = action.payload;
    },
  },
});

export const { setUsers, setSelectedUser, setOriginalUsers } = usersInfoSlice.actions;
export const selectUsers = (state: RootState) => state.usersInfo;

export default usersInfoSlice.reducer;
