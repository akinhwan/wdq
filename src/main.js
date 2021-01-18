import Vue from 'vue'
import VueRouter from 'vue-router'
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
import App from './App.vue'

import '@/css/style.scss';

Vue.use(VueRouter)
import Home from './pages/Home.vue'
import Testimonials from './pages/Testimonials.vue'
import Blog from './pages/Blog.vue'
import BlogPost from './pages/BlogPost.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Help from './pages/Help.vue'
import PageNotFound from './pages/PageNotFound.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/testimonials',
    component: Testimonials
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/blog-post',
    component: BlogPost
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/help',
    component: Help
  },               
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to) {
    return new Promise(() => {
      if (to.hash) {
        window.scroll({ top: 0 })
      } else {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({ top: 0 })
        document.querySelector('html').style.scrollBehavior = ''
      }
    })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
