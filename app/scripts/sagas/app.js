/**
 * @module Sagas/App
 * @desc App
 */

import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'constants/index';

 
/**
 * redirect
 */
export function* redirect() {
  try {
    yield put({
      type: ActionTypes.PAGE_REDIRECT_SUCCESS,
    });
  }
  catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.PAGE_REDIRECT_FAILURE,
      payload: err,
    });
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.PAGE_REDIRECT_REQUEST, redirect),
  ]);
}
