import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Leads from '../pages/Leads';
import Lead from '../pages/Lead';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/leads',
      component: Leads,
      meta: {
        title: 'Leads',
      },
    },
    {
      path: '/lead/:id',
      component: Lead,
    },
    {path: '*', redirect: '/leads'},
  ],
});

router.replace('/leads');

module.exports = router;
