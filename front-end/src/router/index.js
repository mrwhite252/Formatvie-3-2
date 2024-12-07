import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SinglePost from '../components/ViewSinglePost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/posts/:postId',
    name:'SinglePost',
    component: SinglePost,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
