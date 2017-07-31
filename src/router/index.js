import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Shopping from '@/components/Shopping'
import Mine from '@/components/Mine'
import Help from '@/components/Help'
import Headerone from '@/components/Headerone'
import Headertwo from '@/components/Headertwo'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },

  ]
})
