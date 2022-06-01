<template>
  <LoadingPL v-if="load" />
  <GameListPL v-else :games="filterGames" />
</template>

<script>
import { defineComponent } from "vue";
import GameListPL from "@/components/game/GameListPL.vue";
import LoadingPL from "@/components/LoadingPL.vue";

export default defineComponent({
  name: "GamesView",

  data: () => ({
    games: [],
    load: true,
  }),

  components: {
    GameListPL,
    LoadingPL,
  },

  beforeMount() {
    this.getGames();
  },

  computed: {
    filterGames() {
      return this.games.slice(0, 183);
    },
  },

  methods: {
    async getGames() {
      try {
        const rslt = await fetch(
          "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity",
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
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>
