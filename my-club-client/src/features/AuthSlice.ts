/* eslint-disable @typescript-eslint/no-explicit-any */
import { ROUTE_PATHS } from '@/config/route.config';
import AuthService from '@/services/AuthService';
import { RootState } from '@/store';
import CookieService, { COOKIE_KEYS } from '@/utils/cookie';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  profile?: any;
  loading: boolean;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  loading: false,
  profile: null,
  isLoggedIn: false,
};

export const checkToken = createAsyncThunk(
  'auth/checkAuthentication',
  async (_, thunkAPI) => {
    const access_token = CookieService.get(COOKIE_KEYS.ACCESS_TOKEN);
    if (access_token) {
      const jwtPayload = AuthService.parseJwt(access_token);
      thunkAPI.dispatch(loginSuccess(jwtPayload));
    } else {
      thunkAPI.dispatch(logoutSuccess());
    }
  },
);

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (payload: { username: string; password: string }, thunkAPI) => {
    const response = await AuthService.login(
      payload.username,
      payload.password,
    );
    if (response) {
      CookieService.set(COOKIE_KEYS.ACCESS_TOKEN, response.access_token);
      const jwtPayload = AuthService.parseJwt(response.access_token);
      thunkAPI.dispatch(loginSuccess(jwtPayload));
    }
    // The value we return becomes the `fulfilled` action payload
    return response;
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  CookieService.removeAll(undefined, '/');
  thunkAPI.dispatch(logoutSuccess());
});

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.profile += action.payload;
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.profile = null;
      state.isLoggedIn = false;
      window.location.href = ROUTE_PATHS.LOGIN;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export const selectAuthProfile = (state: RootState) => state.auth.profile;
export const selectAuthStatus = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
