<template>
  <div class="cover">
    <h1 class="cover__heading">#РАКЛЕЧИТСЯ</h1>
    <arrow class="cover__arrow" />
  </div>
</template>

<script>
import ArrowButton from '@/components/ui/ArrowButton';
export default {
  arrow: ArrowButton,
};
</script>

<style scoped>
.cover {
  height: 689px;
  background-color: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover__heading {
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-align: center;
  color: #ffffff;
}

.cover__arrow {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
