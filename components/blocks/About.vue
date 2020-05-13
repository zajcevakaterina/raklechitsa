<template>
  <div class="wrapper">
    <section class="about root__section">
      <p class="about__hashtag">#РАКЛЕЧИТСЯ</p>
      <section-title class="about__section-title">О проекте</section-title>
      <div class="about__content">
        <section-text class="about__section-text"
          >Этот проект был создан благотворительным фондом Константина
          Хабенского.
        </section-text>
        <main-tabs :tabsData="tabs" :theme="'about'" />
      </div>
    </section>
  </div>
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
.wrapper {
  background: #613a93;
  width: 100%;
}

.about {
  min-height: 650px;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  margin: 0 auto;
  box-sizing: border-box;
}
.about__hashtag {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  color: #ffffff;
  text-align: center;
  margin: 0 auto 70px;
}
.about__content {
  display: flex;
  justify-content: space-between;
}
.about__section-title {
  color: #ffffff;
}
.about__section-text {
  color: #dedede;
}

@media screen and (max-width: 1280px) {
  .about {
    min-height: 626px;
    padding: 80px 0;
  }
  .about__hashtag {
    font-size: 58px;
    line-height: 70px;
    margin: 0 auto 60px;
  }
}
@media screen and (max-width: 1024px) {
  .about {
    min-height: 571px;
  }
  .about__hashtag {
    font-size: 52px;
    line-height: 63px;
    margin: 0 auto 46px;
  }
}
@media screen and (max-width: 768px) {
  .about {
    min-height: 660px;
    padding: 50px 0;
    align-items: center;
  }
  .about__hashtag {
    display: none;
  }
  .about__content {
    flex-direction: column;
    align-items: center;
    flex: none;
  }
}
@media screen and (max-width: 320px) {
  .about {
    min-height: 628px;
    align-items: start;
  }
  .about__hashtag {
    display: none;
  }
  .about__content {
    flex-direction: column;
    align-items: center;
    flex: none;
  }
}
</style>
