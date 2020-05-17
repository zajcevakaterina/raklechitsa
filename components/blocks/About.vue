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
        <main-tabs :tabsData="about" :theme="'about'" />
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
  computed: {
    about() {
      return this.$store.getters['about/getAbout'];
    },
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
  .about__section-text {
    margin: 26px 0 0;
  }
  .about__content {
    flex-direction: column;
    align-items: center;
    flex: none;
  }
}
@media screen and (max-width: 350px) {
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
  .about__section-text {
    margin: 16px 0 0;
  }
}
</style>
