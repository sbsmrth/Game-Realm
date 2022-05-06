<template>
  <GameListPL :games="games"/> 
</template>

<script>
import GameListPL from "@/components/game/GameListPL.vue";
import { defineComponent } from "vue";

export default defineComponent({

  beforeMount() {
    this.getGames(this.$route.params.pt);
  },

  name: "PlatformView",

  components: {
    GameListPL,
  },

  data() {
    return {
      games: [],
    }
  },

  methods: {
    async getGames(pt) {
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
    },
  },

  watch: {
    '$route.params.pt': function(pt) {
      this.getGames(pt)
    }
  },
});
</script>
