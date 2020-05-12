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
  //TODO уменьшить basisWidth при разверешении 1024px и ниже, проверить второй doublebar (не соответствует макету)
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

@media screen and (max-width: 1280px) {
  .double-progress-bar__basis {
    height: 18px;
  }

  .double-progress-bar__current {
    height: 18px;
  }
}

@media screen and (max-width: 1024px) {
  .double-progress-bar__basis {
    height: 14px;
  }

  .double-progress-bar__current {
    height: 14px;
  }
}
</style>
