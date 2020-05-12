<template>
  <div class="tag-lead">
    <p class="tag-lead__text">
      <slot></slot>
      <span class="tag-lead__tag">#этонелечится</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tag-lead {
  width: 100%;
  height: 86px;
  background: #613a93;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tag-lead__text {
  text-transform: uppercase;
  font-size: 30px;
  line-height: 1.53;
  margin: 0;
  color: #fff;
}

.tag-lead__tag {
  font-weight: 800;
  font-size: 40px;
}

@media (max-width: 1280px) {
  .tag-lead__text {
    font-size: 28px;
    line-height: 1.64;
  }
  .tag-lead__tag {
    font-size: 36px;
  }
}

@media (max-width: 1024px) {
  .tag-lead {
    height: 80px;
  }
}

@media (max-width: 768px) {
  .tag-lead {
    height: 100px;
  }
  .tag-lead__text {
    font-size: 22px;
    line-height: 1.24;
    max-width: 500px;
    text-align: center;
  }
  .tag-lead__tag {
    font-size: 32px;
  }
}

@media (max-width: 475px) {
  .tag-lead {
    height: 100px;
  }
  .tag-lead__text {
    font-size: 22px;
    line-height: 1.24;
    max-width: 500px;
    text-align: center;
  }
  .tag-lead__tag {
    font-size: 32px;
  }
}
</style>
