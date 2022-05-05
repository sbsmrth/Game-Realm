<template>
  <GameListPL :games="games" />
</template>

<script>
import { defineComponent } from "vue";
import GameListPL from "@/components/game/GameListPL.vue";

export default defineComponent({
  name: "CategoriesView",

  beforeMount() {
    this.getGames();
  },

  components: {
    GameListPL,
  },

  data: () => ({
    games: [],
  }),

  methods: {
    async getGames() {
      const rslt = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.$route.params.id}`,
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
});
</script>
