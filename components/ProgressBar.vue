<template>
  <div class="progress-bar">
    <div
      class="progress-bar__filling"
      :style="`width: ${progressBarFillingWidth}%`"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['currentValue', 'maxValue'],
  computed: {
    progressBarFillingWidth() {
      return ((this.currentValue / this.maxValue) * 100).toFixed(2);
    },
  },
};
</script>

<style scoped>
.progress-bar {
  background: #f4f4f4;
  width: 260px;
  height: 40px;
  position: relative;
}

.progress-bar__filling {
  background: #613a93;
  height: 100%;
}
</style>
