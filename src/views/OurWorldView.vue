<template>
  
  <div class="container-fluid d-flex justify-content-center">
    <video src="@/assets/ourworld/pexels-mart-production-8888792.mp4" muted autoplay loop class="mt-3 mb-4 cont-info">
    </video>
  </div>

  <div class="container-fluid d-flex justify-content-center">
    <div class="cont-info d-flex">
      <div class="c1 d-flex justify-content-center align-items-center">
        <div>
          <h2 class="c1-c">Health</h2>
          <p class="c1-c mt-3">
            <q>
              <i>
                Video games foster the mindset that allows creativity to grow.
              </i>
            </q>
          </p>
        </div>
      </div>
      <div class="c2 mb-3 d-flex justify-content-center align-items-center">
        <div>
          <h2 class="c2-c">Happiness</h2>
          <p class="c2-c mt-3">
            <q>
              <i>
                I don’t need a weapon; my friends are my power!
              </i>
            </q>
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid d-flex justify-content-center">
    <div class="cont-info d-flex">
      
      <div class="c2 mb-3 d-flex justify-content-center align-items-center">
        <div>
          <h2 class="c2-c">Be whoever you want to be</h2>
          <p class="c2-c mt-3 p-large">
            <q>
              <i>
                I happen to believe that video games will be the largest sport and entertainment in the world. The reason for that is a video game can be every sport. 
                You can be anybody.
              </i>
            </q>
          </p>
        </div>
      </div>
      
      <div class="c1 d-flex justify-content-center align-items-center">
        <div>
          <h2 class="c1-c">Connect with yourself</h2>
          <p class="c1-c mt-3 p-large">
            <q>
              <i>
                A game is an opportunity to focus our energy, with relentless optimism, at something we’re good at (or getting better at) and enjoy. In other words, gameplay is the direct emotional opposite of depression.
              </i>
            </q>
          </p>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'OurWorldView',
}
</script>

<style scoped>

  .cont-info {
    width: 97vw;
  }

  .c1 {
    width: 50%;
    height: 400px;
    background-color: #212529;
  }

  .c1-c {
    color: #ffff;
  }

  .c2-c {
    color: #212529;
  }

  .c2 {
    width: 50%;
    height: 400px;
    background-color: blue;
    background-color: #F8F9FA;
  }


  .p-large {
    width: 550px;
  }

</style>
