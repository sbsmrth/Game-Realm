<template>
  <GameDetailsPL :game='game'/>
</template>

<script>

import GameDetailsPL from '@/components/details/GameDetailsPL.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameDetailsView',

  components: {
    GameDetailsPL,
  },

  data: () => ({
    game: {},
  }),

  beforeMount() {
    this.getGame();
  },

  methods: {
    
    async getGame() {
      const rslt = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.$route.params.id}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key':
              '1e2fe7a354mshd9063d3412e3377p107dfcjsn3aaec969da87',
          },
        }
      );
      const data = await rslt.json();
      this.game = data;
    }
  }
});
</script>

<style scoped>
  .load-c {
    position: absolute;
    top: 47%;
    left: 47%;
  }
</style>
