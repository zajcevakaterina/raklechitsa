<!--TODO убрать из шаблона кнопку-->
<template>
  <div>
    <arrow-button></arrow-button>
  </div>
</template>

<script>
import SliderButton from '@/components/ui/SliderButton';
export default {
  components: {
    'arrow-button': SliderButton,
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
