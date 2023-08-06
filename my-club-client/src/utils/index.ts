import { TAction } from '@/types';
import { Dispatch } from 'redux';
import appConfig from '@/config/app.config';

export const mergeBaseAPIUrl = (url: string): string =>
  `${appConfig.baseURL}/${url}`;

export const dispatchWithPromise = (action: TAction, dispatch: Dispatch) => {
  return new Promise((resolve, reject) =>
    dispatch({ ...action, resolve, reject }),
  );
};
