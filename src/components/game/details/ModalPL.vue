<template>
  <button class="btn-look" data-bs-toggle="modal" data-bs-target="#Modal">
    See requeriments
  </button>
  <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">Requeriments</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="mb-3" v-for="rq in Object.keys(requeriments)" :key="rq">
            <b>{{rq.toUpperCase()}}: </b>{{requeriments[rq]}}
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalPL',

  props: {
    requeriments: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>

</style>