<template>
  <video class="mb-3" src="@/assets/ourworld/ourworld_bg.mp4" muted autoplay loop>
  </video>
  <div class="container-fluid d-flex justify-content-center">
    <div class="cont-info d-flex">
      <div class="c1 d-flex justify-content-center align-items-center me-4 bg-dark">
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
          <h2 class="c2-c text-dark">Happiness</h2>
          <p class="c2-c mt-3 text-dark">
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
      <div class="c2 mb-3 d-flex justify-content-center align-items-center me-4">
        <div>
          <h2 class="c2-c text-dark">Be whoever you want to be</h2>
          <p class="c2-c text-dark mt-3 p-large">
            <q>
              <i>
                I happen to believe that video games will be the largest sport and entertainment in the world. The reason for that is a video game can be every sport. 
                You can be anybody.
              </i>
            </q>
          </p>
        </div>
      </div>
      <div class="c1 d-flex justify-content-center align-items-center bg-dark">
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
  video {
    width: 100%;
  }

  .cont-info {
    width: 96vw;
  }

  .c1 {
    width: 50%;
    height: 400px;
  }

  .c1-c {
    color: #ffff;
  }

  .c2 {
    width: 50%;
    height: 400px;
    background-color: #F8F9FA;
  }

  .p-large {
    width: 550px;
  }
</style>
