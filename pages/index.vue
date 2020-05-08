<!--TODO убрать из шаблона кнопку-->
<template>
  <div>
    <arrow-button></arrow-button>
  </div>
</template>

<script>
import ArrowButton from '@/components/ui/ArrowButton';
export default {
  components: {
    'arrow-button': ArrowButton,
  },
};
</script>
<!--TODO убрать див ниже-->
<style scoped>
div {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #613a93;
}
</style>
