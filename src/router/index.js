import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Header from '@/components/Header/Header.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import Footer from '@/components/Footer/Footer.vue'
import Contato from '@/components/Contato/Contato.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/Contato',
      name: 'contato',
      component: Contato
    }
  ]
})
