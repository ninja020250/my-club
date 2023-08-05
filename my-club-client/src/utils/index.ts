import { TAction } from '@/types';
import { Dispatch } from 'redux';

export const mergeBaseAPIUrl = (url: string): string =>
  `http://localhost:8080/${url}`;

export const dispatchWithPromise = (action: TAction, dispatch: Dispatch) => {
  return new Promise((resolve, reject) =>
    dispatch({ ...action, resolve, reject }),
  );
};
