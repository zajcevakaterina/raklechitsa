<template>
  <div class="root__section">
    <stories :stories="stories" class="stories">
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
  computed: {
    stories() {
      return this.$store.getters['stories/getStories'];
    },
  },
};
</script>

<style scoped>
.stories {
  padding-top: 98px;
}
</style>
