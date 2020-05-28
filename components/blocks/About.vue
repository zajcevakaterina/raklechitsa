<template>
  <section class="about">
    <container class="about__container">
      <p class="about__hashtag" v-html="aboutBlock.hashtag" />
      <section-title class="about__section-title" v-html="aboutBlock.title" />
      <div class="about__content">
        <section-text class="about__section-text" v-html="aboutBlock.text" />
        <main-tabs :tabsData="tabsAboutData" :theme="'about'" />
      </div>
    </container>
  </section>
</template>
<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionText from '@/components/ui/SectionText';
import Tabs from '@/components/ui/Tabs';
import Container from '@/components/ui/Container';
export default {
  components: {
    'section-title': SectionTitle,
    'section-text': SectionText,
    'main-tabs': Tabs,
    container: Container,
  },
  computed: {
    aboutBlock() {
      return this.$store.getters['blocks/getCurrentBlock']('about');
    },
    tabsAboutData() {
      return this.aboutBlock.extraTexts;
    },
  },
};
</script>

<style scoped>
.about {
  background: #613a93;
  width: 100%;
}

.about__container {
  min-height: 650px;
  display: flex;
  flex-direction: column;
  padding: 90px 0 100px;
  margin: 0 auto;
  box-sizing: border-box;
}
.about__hashtag {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  color: #fff;
  text-align: center;
  margin: 0 auto 70px;
}
.about__content {
  display: flex;
  justify-content: space-between;
}
.about__section-title {
  color: #fff;
}
.about__section-text {
  color: #dedede;
  margin-top: 37px;
}

@media screen and (max-width: 1280px) {
  .about__container {
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
  .about__container {
    min-height: 571px;
  }
  .about__section-text {
    margin-top: 29px;
  }
  .about__hashtag {
    font-size: 52px;
    line-height: 63px;
    margin: 0 auto 46px;
  }
}
@media screen and (max-width: 768px) {
  .about__container {
    min-height: 660px;
    padding: 82px 0 50px;
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
@media screen and (max-width: 425px) {
  .about__container {
    min-height: 628px;
    align-items: start;
    padding-top: 52px;
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
