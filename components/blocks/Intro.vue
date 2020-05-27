<template>
  <div class="intro">
    <div class="intro__container">
      <div class="intro__left">
        <title-text class="intro__title">{{ intro.title }}</title-text>
        <regular-text class="intro__text" v-html="intro.text"></regular-text>
        <div class="slider-buttons-container">
          <sliderB class="slider-buttons swiper-buttons-prev" />
          <sliderB class="swiper-buttons-next" side="slider-button_right" />
        </div>
      </div>
      <div class="intro__slider-container">
        <slider-intro />
        <p class="intro__video-caption">
          {{ intro.note }}
          <!-- <a
            class="intro__video-link"
            target="_blank"
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
          >YouTube канале</a> -->
        </p>
      </div>
    </div>

    <div class="intro__middle-container">
      <title-text class="intro__title">{{ intro.title }}</title-text>
      <regular-text class="intro__text" v-html="intro.text"></regular-text>
      <div class="intro__middle">
        <sliderB class="slider-buttons swiper-buttons-prev" />
        <div class="intro__slider-container">
          <slider-intro />
          <p class="intro__video-caption">
            {{ intro.note }}
            <!-- <a
              class="intro__video-link"
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            >YouTube канале</a>. -->
          </p>
        </div>
        <sliderB
          class="slider-buttons swiper-buttons-next"
          side="slider-button_right"
        />
      </div>
    </div>

    <div class="intro__mini-container">
      <title-text class="intro__title">{{ intro.title }}</title-text>
      <regular-text class="intro__text" v-html="intro.text"></regular-text>
      <div class="intro__middle">
        <sliderB class="slider-buttons swiper-buttons-prev" />
        <slider-intro class="intro__slider-container youtube-video" />
        <sliderB
          class="slider-buttons swiper-buttons-next"
          side="slider-button_right"
        />
      </div>
    </div>

    <!-- <tag-lead class="intro__cover" :hashtag="tagLeadHashtag" :theme="'thin'">{{
      tagLeadIntroTitle
    }}</tag-lead> -->

    <div class="intro__cover">
      <p class="intro__cover-text">
        {{ tagLeadIntroTitle }}
        <span class="intro__hashtag">
          {{ tagLeadHashtag }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionText from '@/components/ui/SectionText';
import SliderButtons from '@/components/ui/SliderButtons';
import VideoFrame from '@/components/VideoFrame';
import TagLead from '@/components/TagLead';
import Slider from '@/components/Slider';

export default {
  components: {
    'title-text': SectionTitle,
    'regular-text': SectionText,
    sliderB: SliderButtons,
    'youtube-video': VideoFrame,
    'tag-lead': TagLead,
    'slider-intro': Slider,
  },

  props: {
    tagLeadIntroTitle: {
      type: String,
    },
    tagLeadHashtag: {
      type: String,
    },
  },

  data() {
    return {
      text:
        'Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии, страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.',
    };
  },

  computed: {
    intro() {
      return this.$store.getters['blocks/getCurrentBlock']('videos');
    },
  },
};
</script>

<style scoped>
.intro__video-link {
  color: #666;
}

.intro__mini-container {
  display: none;
}

.intro__middle-container {
  display: none;
}

.slider-buttons-container {
  margin-top: auto;
  margin-bottom: 99px;
}

.intro {
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
}

.intro__container {
  display: flex;
  justify-content: space-between;
  min-height: 550px;
  max-width: 1320px;
}

.intro__left {
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  min-height: 100%;
}

.intro__slider-container {
  position: relative;
  max-width: 867px;
  width: 100%;
  max-height: 450px;
}

.slider-buttons {
  margin: 0;
  z-index: 2;
}

.intro__video-caption {
  margin-bottom: -24px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  left: 0;
  bottom: 0;
  position: absolute;
  color: #666;
}

.intro__cover {
  width: 100%;
  min-height: 86px;
  background: #613a93;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 5px;
}

.intro__cover-text {
  text-transform: uppercase;
  font-size: 30px;
  line-height: 1.33;
  margin: 0;
  color: #fff;
  max-width: 750px;
  text-align: center;
}

.intro__hashtag {
  font-weight: 800;
  font-size: 40px;
}

@media (max-width: 1280px) {
  .intro__container {
    min-height: 490px;
    max-width: 1180px;
  }

  .intro {
    padding: 90px 0;
  }

  .intro__title {
    max-width: 367px;
    font-size: 28px;
    line-height: 32px;
  }

  .slider-buttons-container {
    margin-top: auto;
    margin-bottom: 89px;
  }

  .intro__text {
    max-width: 305px;
    font-size: 16px;
    line-height: 20px;
  }

  .intro__slider-container {
    max-width: 773px;
    max-height: 400px;
  }

  .intro__cover-text {
    font-size: 28px;
    line-height: 1.4;
  }

  .intro__hashtag {
    font-size: 38px;
  }
}

@media screen and (max-width: 1100px) {
  .intro__slider-container {
    max-width: 690px;
  }

  .intro__video-caption {
    margin-bottom: 18px;
  }
}

@media (max-width: 1024px) {
  .intro {
    padding: 80px 0;
  }

  .intro__left {
    padding-top: 10px;
  }

  .intro__container {
    min-height: 393px;
    max-width: 924px;
  }

  .intro__title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }

  .intro__text {
    max-width: 260px;
    font-size: 13px;
    line-height: 16px;
    margin: 20px 0 0;
  }

  .intro__slider-container {
    max-width: 606px;
    max-height: 314px;
  }

  .slider-buttons-container {
    margin-bottom: 79px;
  }

  .intro__cover {
    min-height: 80px;
  }

  .intro__hashtag {
    font-size: 34px;
  }

  .intro__cover-text {
    font-size: 24px;
    line-height: 40px;
  }
}

@media screen and (max-width: 900px) {
  .intro__slider-container {
    max-width: 500px;
    max-height: 254px;
  }
}

@media (max-width: 768px) {
  .intro__video-caption {
    margin-bottom: -36px;
  }

  .intro__container {
    display: none;
  }

  .slider-buttons {
    min-width: 40px;
  }

  .intro__middle-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .intro__title {
    max-width: 380px;
    text-align: center;
  }

  .intro__text {
    max-width: 380px;
    margin: 26px 0 0;
  }

  .intro__slider-container {
    max-width: 580px;
  }

  .intro__middle {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 300px;
    max-width: 688px;
    align-items: center;
    margin: 60px 14px 80px;
  }

  .slider-buttons-container {
    margin-bottom: 75px;
  }

  .intro__cover {
    min-height: 100px;
    padding: 12px 0;
  }

  .intro__cover-text {
    font-size: 22px;
    line-height: 1.24;
    text-align: center;
    max-width: 450px;
  }

  .intro__hashtag {
    font-size: 32px;
  }
}

@media (max-width: 475px) {
  .intro__mini-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .intro {
    padding-top: 49px;
    padding-bottom: 24px;
  }

  .intro__middle-container {
    display: none;
  }

  .intro__title {
    max-width: 310px;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    min-height: 42px;
  }

  .intro__text {
    max-width: 360px;
    margin-top: 17px;
    min-height: 64px;
  }

  .intro__middle {
    margin: 42px 0 8px;
    position: relative;
    min-height: 200px;
    justify-content: space-between;
  }

  .youtube-video {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  .slider-buttons {
    min-width: 20px;
    background: transparent;
  }

  .intro__cover {
    min-height: 80px;
    padding: 15px 0;
  }

  .intro__cover-text {
    font-size: 16px;
    line-height: 1.12;
    text-align: center;
    max-width: 220px;
  }

  .intro__hashtag {
    font-size: 20px;
  }
}

@media (max-width: 400px) {
  .intro__middle {
    min-height: 165px;
  }
}
</style>
