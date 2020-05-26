<template>
  <section class="statistics">
    <section-title class="statistics__title"
      >Статистика по онкозаболеваниям</section-title
    >
    <div class="statistics__container">
      <ul class="statistics__list">
        <li
          class="statistics__item"
          v-for="statItem in hardcodeStatistics"
          :key="statItem.id"
        >
          <!-- TODO: поменять hardcodeStatistics на statistics, если изменятся данные по null в апи-->
          <stat-item
            :statDescription="statItem.description"
            :statCurrentValue="statItem.currentValue"
            :statOldValue="statItem.oldValue"
            :statMaxValue="statItem.maxValue"
            :statSummary="statItem.summary"
            :statSource="statItem.source"
          ></stat-item>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import StatisticsItem from '@/components/StatisticsItem';
import SectionTitle from '@/components/ui/SectionTitle';

export default {
  components: {
    'stat-item': StatisticsItem,
    'section-title': SectionTitle,
  },
  computed: {
    statistics() {
      return this.$store.getters['statistics/getStatistics'];
    },
    // функция для того, чтобы захардкодить значения в doubleProgressBar вместо null из api
    hardcodeStatistics() {
      const statcopy = this.statistics;
      const hardCodeStat = statcopy.map(function(stat) {
        if (stat.id === 3) {
          return {
            ...stat,
            oldValue: stat.oldValue ? stat.oldValue : 60,
            currentValue: stat.currentValue ? stat.currentValue : 88,
          };
        } else if (stat.id === 4) {
          return {
            ...stat,
            oldValue: stat.oldValue ? stat.oldValue : 80,
            currentValue: stat.currentValue ? stat.currentValue : 55,
          };
        }

        return stat;
      });
      return hardCodeStat;
    },
  },
};
</script>

<style scoped>
.statistics {
  padding: 100px 0;
}

.statistics__container {
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.statistics__title {
  margin: 0 0 70px;
}
.statistics__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
  padding: 0;
  list-style: none;
  justify-content: flex-start;
  margin: 0;
}

.statistics__item:nth-of-type(4) {
  margin-right: 0;
}

::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 1360px) {
  .statistics__list {
    grid-template-columns: repeat(4, 280px);
  }
}

@media screen and (max-width: 1280px) {
  .statistics {
    padding: 90px 0;
  }

  .statistics__title {
    margin: 0 0 60px;
  }

  .statistics__list {
    grid-template-columns: repeat(4, 265px);
  }
}

@media screen and (max-width: 1024px) {
  .statistics {
    padding: 80px 0;
  }

  .statistics__title {
    margin: 0 0 46px;
  }

  .statistics__list {
    grid-template-columns: repeat(4, 208px);
    column-gap: 30px;
  }
}

@media screen and (max-width: 768px) {
  .statistics__title {
    margin: 0 auto 60px;
    text-align: center;
  }

  .statistics__list {
    grid-template-columns: repeat(4, 216px);
    column-gap: 20px;
    width: max-content;
  }
}

@media screen and (max-width: 425px) {
  .statistics {
    padding: 50px 0;
  }

  .statistics__title {
    margin: 0 0 30px;
    text-align: left;
  }
}

@media screen and (max-width: 320px) {
  .statistics__list {
    column-gap: 10px;
  }
}
</style>
