<template>
  <video class="mb-2" src="@/assets/ourworld/ourworld_bg.mp4" muted autoplay loop>
  </video>
  <div class="container-fluid d-flex justify-content-center aling-items-center mb-3">
    <div class="cont-info">
      <div class="row">
        <div v-for="q in quotes" :key="q.id" class="col-12 col-md-6 d-flex justify-content-center 
        align-items-center border border-white border-6 col-main dark" :class="{white: q.id % 2===0}">
          <div class="ms-4 me-4">
            <h2>{{q.title}}</h2>
            <p class="mt-3">
              <q>
                <i>
                  {{q.description}}
                </i>
              </q>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { quotes } from '../../public/quotes'
export default {
  name: 'OurWorldView',

  data: () => ({
    quotes,
  })
}
</script>

<style scoped>
  video {
    width: 100%;
  }

  .cont-info {
    width: 96vw;
  }

  .col-main {
    height: 400px;
  }

  .dark {
    color: #ffff;
    background-color: #121314;
  }

  .white {
    color: #121314;
    background-color: #F8F9FA;
  }

</style>
