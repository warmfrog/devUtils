import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/home',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: require('@/components/Index').default,
      children: [
        {
          path: '/',
          name: 'index',
          component: resolve => require(['@/components/LandingPage.vue'], resolve)
        },
        {
          path: '/stringTool',
          name: 'string-tool',
          component: resolve => require(['@/components/StringTool.vue'], resolve)
        },
        {
          path: '/timeTool',
          name: 'time-tool',
          component: resolve => require(['@/components/TimeTool'], resolve)
        },
        {
          path: '*',
          redirect: '/'
        }
      ]
    }
  ]
})
