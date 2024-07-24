import { SortKey } from '../../types';
import { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface filterSliceState {
  searchValue: string;
  searchSort: SortKey;
  modal: boolean;
  isLoading: boolean;
}

const initialState: filterSliceState = {
  searchValue: '',
  searchSort: 'имени',
  modal: false,
  isLoading: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSearchSort(state, action: PayloadAction<SortKey>) {
      state.searchSort = action.payload;
    },
    setModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchValue, setSearchSort, setModal, setIsLoading } = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
