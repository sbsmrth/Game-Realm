<template>
  <div class="card">
  <img :src="source" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title fst-italic">{{title}}</h5>
    <p class="card-text">{{description}}</p>
    <router-link :to="{name: 'details', params: {id, name:textLower}}">
      <button class="btn-look">See</button>
    </router-link>
  </div>
</div>
</template>

<script>

export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    source: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: Number
    }
  }, 

  computed: {
    textLower() {
      return this.title.replace(' ', '-').toLowerCase();
    }
  }
}

</script>

<style>
  .btn-look {
    background-color: #fff;
    border: 0 solid #e2e8f0;
    border-radius: 1.5rem;
    box-sizing: border-box;
    color: #0d172a;
    cursor: pointer;
    display: inline-block;
    font-family: "Basier circle",-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    text-decoration: none #0d172a solid;
    text-decoration-thickness: auto;
    transition: all .1s cubic-bezier(.4, 0, .2, 1);
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .btn-look:hover {
    background-color: #121314;
    color: #fff;
  }

  @media (min-width: 768px) {
    .btn-look {
      font-size: 1.125rem;
      padding: 1rem 2rem;
    }
  }
</style>
