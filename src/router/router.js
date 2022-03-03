import Vue from 'vue'
import Router from 'vue-router'
import Summary from '../views/Summary.vue'
import Active from '../views/Active.vue'
import Recovered from '../views/Recovered.vue'
import Deaths from '../views/Deaths.vue'
import SummaryDetails from '../views/SummaryDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'summary',
      component: Summary
    },
    {
      path: '/summary/:id',
      name: 'summary-show',
      component: SummaryDetails,
      props: true
    },
    {
      path: '/active',
      name: 'active',
      component: Active
    },
    {
      path: '/recovered',
      name: 'recovered',
      component: Recovered
    },
    {
      path: '/deaths',
      name: 'deaths',
      component: Deaths
    }
  ]
})
