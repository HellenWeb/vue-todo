import { createRouter, createWebHashHistory } from 'vue-router'
import MyHome from '@/components/views/Home'
import MyAbout from '@/components/views/About'
import MyMain from '@/components/views/Main'

const routes = [
  { path: '/', name: 'Home', component: MyHome },
  { path: '/about', name: 'About', component: MyAbout },
  { path: '/main', name: 'Main', component: MyMain }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
