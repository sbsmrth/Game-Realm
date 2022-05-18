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
    width: 66px;
    height: 66px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fcf;
    border-color: #cbc9c8 transparent #cbc9c8 transparent;
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