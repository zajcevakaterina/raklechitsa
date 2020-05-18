<template>
  <div class="tag-lead">
    <p :class="['tag-lead__text', `tag-lead__text_theme_${theme}`]">
      <slot></slot>
      <span class="tag-lead__tag">#этонелечится</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['theme'],
};
</script>

<style scoped>
.tag-lead {
  width: 100%;
  min-height: 86px;
  background: #613a93;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 5px;
}

.tag-lead__text {
  text-transform: uppercase;
  font-size: 30px;
  line-height: 1.33;
  margin: 0;
  color: #fff;
  max-width: 750px;
  text-align: center;
}

.tag-lead__tag {
  font-weight: 800;
  font-size: 40px;
}

@media (max-width: 1280px) {
  .tag-lead__text {
    font-size: 28px;
    line-height: 1.4;
  }
  .tag-lead__tag {
    font-size: 36px;
  }
}

@media (max-width: 1024px) {
  .tag-lead {
    min-height: 80px;
  }
}

@media (max-width: 768px) {
  .tag-lead {
    min-height: 100px;
    padding: 12px 0;
  }
  .tag-lead__text {
    font-size: 22px;
    line-height: 1.24;
    text-align: center;
  }

  .tag-lead__text_theme_thin {
    max-width: 450px;
  }

  .tag-lead__tag {
    font-size: 32px;
  }
}

@media (max-width: 475px) {
  .tag-lead {
    min-height: 80px;
    padding: 15px 0;
  }
  .tag-lead__text {
    font-size: 16px;
    line-height: 1.12;
    text-align: center;
    max-width: 220px;
  }

  .tag-lead__tag {
    font-size: 20px;
  }
}
</style>
