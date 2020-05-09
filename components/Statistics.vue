<template>
  <section class="statistics">
    <ul class="statistics__list">
      <li
        class="statistics__item"
        v-for="infoItem in statInfo"
        :key="infoItem.id"
      >
        <stat-item
          :statText="infoItem.text"
          :statCurrentValue="infoItem.currentValue"
          :statMaxValue="infoItem.maxValue"
          :statTitle="infoItem.title"
          :statSource="infoItem.source"
          :diagramType="infoItem.diagramType"
        ></stat-item>
      </li>
    </ul>
  </section>
</template>

<script>
import StatisticsItem from '@/components/StatisticsItem';

export default {
  components: {
    'stat-item': StatisticsItem,
  },

  data() {
    return {
      statInfo: [
        {
          id: 1,
          text:
            'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
          currentValue: '1',
          maxValue: '3',
          title: '1 из 3',
          source: 'Левада-Центр 2018',
          diagramType: 'progressBar',
        },
        {
          id: 2,
          text: '2,6% Россиян имеют онкозаболевания.',
          currentValue: '2.6',
          maxValue: '100',
          title: '3 700 000',
          source: 'Росстат 2018',
          diagramType: 'progressBar',
        },
        {
          id: 3,
          text:
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
          currentValue: '1.28',
          maxValue: '1',
          title: '&uarr;28%',
          // TODO: мб здесь стрелка svg
          source: 'МНИОИ Герцена 2018',
          diagramType: 'doubleProgressBar',
        },
        {
          id: 4,
          text:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          currentValue: '0.75',
          maxValue: '1',
          title: '&darr;25%',
          // TODO: мб здесь стрелка svg
          source: 'МНИОИ Герцена 2018',
          diagramType: 'doubleProgressBar',
        },
      ],
    };
  },
};
</script>

<style scoped>
.statistics__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  column-gap: 40px;
  row-gap: 70px;
  padding: 0;
  list-style: none;
  justify-content: center;
}
</style>
