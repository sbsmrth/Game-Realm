<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <img src="../../assets/controller.svg" width="24" height="24" alt="">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-5" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-lg-0">
          <li class="nav-item me-2">
              <router-link to="/">
                <a class="nav-link active" aria-current="page" href="#">home</a>
              </router-link>
          </li>
          <li class="nav-item dropdown me-2">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" aria-expanded="false">
              categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item text-center" href="#">shooter</a></li>
              <li><a class="dropdown-item text-center" href="#">horror</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown me-2">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" aria-expanded="false">
              platforms
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link :to="{name:'platform-pc'}">
                  <a class="dropdown-item text-center">pc</a>
                </router-link>
              </li>
              <li>
                <router-link :to="{name:'platform-browser'}">
                  <a class="dropdown-item text-center">browser</a>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item me-2">
            <router-link :to="{name:'ourworld'}">
              <a class="nav-link">our world</a>
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
});
</script>

<style scoped>

  .navbar .navbar-nav .nav-link:hover{
    color: rgb(28, 27, 26);
  }

  @media only screen and (min-width: 960px) {
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

  @media screen and (max-width: 991px) {
    .dropdown-toggle.show::after {
      border-top: 0;
      border-bottom: 0.3em solid;
    }
  }

  .btn-f {
    width: 140px;
    height: 45px;
    font-size: 23px;
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 700;
    position: relative;
    transition: all 0.5s;
    z-index: 1;
  }

  .btn-f::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: white;
    z-index: -1;
    transition: all 0.5s;
  }

  .btn-f:hover::before {
    width: 100%;
  }

  .btn-f:hover {
    color: black;
  }

  .btn-f:active:before {
    background: #b9b9b9;
  }
  
  a {
    text-decoration: none;
  }

  
  form > div {
    display: flex;
    background:#fff;
    padding: 9px 22px 9px 26px;
    border-radius: 30px;
    border: 2px solid rgb(225, 227, 226);
  }

  form input {
    border: none;
    height: 15px;
    background: transparent;
    font-weight: bold;
    padding-left: 24px;
    background-image: url('../../assets/search.png');
    background-size: 14px;
    cursor: pointer;
    background-repeat: no-repeat;
    width: 0px;
    transition: all 1s;
  }
  
  form input:focus {
    outline: none;
    width: 300px;
    cursor: text;
  }

</style>