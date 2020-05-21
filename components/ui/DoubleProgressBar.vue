<template>
  <div class="double-progress-bar">
    <div class="double-progress-bar__old">
      <div
        class="progress-bar-double__fill"
        :style="`width: ${dProgressBarOldFillingWidth}%`"
      ></div>
    </div>
    <div class="double-progress-bar__new">
      <div
        class="progress-bar-double__fill progress-bar-double__fill_violet"
        :style="`width: ${dProgressBarNewFillingWidth}%`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['currentValue', 'oldValue', 'maxValue'],

  computed: {
    dProgressBarOldFillingWidth() {
      return (this.oldValue / this.maxValue) * 100;
    },
    dProgressBarNewFillingWidth() {
      return (this.currentValue / this.maxValue) * 100;
    },
  },
};
</script>

<style scoped>
.double-progress-bar__old,
.double-progress-bar__new {
  height: 20px;
  width: 100%;
}

.progress-bar-double__fill {
  background: #f4f4f4;
  height: 100%;
}

.progress-bar-double__fill_violet {
  background: #613a93;
  height: 100%;
}

@media screen and (max-width: 1280px) {
  .double-progress-bar__old,
  .double-progress-bar__new {
    height: 18px;
  }
}

@media screen and (max-width: 1024px) {
  .double-progress-bar__old,
  .double-progress-bar__new {
    height: 14px;
  }
}
</style>
