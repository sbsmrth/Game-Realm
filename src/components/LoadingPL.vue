<template>
  <div class="container-fluid c-loading d-flex justify-content-center align-items-center">
    <div class="loading">
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingPL'
})

</script>

<style>
  
  .c-loading {
    height: 84vh;
  }

  .loading {
   width: 56px;
   height: 56px;
   display: grid;
   animation: loading-plncf9 4s infinite;
  }

  .loading::before,
  .loading::after {
    content: "";
    grid-area: 1/1;
    border: 9px solid;
    border-radius: 50%;
    border-color: #1b1b1d #1b1b1d #0000 #0000;
    mix-blend-mode: darken;
    animation: loading-plncf9 1s infinite linear;
  }

  .loading::after {
    border-color: #0000 #0000 #dbdcef #dbdcef;
    animation-direction: reverse;
  }

  @keyframes loading-plncf9 {
    100% {
        transform: rotate(1turn);
    }
  }
</style>
