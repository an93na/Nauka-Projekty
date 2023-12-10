import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../SiteDesign/Broszura/counterSlice";
import bookReducer from '../SiteDesign/Books/counterSliceBook'

export default configureStore({
  reducer: {
    punkty: counterSlice,
    book: bookReducer
  },
});
