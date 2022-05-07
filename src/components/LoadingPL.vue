<template>
  <div class="loading">
  </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingPL'
})

</script>

<style>
  .loading {
    display: inline-block;
    width: 100px;
    height: 100px;
  }
  .loading:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fcf;
    border-color: #b5b2b1 transparent #b5b2b1 transparent;
    animation: loading 1.2s linear infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>