<template>
  <div class="container my-3">
    <div class="row">
      <div class="col-4 mb-3" v-for="game in games" :key="game">
        <game-card :title="game.title" :description="game.short_description" :source="
        game.thumbnail" :id="game.id"/>
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