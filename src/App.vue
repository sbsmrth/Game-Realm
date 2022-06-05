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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::-webkit-scrollbar {
  width: .6vw;
}

::-webkit-scrollbar-thumb {
  background-color: #121314;
  border-radius: 14px;
  height: 80px;
}

nav a {
  font-weight: bold;
}
</style>
