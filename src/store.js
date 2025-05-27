// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './venueSlice';
export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
  },
});
