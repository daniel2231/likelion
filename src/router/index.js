import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Notice from '@/components/Notice'
import Projects from '@/components/Projects'
import QNA from '@/components/QNA'
import Gallery from '@/components/Gallery'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/QNA',
      name: 'QNA',
      component: QNA
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }
  ]
})
