<template>
  <div>
    <statistics></statistics>
    <call-to-action></call-to-action>
    <above></above>
  </div>
</template>

<script>
import Statistics from '@/components/Statistics';
import CallToAction from '@/components/CallToAction';
import Above from '@/components/Above';
export default {
  components: {
    statistics: Statistics,
    'call-to-action': CallToAction,
    above: Above,
  },
};
</script>

<style scoped></style>
