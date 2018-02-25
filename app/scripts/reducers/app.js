import immutable from 'immutability-helper';
import { REHYDRATE } from 'redux-persist/lib/constants';
import { createReducer } from 'modules/helpers';

import { ActionTypes } from 'constants/index';

export const appState = {
  alerts: [],
  menus: {
    primary:[
      ['Home','Discover.','primary'],
      ['Create','Create.','primary'],
      ['Produce','Produce.','primary'],
      ['Explore','Explore.','primary'],
      ['Shop','Shop.','primary']
    ],
    secondary:[
      ['Home','Home.','primary'],
      ['About','About.','secondary'],
      ['Partner','Partner.','secondary'],
      ['Support','Support.','secondary'],
      ['Shop','Shop.','secondary']
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
        menus: { 
          display: {$set: payload.menu_display}
        }
      });
    },

  }),
};
