import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as applicationSettings from 'tns-core-modules/application-settings'

import leads from './modules/leads';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    leads,
  },
  plugins: [
    createPersistedState({
      key: 'salonsindustriels',
      storage: {
        getItem: key => applicationSettings.getString(key),
        setItem: (key, value) => applicationSettings.setString(key, value.toString()),
        removeItem: key => applicationSettings.remove(key),
      },

    }),
  ],
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;
