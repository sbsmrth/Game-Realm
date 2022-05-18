<template>
  <CarouselPL v-if="game.screenshots != null" :images="game.screenshots"/>
  <div class="load-c container-fluid d-flex justify-content-center align-items-center" v-else>
    <LoadingPL></LoadingPL>
  </div>
  <div class="container-fluid d-flex justify-content-center mt-4"> 
    <div class="row cont">
      <div class="col-12 cont-description d-flex justify-content-center 
      align-items-center rounded-3 mb-4">
        <div class="cont-info mb-3">
          <h2 class="mt-3">Description</h2>
          <p class="mt-3">{{game.description}}</p>
          <ModalPL v-if="game.minimum_system_requirements" :requeriments="game.minimum_system_requirements"/>
          <button v-else type="button" class="btn-db" disabled>See requeriments</button>
        </div>
      </div>
      <div class="col-4 cont-main d-flex justify-content-center 
      align-items-center mb-2 border border-white border-5"
      v-for="e of filterRequeriments" :key="e" >
        <div class="cont-info">
          <h4 class="mt-3">
            <b>{{capitalize(e)}}</b>
          </h4>
          <p class="mt-2"><i>{{game[e]}}</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CarouselPL from './CarouselPL.vue'
import ModalPL from './ModalPL.vue'
import LoadingPL from '@/components/LoadingPL.vue'
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
    LoadingPL,
  },

  computed: {
    filterRequeriments() {
      return Object.keys(this.game).filter(e => 
      e === 'genre' || e ==='platform' || e === 'developer' 
      || e === 'publisher' || e === 'release_date' || e === 'status' )
    },
  },

  methods: {
    capitalize(txt) {
      return (txt.charAt(0).toUpperCase() + txt.slice(1)).replace('_', ' ')
    },
  },

};
</script>

<style scoped>

  .contenedor {
    width: 96vw;
  }

  .load-c {
    height: 100vh;
  }

  .btn-db {
    background-color: #fff;
    border: 0 solid #e2e8f0;
    border-radius: 1.5rem;
    box-sizing: border-box;
    color: #cbd0d7;
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

  .cont {
    width: 94vw;
  }

  .cont-description {
    background-color: #F8F9FA;
    color: #121314;
  }

  .cont-info {
    width: 92%;
  }

  .cont-main {
    background-color: #121314;
    color: #fff;
  }

</style>
