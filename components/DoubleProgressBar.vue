<template>
  <div class="double-progress-bar">
    <div
      class="double-progress-bar__basis"
      :style="`width: ${basisWidth}px`"
    ></div>
    <div
      class="double-progress-bar__current"
      :style="`width: ${dProgressBarCurrentWidth}px`"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['currentValue'],

  data() {
    return {
      basisWidth: 160,
    };
  },

  computed: {
    dProgressBarCurrentWidth() {
      return this.currentValue * this.basisWidth;
    },
  },
};
</script>

<style scoped>
.double-progress-bar__basis {
  background: #f4f4f4;
  height: 20px;
}

.double-progress-bar__current {
  background: #613a93;
  height: 20px;
}
</style>
