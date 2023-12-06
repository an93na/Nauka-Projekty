import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../SiteDesign/Broszura/counterSlice";

export default configureStore({
  reducer: {
    punkty: counterSlice,
  },
});
