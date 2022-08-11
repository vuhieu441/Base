import { RootState } from './../../app/store';
import { createSlice } from '@reduxjs/toolkit';

export interface Modal {
  show: Boolean;
  component: any;
  functionHandle: any;
  title: String;
  btnName: String;
  btnNameTwo: String;
  dataState: any;
}

const initialState: Modal = {
  show: false,
  component: null,
  functionHandle: null,
  title: '',
  btnName: '',
  btnNameTwo: '',
  dataState: null,
};

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },

    showModal(state) {
      state.show = true;
    },

    hideModal(state) {
      state.show = false;
      state.component = null;
      state.functionHandle = null;
      state.title = '';
      state.btnName = '';
    },

    changeModalContent(state, action) {
      state.component = action.payload;
    },

    changeModalContentAndHandle(state, action) {
      state.component = action.payload.component;
      state.functionHandle = action.payload.functionHandle;
      state.title = action.payload.title;
      state.btnName = action.payload.btnName;
      state.btnNameTwo = action.payload.btnNameTwo;
      state.dataState = action.payload.dataState;
    },

    changeDataState(state, action) {
      state.dataState = action.payload;
    },
  },
});

//action
export const modalAction = ModalSlice.actions;
//Selector
export const selectModalShow = (state: RootState) => state.modal.show;
export const selectModalComponent = (state: RootState) => state.modal.component;
export const selectModalTitle = (state: RootState) => state.modal.title;
export const selectModalBtnName = (state: RootState) => state.modal.btnName;
export const selectModalFunctionHandle = (state: RootState) => state.modal.functionHandle;
export const selectModalBtnNameTwo = (state: RootState) => state.modal.btnNameTwo;
export const selectModalDataState = (state: RootState) => state.modal.dataState;

export default ModalSlice.reducer;
