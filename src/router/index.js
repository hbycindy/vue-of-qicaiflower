import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Shopping from '@/components/Shopping'
import Mine from '@/components/Mine'
import Help from '@/components/Help'
import Headerone from '@/components/Headerone'
import Headertwo from '@/components/Headertwo'
import pinkrose from '@/components/pinkrose'
import nineteen from '@/components/19zhi'
import baihe from '@/components/baihe'
import rose from '@/components/rose'
import single from '@/components/single'
import register from '@/components/register'
import afterlog from '@/components/afterlog'
import shoppingcar from '@/components/shoppingcar'
import classes from '@/components/classes'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:"/home"},
    {
      path: '/home',
      name: 'Home',
      component: Home,
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
    {
      path: '/pinkrose',
      name: 'Pink',
      component: pinkrose
    },
    {
      path: '/nineteen',
      name: 'Nineteen',
      component: nineteen
    },
    {
      path: '/baihe',
      name: 'Baihe',
      component: baihe
    },
    {
      path: '/rose',
      name: 'Rose',
      component: rose
    },
    {
      path: '/single/:id',
      name: 'single',
      component: single
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/afterlog',
      name: 'afterlog',
      component: afterlog
    },
    {
      path: '/shoppingcar/:id',
      name: 'shoppingcar',
      component: shoppingcar
    },
    {
      path: '/classes/:id',
      name: 'classes',
      component: classes
    }
    
  ]
})
