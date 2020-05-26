<template>
  <div class="stat-item">
    <p class="stat-item__text">{{ statDescription }}</p>

    <progress-bar
      v-if="statOldValue === 0"
      :currentValue="statCurrentValue"
      :maxValue="statMaxValue"
    />

    <double-progress-bar
      v-else
      :currentValue="statCurrentValue"
      :oldValue="statOldValue"
      :maxValue="statMaxValue"
    >
    </double-progress-bar>

    <h3 class="stat-item__title" v-html="statSummary"></h3>
    <p class="stat-item__source">{{ statSource }}</p>
  </div>
</template>

<script>
import ProgressBar from '@/components/ui/ProgressBar';
import DoubleProgressBar from '@/components/ui/DoubleProgressBar';

export default {
  components: {
    'progress-bar': ProgressBar,
    'double-progress-bar': DoubleProgressBar,
  },
  props: [
    'statDescription',
    'statCurrentValue',
    'statOldValue',
    'statMaxValue',
    'statSummary',
    'statSource',
  ],
};
</script>

<style scoped>
.stat-item {
  border: 1px solid #efefef;
  padding: 20px;
  box-sizing: border-box;
}

.stat-item__text {
  font-size: 12px;
  line-height: 1.33;
  min-height: 48px;
  margin: 0 0 76px;
}

.stat-item__title {
  font-size: 38px;
  line-height: 1.05;
  font-weight: 600;
  margin: 18px 0;
  text-align: right;
}

.stat-item__source {
  font-size: 12px;
  line-height: 1.33;
  text-align: right;
  color: #666;
  margin: 0;
}

@media screen and (max-width: 1280px) {
  .stat-item {
    max-height: 265px;
    padding: 18px;
  }

  .stat-item__text {
    margin: 0 0 56px;
  }
}

@media screen and (max-width: 1024px) {
  .stat-item {
    max-height: 208px;
    padding: 10px;
  }

  .stat-item__text {
    font-size: 10px;
    line-height: 14px;
    margin: 0 0 48px;
  }

  .stat-item__title {
    font-size: 26px;
    line-height: 1.15;
    margin: 10px 0;
  }

  .stat-item__source {
    font-size: 10px;
    line-height: 1.4;
  }
}

@media screen and (max-width: 768px) {
  .stat-item {
    height: 216px;
  }

  .stat-item__text {
    margin: 0 0 48px;
  }
}
</style>
