import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCordova from 'vue-cordova'

// Regular Webpack:
import * as VueGoogleMaps from 'vue2-google-maps'

import MainMenu from '@/pages/MainMenu'
import NormalRoute from '@/pages/normalroute/NormalRoute'
import MoreRouteInfo from '@/pages/normalroute/MoreRouteInfo'
import SummaryOfRoute from '@/pages/normalroute/SummaryOfRoute'
import NormalRouteMap from '@/pages/normalroute/NormalRouteMap'
import TreasureHunt from '@/pages/treasurehunt/TreasureHunt'
import MoreTreasureHuntInfo from '@/pages/treasurehunt/MoreTreasureHuntInfo'
import Achievements from '@/pages/Achievements'
import Settings from '@/pages/settings/Settings'
import Profile from '@/pages/settings/Profile'
import Language from '@/pages/settings/Language'
import TermsAndConditions from '@/pages/settings/TermsAndConditions'


Vue.use(VueRouter);
Vue.use(VueCordova);


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCVuGnZGu5iugYyK9QPFYoHG8Na_scWD7A',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
});



const routes = [
  {
    path: "/",
    redirect: {
      name: "main"
    }
  },
  {name: 'main', path: '/', component: MainMenu},

  {name: 'treasurehunt', path: '/treasurehunt', component: TreasureHunt},
  {name: 'moretreasurehuntinfo', path: '/moretreasurehuntinfo', component: MoreTreasureHuntInfo},

  {name: 'normalroute', path: '/normalroute', component: NormalRoute},
  {name: 'morerouteinfo', path: '/morerouteinfo', component: MoreRouteInfo},
  {name: 'normalroutemap', path: '/normalroutemap', component: NormalRouteMap},
  {name: 'summaryofroute', path: '/summaryofroute', component: SummaryOfRoute},

  {name: 'achievements', path: '/achievements', component: Achievements},

  {name: 'settings', path: '/settings', component: Settings},
  {name: 'profile', path: '/profile', component: Profile},
  {name: 'language', path: '/language', component: Language},
  {name: 'termsAndConditions', path: '/termsAndConditions', component: TermsAndConditions},
];

const router = new VueRouter({
  // mode: 'history', this doesnt work on android so now we have ugly urls
  base: __dirname,
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
    `
}).$mount('#app');
