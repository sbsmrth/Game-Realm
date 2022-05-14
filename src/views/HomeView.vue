<template>
  <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center position-fixed">
    <div class="content text-center">
      <router-link :to="{name: 'games'}">
        <button>Ready for Adventure?</button>
      </router-link>
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});

</script>

<style scoped>
  .banner-image {
    background-image: url('../assets/bg-home.jpg');
    background-size: cover;
  }

  button {
  width: 150px;
  height: 69px;
  font-size: 23px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  position: relative;
  transition: all 0.5s;
  z-index: 1;
  }

  button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: white;
  z-index: -1;
  transition: all 0.5s;
  }

  button:hover::before {
  width: 100%;
  }

  button:hover {
  color: #141414;
  }

</style>