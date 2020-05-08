<template>
  <div class="container">
    <!--    <panel class="container__panel"> </panel>-->
    <video__container></video__container>
  </div>
</template>

<script>
  import Panel from '~/components/Panel';
  import Video__container from "~/components/Video__container";

  export default {
    components: {
      video__container: Video__container,
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
  /*.container__panel {*/
  /*  width: 80%;*/
  /*  margin: 40px auto;*/
  /*}*/

</style>
