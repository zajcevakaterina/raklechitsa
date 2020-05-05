<template>
  <div class="container">
    <panel class="container__panel"> </panel>
  </div>
</template>

<script>
import Panel from '~/components/Panel';

export default {
  components: {
    panel: Panel,
  },
  data() {
    return {
      lessons: 'Hello',
    };
  },
};
</script>

<style>
.container__panel {
  width: 80%;
  margin: 40px auto;
}
</style>
