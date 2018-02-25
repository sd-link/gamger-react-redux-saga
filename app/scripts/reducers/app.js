import immutable from 'immutability-helper';
import { REHYDRATE } from 'redux-persist/lib/constants';
import { createReducer } from 'modules/helpers';

import { ActionTypes } from 'constants/index';

export const appState = {
  alerts: [],
  menus: {
    primary:[
      ['discover','discover','primary'],
      ['create','create','primary'],
      ['produce','produce','primary'],
      ['explore','explore','primary'],
      ['shop','shop','primary']
    ],
    secondary:[
      ['discover','home','primary'],
      ['about','about','secondary'],
      ['partner','partner','secondary'],
      ['support','support','secondary'],
      ['shop','shop','secondary']
    ],
    display: 'primary',
  },
  page: 'home',
};

export default {
  app: createReducer(appState, {
    [REHYDRATE](state) {
      return immutable(state, {
        alerts: { $set: [] },
      });
    },
    [ActionTypes.HIDE_ALERT](state, { payload: { id } }) {
      const alerts = state.alerts.filter(d => d.id !== id);

      return immutable(state, {
        alerts: { $set: alerts },
      });
    },
    [ActionTypes.SHOW_ALERT](state, { payload }) {
      return immutable(state, {
        alerts: { $push: [payload] },
      });
    },
    [ActionTypes.PAGE_REDIRECT_SUCCESS](state, {payload}) {
      return immutable(state, {
        page: { $set: payload.page },
      });
    },

  }),
};
