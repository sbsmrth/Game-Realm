<template>
  <div class="container my-3">
    <div class="row">
      <div class="col-4 mb-3" v-for="i in 87" :key="i">
        <game-card :title="games[i].title" :description="games[i].short_description" :source="
        games[i].thumbnail" :id="games[i].id"/>
      </div>
    </div>
  </div>
</template>

<script>

import GameCard from './GameCardPL.vue'

export default {
  name: 'GameListPL',

  components: {
    GameCard,
  },

  props: {
    games: {
      required: true,
      type: Array
    }
  },
}
</script>

<style>

</style>