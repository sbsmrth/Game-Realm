<template>
  <div class="banner-image d-flex justify-content-center align-items-center">
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
    background-image: url('@/assets/home/bg-home.jpg');
    background-size: cover;
    background-position-y: 65%;
    height: 92vh;
    background-position-x: 11%;
  }

  @media (min-width: 1200px) {
    .banner-image {
      background-image: url('@/assets/home/bg-home-l.jpg');
    }
  }

  button {
    width: 160px;
    height: 69px;
    font-size: 23px;
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    color: white;
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
