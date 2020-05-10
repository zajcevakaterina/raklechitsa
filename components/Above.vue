<template>
  <section class="above">
    <p class="above__hashtag">#РАКЛЕЧИТСЯ</p>
    <section-title class="above__section-title">О проекте</section-title>
    <div class="above__content">
      <section-text class="above__section-text"
        >Этот проект был создан благотворительным фондом Константина Хабенского.
      </section-text>
      <main-tabs :tabsData="tabs" :theme="'above'" />
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionText from '@/components/ui/SectionText';
import Tabs from '@/components/Tabs';
export default {
  components: {
    'section-title': SectionTitle,
    'section-text': SectionText,
    'main-tabs': Tabs,
  },
  data() {
    return {
      tabs: [
        {
          id: '1',
          name: 'Рак лечится',
          content:
            'Есть вещи, которые не лечатся. Особенности характера, страстные увлечения, привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве. Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми особенностями, которые сумели победить рак.',
          content2:
            'Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого поверить: онкологическое заболевание — это не приговор.',
        },
        {
          id: '2',
          name: 'Фонд Хабенского',
          content:
            'Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент, оплачивая обследования, лечение и медицинские препараты, но и в целом меняет систему оказания помощи детям с опухолями мозга в России.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.above {
  width: 100%;
  min-height: 650px;
  background: #613a93;
  display: flex;
  flex-direction: column;
  padding: 100px 60px 0;
}
.above__hashtag {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  color: #ffffff;
  margin: 0 auto 70px;
}
.above__content {
  display: flex;
  justify-content: spa ce-between;
}
.above__section-title {
  color: #ffffff;
}
.above__section-text {
  color: #dedede;
}
</style>
