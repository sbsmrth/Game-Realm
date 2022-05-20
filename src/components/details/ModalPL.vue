<template>
  <button class="btn-look" data-bs-toggle="modal" data-bs-target="#Modal">
    See requeriments
  </button>
  <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">Requirements</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="mb-3" v-for="rq in Object.keys(requirements)" :key="rq">
            <b>{{rq.toUpperCase()}}: </b>{{requirements[rq]}}
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalPL',

  props: {
    requirements: {
      type: Object,
      required: true,
    },
  },
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
    font-family: "Basier circle", -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 1;
    padding: 1rem 1.6rem;
    text-align: center;
    text-decoration: none #0d172a solid;
    text-decoration-thickness: auto;
    transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .btn-look:hover {
    background-color: rgb(9, 9, 9);
    color: #fff;
  }
</style>