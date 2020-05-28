<template>
  <div class="intro">
    <div class="intro__container">
      <div class="intro__desc">
        <title-text class="intro__title">{{ intro.title }}</title-text>
        <regular-text class="intro__text" v-html="intro.text"></regular-text>
      </div>

      <div class="intro__slider-container">
        <slider-intro />
        <p class="intro__video-caption">{{ intro.note }}</p>

        <sliderB
          class="slider-buttons swiper-buttons-prev swiper-buttons_size_small"
          side="slider-button_left"
        />
        <sliderB
          class="swiper-buttons-next swiper-buttons_size_small"
          side="slider-button_right"
        />
      </div>

      <sliderB
        class="slider-buttons swiper-buttons-prev swiper-buttons_size_big"
        side="slider-button_left"
      />
      <sliderB
        class="swiper-buttons-next swiper-buttons_size_big"
        side="slider-button_right"
      />
    </div>

    <div class="intro__cover">
      <p class="intro__cover-text">
        {{ tagLeadIntroBlock.title }}
        <span class="intro__hashtag">{{ tagLeadIntroBlock.hashtag }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionText from '@/components/ui/SectionText';
import SliderButtons from '@/components/ui/SliderButtons';
import VideoFrame from '@/components/ui/VideoFrame';
import Slider from '@/components/blocks/Slider';

export default {
  components: {
    'title-text': SectionTitle,
    'regular-text': SectionText,
    sliderB: SliderButtons,
    'youtube-video': VideoFrame,
    'slider-intro': Slider,
  },

  computed: {
    intro() {
      return this.$store.getters['blocks/getCurrentBlock']('videos');
    },
    tagLeadIntroBlock() {
      return this.$store.getters['blocks/getCurrentBlock']('note-1');
    },
  },
};
</script>

<style scoped>
/* .intro__video-link {
  color: #666;
} */
/* если вдруг появится ссылка */

.intro {
  margin: 0 auto;
  padding: 100px 0;
}

.intro__container {
  display: grid;
  grid-template-columns: 40px 373px 1fr;
  grid-template-rows: auto;
  margin-bottom: 74px;
}

.intro__desc {
  grid-column: 1/3;
  margin-bottom: 150px;
}

.intro__slider-container {
  padding: 0 0 0 40px;
  grid-column: 3/4;
  grid-row: 1/3;
  overflow: hidden;
  position: relative;
}

.intro__video-caption {
  font-size: 12px;
  line-height: 1.33;
  color: #666;
  margin: 10px 0 0;
}

.swiper-buttons_size_small {
  display: none;
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
  .intro {
    padding: 90px 0;
  }

  .intro__container {
    grid-template-columns: 40px 367px 1fr;
    margin-bottom: 64px;
  }

  .intro__desc {
    margin-bottom: 124px;
  }

  .intro__cover-text {
    font-size: 28px;
    line-height: 1.4;
  }

  .intro__hashtag {
    font-size: 38px;
  }
}

@media (max-width: 1024px) {
  .intro {
    padding: 80px 0;
  }

  .intro__container {
    grid-template-columns: 40px 278px 1fr;
    margin-bottom: 54px;
  }

  .intro__desc {
    margin-bottom: 80px;
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

@media (max-width: 830px) {
  .intro__desc {
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .intro__container {
    grid-template-columns: 40px 1fr 40px;
    margin-bottom: 44px;
  }

  .intro__desc {
    grid-column: 2/3;
    margin-bottom: 60px;
    justify-self: center;
  }

  .intro__title {
    text-align: center;
  }

  .intro__slider-container {
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 0 10px 0;
  }

  .swiper-buttons-prev {
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: center;
  }

  .swiper-buttons-next {
    grid-column: 3/4;
    grid-row: 2/3;
    align-self: center;
  }

  .intro__video-caption {
    margin: 20px 0 0;
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
  .intro {
    padding: 50px 0;
  }

  .intro__container {
    display: block;
    margin-bottom: 50px;
  }

  .intro__desc {
    margin-bottom: 40px;
  }

  .swiper-buttons_size_big {
    display: none;
  }

  .swiper-buttons_size_small {
    display: block;
  }

  .swiper-buttons-prev {
    position: absolute;
    left: 0;
    top: 40%;
    z-index: 1;
    width: 20px;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
  }

  .swiper-buttons-next {
    position: absolute;
    right: 0;
    top: 40%;
    z-index: 1;
    width: 20px;
    background: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(/arrows/arrow-active.svg);
    transform: rotate(0deg);
  }

  .intro__title {
    text-align: left;
  }

  .intro__video-caption {
    display: none;
  }

  .intro__slider-container {
    padding: 0;
    position: relative;
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
</style>
