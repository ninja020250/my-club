import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AuthenticationReducer from './features/AuthenticationSlice';

export const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
