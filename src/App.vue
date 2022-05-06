<template>
  <NavBarPL/>
  <router-view />
</template>

<script>
import './styles/styles.css'
import { defineComponent } from 'vue'
import NavBarPL from '@/components/ui/NavbarPL.vue'

export default defineComponent({
  components: {
    NavBarPL,
  }
})
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #0f0f0f;
  border-radius: 12px;
  height: 80px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
