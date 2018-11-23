<template>
  <b-container>
    <b-row>
      <app-header></app-header>
    </b-row>
    <b-row>
      <app-carousel></app-carousel>
    </b-row>
    <b-row>
      <h1>{{ msg }}</h1>
    </b-row>
    <b-row>
      <app-footer></app-footer>
    </b-row>
  </b-container>
</template>

<script>

import Header from '@/components/Header/Header.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'Home',
  components : {
      'app-header': Header,
      'app-carousel' : Carousel,
      'app-footer' : Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App - Home'
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
