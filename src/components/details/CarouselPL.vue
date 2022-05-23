<template>  
  <div id="games" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner crl">
      <div v-for="(img, i) in images" :key="i" class="carousel-item" :class="{active:i===0}">
        <img :src="img.image" class="d-block w-100" alt="">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#games" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#games" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'CarouselPL',

  props: {
    images: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
  .crl {
    height: 92vh;
  }

  .carousel {
    width: 100%;
  }
</style>
