<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav">
    <div class="container-fluid">
      <img src="@/assets/home/controller.svg" class="ms-2 me-5" width="25" height="25" alt="">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-lg-0">
          <li class="nav-item me-2">
              <router-link to="/">
                <a class="nav-link active" aria-current="page">Home</a>
              </router-link>
          </li>
          <li class="nav-item dropdown me-2">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
              <li v-for="categorie of categories" :key="categorie">
                <router-link :to="{name:'categories', params:{ct:categorie}}">
                  <a class="dropdown-item text-center">{{capitalizeCat(categorie)}}</a>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown me-2">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Platforms
            </a>
            <ul class="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
              <li>
                <router-link :to="{name:'platform', params:{pt:'pc'}}">
                  <a class="dropdown-item text-center">Pc</a>
                </router-link>
              </li>
              <li>
                <router-link :to="{name:'platform', params:{pt:'browser'}}">
                  <a class="dropdown-item text-center">Browser</a>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item me-2">
            <router-link :to="{name:'ourworld'}">
              <a class="nav-link">Our World</a>
            </router-link>
          </li>
        </ul>
        <form autocomplete="off">
          <div>
            <input type="text" name="q" placeholder="Search">
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "NavBarPL",

  data: () => ({
    categories: ['shooter', 'mmorpg', 'survival', 'strategy']
  }),

  methods: {
    capitalizeCat(txt) {
      return txt.charAt(0).toUpperCase() + txt.slice(1)
    }
  }
});
</script>

<style scoped>
  
  .navbar .navbar-nav .nav-link:hover{
    color: rgb(28, 27, 26);
  }

  .dropdown-menu {
    border: none;
  }

  .dropdown-menu {
    border: none;
  }

  @media only screen and (min-width: 960px) {
    .navbar {
      height: 8vh;
    }

    .dropdown:hover .dropdown-menu {
      display: block;
      margin-top: 0;
    }

    .dropdown .dropdown-menu {
      display: none;
    }
    .dropdown:hover .dropdown-toggle::after {
      border-bottom: 0.3em solid;
      border-top: 0;
    }
  }

  @media screen and (max-width: 992px) {
    .dropdown-toggle.show::after {
      border-top: 0;
      border-bottom: 0.3em solid;
    }
  }
  
  .navbar-toggler:focus,
  .navbar-toggler:active,
  .navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
  }


  a {
    text-decoration: none;
  }

  form > div {
    display: flex;
    background:#fff;
    padding: 9px 22px 9px 26px;
    border-radius: 30px;
    border: 2px solid rgb(242, 243, 242);
  }

  form input {
    border: none;
    height: 1rem;
    background: transparent;
    font-weight: bold;
    padding-left: 1.7rem;
    background-image: url('@/assets/home/search.png');
    background-size: 14px;
    cursor: pointer;
    background-repeat: no-repeat;
    width: 12rem;
    outline: none; 
  }
  
  form input:hover {
    cursor: text;
  }
</style>
