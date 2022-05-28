import { configureStore } from "@reduxjs/toolkit";
import counterStore from "./stores/counterStore";

export default configureStore({
  reducer: {
    counter: counterStore,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
