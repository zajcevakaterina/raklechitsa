<template>
  <div class="intro">
    <div class="intro__container">
      <div class="intro__left">
        <title-text class="intro__title">
          {{title}}
        </title-text>
        <regular-text class="intro__text">
          {{text}}
        </regular-text>
        <div class="slider-buttons-container">
          <sliderB class="slider-buttons swiper-buttons-prev"/>
          <sliderB class="swiper-buttons-next " side="slider-button_right"/>
        </div>
      </div>
      <div class="intro__slider-container">
        <slider-intro/>
        <p class="video__caption">
          Все видео вы можете найте на нашем
          <a
            class="video__link"
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
          >
            YouTube канале</a
          >
        </p>
      </div>
    </div>

    <div class="intro__middle-container">
      <title-text class="intro__title">
        {{title}}
      </title-text>
      <regular-text class="intro__text">
        {{text}}
      </regular-text>
      <div class="intro__middle">
        <sliderB class="slider-buttons swiper-buttons-prev"/>
        <div class="intro__slider-container">
          <slider-intro/>
          <p class="video__caption">
            Все видео вы можете найте на нашем
            <a
              class="video__link"
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            >
              YouTube канале</a
            >.
          </p>
        </div>
        <sliderB class="swiper-buttons-next " side="slider-button_right"/>
      </div>
    </div>

    <div class="intro__mini-container">
      <title-text class="intro__title">
        {{title}}
      </title-text>
      <regular-text class="intro__text">
        {{text}}
      </regular-text>
      <div class="intro__middle">
        <sliderB class="slider-buttons swiper-buttons-prev"/>
        <slider-intro class="intro__slider-container youtube-video"/>
        <sliderB class="slider-buttons swiper-buttons-next " side="slider-button_right"/>
      </div>
    </div>

    <tag-lead class="intro__cover" :theme="'thin'">
      и в отличие от рака,
    </tag-lead>
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
    methods: {
      buttonHandler(right) {
        if (right) {
          if (this.i < this.introVideo.length - 1) {
            this.i++;
          } else this.i = 0;
        } else {
          if (this.i >= 1) {
            this.i--;
          } else this.i = this.introVideo.length - 1;
        }
      },
    },

    data() {
      return {
        title: 'Истории людей, победивших рак, но не свои привычки',
        text: 'Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии, страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.',
        i: 0,
        introVideo: [
          {
            id: 1,
            url: 'https://www.youtube.com/embed/coOppM34GtI',
          },
          {
            id: 2,
            url: 'https://www.youtube.com/embed/ZKWilQnPovg',
          },
          {
            id: 3,
            url: 'https://www.youtube.com/embed/FFrioIZ65q0',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .intro__mini-container {
    display: none;
  }

  .intro__middle-container {
    display: none;
  }

  .slider-buttons-container {
    margin-top: auto;
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
  }

  .slider-buttons {
    margin-top: auto;
    margin-bottom: 100px;
  }

  .video__caption {
    margin-bottom: -24px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    left: 0;
    bottom: 0;
    position: absolute;
    color: #666666;
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

    .intro__text {
      max-width: 305px;
      font-size: 16px;
      line-height: 20px;
    }

    .intro__slider-container {
      max-width: 773px;
    }
  }

  @media (max-width: 1024px) {
    .intro {
      padding: 85px 0 80px;
    }

    .intro__left {
      padding-top: 4px;
    }

    .intro__container {
      min-height: 389px;
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
    }

    .slider-buttons {
      margin-bottom: 79px;
    }
  }

  @media (max-width: 768px) {
    .video__caption {
      margin-bottom: -36px;
    }

    .intro__container {
      display: none;
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

    .slider-buttons {
      margin: 0;
    }

    .intro__slider-container {
      max-width: 580px;
    }

    .intro__middle {
      display: flex;
      justify-content: space-between;
      width: 100%;
      min-height: 300px;
      max-width: 688px;
      align-items: center;
      margin: 60px 14px 80px;
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
      margin: 42px 0 25px;
      position: relative;
      min-height: 200px;
    }

    .youtube-video {
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
    }

    .slider-buttons {
      z-index: 2;
      background-color: transparent;
      width: 20px;
    }
  }

  @media (max-width: 425px) {
    .intro__title {
      max-width: 290px;
    }

    .intro__text {
      max-width: 290px;
    }

    .intro__middle {
      position: relative;
      min-height: 150px;
      max-width: 290px;
    }

    /*.intro__slider-container {*/
    /*  max-width: 290px;*/
    /*}*/
  }
</style>
