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
  props: {
    currentValue: {
      type: Number,
    },
    maxValue: {
      type: Number,
    },
  },
  computed: {
    progressBarFillingWidth() {
      return ((this.currentValue / this.maxValue) * 100).toFixed(2);
    },
  },
};
</script>

<!--TODO подправить по длине последнего бара-->

<style scoped>
.progress-bar {
  background: #f4f4f4;
  width: 100%;
  height: 40px;
  position: relative;
}

.progress-bar__filling {
  background: #613a93;
  height: 100%;
}

@media screen and (max-width: 1280px) {
  .progress-bar {
    height: 36px;
  }
}

@media screen and (max-width: 1024px) {
  .progress-bar {
    height: 28px;
  }
}

@media screen and (max-width: 768px) {
  /* .progress-bar {
    width: 196px;
  } */
}
</style>
