<template>
  <div>
    <!-- TODO: добавить класс к обертке index.vue -->

    <stories />
    <call-to-action />
    <statistics />
    <about />
  </div>
</template>

<script>
import Stories from '@/components/Stories';
import CallToAction from '@/components/CallToAction';
import Statistics from '@/components/Statistics';
import Above from '@/components/Above';
// TODO: Above переименовать на About

export default {
  components: {
    stories: Stories,
    'call-to-action': CallToAction,
    statistics: Statistics,
    about: Above,
  },
};
</script>

<style scoped></style>
