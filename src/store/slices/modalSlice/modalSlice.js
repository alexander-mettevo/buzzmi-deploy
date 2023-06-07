import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalName: '',
    modalProps: {},
    modalType: '',
    parentComponent: {
      name: '',
      props: {},
    },
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalName = action.payload.modalName;
      state.modalProps = {...action.payload.modalProps};
      state.modalType = action.payload.modalType;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalName = '';
      state.modalProps = {};
      state.modalType = '';
    },
    setParentComponent: (state, action) => {
      console.log('setParentComponent', action.payload);

      state.parentComponent.name = action.payload.name;
      state.parentComponent.props = {...action.payload.props};
    },
    clearParentComponent: (state) => {
      state.parentComponent.name = '';
      state.parentComponent.props = {};
    }
  },
});

export default modalSlice.reducer;
export const {
  openModal,
  closeModal,
  setParentComponent,
  clearParentComponent} = modalSlice.actions;