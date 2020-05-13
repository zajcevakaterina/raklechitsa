<template>
  <div class="root__section">
    <stories class="stories">
      Сюда еще добавим инпут и поиск
    </stories>
    А сюда кнопки :)
  </div>
</template>

<script>
import Stories from '@/components/blocks/Stories';
export default {
  components: {
    stories: Stories,
  },
};
</script>

<style scoped>
.stories {
  padding-top: 98px;
}
</style>
