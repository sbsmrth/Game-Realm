<template>
  <div class="d-flex justify-content-center mt-2">
    <CarouselPL :images="game.screenshots"/>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 mt-2">
        <p class="fs-2">{{game.title}}</p>
      </div>
      <div v-for="e in Object.keys(game)" :key="e">
        <div class="col-12 mb-3" v-if="e != 'title' && e!='minimum_system_requirements'
        && e != 'screenshots' && e!='id' && e!='thumbnail'">
          <b>{{e.replace('_', ' ')}}: </b> {{game[e]}}
        </div>
      </div>
      <div class="col-12 mb-4">
        <b class="me-2">Wanna play?</b>
        <ModalPL :requeriments="game.minimum_system_requirements"/>
      </div>
    </div>
  </div>
</template>

<script>

import CarouselPL from './CarouselPL.vue'
import ModalPL from './ModalPL.vue'

export default {
  name: "GameDetailsPL",

  props: {
    game: {
      type: Object,
      required: true,
    },
  },

  components: {
    CarouselPL,
    ModalPL,
  },
};
</script>

<style>

.btn-look {
  background-color: #fff;
  border: 0 solid #e2e8f0;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: #0d172a;
  cursor: pointer;
  display: inline-block;
  font-family: "Basier circle", -apple-system, system-ui, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1;
  padding: 1rem 1.6rem;
  text-align: center;
  text-decoration: none #0d172a solid;
  text-decoration-thickness: auto;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.btn-look:hover {
  background-color: rgb(9, 9, 9);
  color: #fff;
}
</style>