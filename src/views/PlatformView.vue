<template>
  <div v-if="load" class="load-c">
    <LoadingPL/>
  </div>
  <GameListPL v-else :games="games"/> 
</template>

<script>
import { defineComponent } from 'vue';
import GameListPL from '@/components/game/GameListPL.vue';
import LoadingPL from '@/components/LoadingPL.vue'

export default defineComponent({

  beforeMount() {
    this.getGames(this.$route.params.pt);
  },

  name: "PlatformView",

  components: {
    GameListPL,
    LoadingPL,
  },

  data() {
    return {
      games: [],
      load: true,
    }
  },

  methods: {
    async getGames(pt) {
      if(pt != null) {
        const rslt = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${pt}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
              "X-RapidAPI-Key":
                "1e2fe7a354mshd9063d3412e3377p107dfcjsn3aaec969da87",
            },
          }
        );
        const data = await rslt.json();
        this.games = data;
        this.load = false;
      }
    },
  },

  watch: {
    '$route.params.pt': function(pt) {
      this.getGames(pt)
    }
  },
});
</script>
