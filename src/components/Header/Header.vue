<template>
    <div id="#menu">
        <b-nav>
            <b-nav-item active>Home</b-nav-item>
            <b-nav-item :to="{ name: 'contato' }">Contato</b-nav-item>
            <b-nav-item><b-link :to="'contato'">Home-vv</b-link></b-nav-item>   
            <b-nav-item-dropdown id="nav7_ddown" text="Dropdown" extra-toggle-classes="nav-link-custom" right>
                <b-dropdown-item>one</b-dropdown-item>
                <b-dropdown-item>two</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>three</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
    </div>
</template>
<script>

import contato from '@/components/Contato/Contato.vue'
import auth from "@/auth/auth.js";
import net from "@/util/net.js";

export default {
  name: 'Header',
  components: {
    'contato': contato
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

  },
  beforeCreate() {
    if(!auth.authenticated){
         this.$router.push('login')
    }
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