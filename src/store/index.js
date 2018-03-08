import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import leads from './modules/leads';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    leads,
  },
  strict: debug,
});

Vue.prototype.$store = store;

module.exports = store;
