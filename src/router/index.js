import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Notice from '@/components/Notice'
import NoticeDetail from '@/components/noticeViewEdit/NoticeDetail'
import NoticeEdit from '@/components/noticeViewEdit/NoticeEdit'
import Projects from '@/components/Projects'
import QNA from '@/components/QNA'
import Gallery from '@/components/Gallery'

import Vuetify from 'vuetify'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes:[
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
      path: '/notice/:id',
      name: 'Notice',
      props: true,
      component: NoticeDetail
    },
    {
      path: '/notice/:id/edit',
      name: 'Notice_Edit',
      component: NoticeEdit
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
    },
  ]
})
