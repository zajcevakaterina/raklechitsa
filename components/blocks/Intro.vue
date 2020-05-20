<template>
  <div class="intro">
    <div class="intro__content">
      <div class="intro__left">
        <title-text class="intro__title">
          {{ introVideo[i].title }}
        </title-text>
        <regular-text class="intro__text">
          {{ introVideo[i].text }}
        </regular-text>
        <div class="slider-buttons">
          <sliderB @btnClickLeftIntro="buttonHandler(false)"/>
          <sliderB
            class="slider-buttons_right"
            @btnClickLeftIntro="buttonHandler(true)"
          />
        </div>
      </div>
      <youtube-video :url="introVideo[i].url"/>
    </div>

    <div class="middle-container">
      <title-text class="intro__title">
        {{ introVideo[i].title }}
      </title-text>
      <regular-text class="intro__text">
        {{ introVideo[i].text }}
      </regular-text>
      <div class="intro__middle">
        <sliderB
          class="slider-buttons"
          @btnClickLeftIntro="buttonHandler(false)"
        />
        <youtube-video class="youtube-video" :url="introVideo[i].url"/>
        <sliderB
          class="slider-buttons slider-buttons_right"
          @btnClickLeftIntro="buttonHandler(true)"
        />
      </div>
    </div>

    <div class="mini-container">
      <title-text class="intro__title">
        {{ introVideo[i].title }}
      </title-text>
      <regular-text class="intro__text">
        {{ introVideo[i].text }}
      </regular-text>
      <div class="intro__middle">
        <sliderB
          class="slider-buttons"
          @btnClickLeftIntro="buttonHandler(false)"
        />
        <youtube-video class="youtube-video" :url="introVideo[i].url"/>
        <sliderB
          class="slider-buttons slider-buttons_right"
          @btnClickLeftIntro="buttonHandler(true)"
        />
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

  export default {
    components: {
      'title-text': SectionTitle,
      'regular-text': SectionText,
      sliderB: SliderButtons,
      'youtube-video': VideoFrame,
      'tag-lead': TagLead,
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
        width: 0,
        i: 0,
        introVideo: [
          {
            id: '01',
            title: 'Истории людей, победивших рак, но не свои привычки',
            text:
              'Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии, страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с их историями.',
            url: 'https://www.youtube.com/embed/coOppM34GtI',
          },
          {
            id: '02',
            title: 'Какая-то другая история .......',
            text: 'Основное содержание другой истории......',
            url: 'https://www.youtube.com/embed/ZKWilQnPovg',
          },
          {
            id: '03',
            title: 'Ещё история под номером 3 .......',
            text:
              'Основное содержание очень интересной истории под номером 3...... ',
            url: 'https://www.youtube.com/embed/FFrioIZ65q0',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .mini-container {
    display: none;
  }

  .middle-container {
    display: none;
  }

  .slider-buttons_right {
    transform: rotate(180deg);
  }

  .intro {
    margin: 0 auto;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
  }

  .intro__content {
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

  .slider-buttons {
    margin-top: auto;
    margin-bottom: 95px;
  }

  @media (max-width: 1280px) {
    .intro__content {
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
  }

  @media (max-width: 1024px) {
    .intro {
      padding: 85px 0 80px;
    }

    .intro__left {
      padding-top: 4px;
    }

    .intro__content {
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

    .slider-buttons {
      margin-bottom: 79px;
    }
  }

  @media (max-width: 768px) {
    .intro__content {
      display: none;
    }

    .middle-container {
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

    .youtube-video {
      margin: 60px 14px 77px;
    }

    .slider-buttons {
      margin: 0;
    }

    .intro__middle {
      display: flex;
      justify-content: space-between;
      width: 100%;
      min-height: 300px;
      max-width: 688px;
      align-items: center;
    }
  }

  @media (max-width: 425px) {
    .mini-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .intro {
      padding-top: 49px;
      padding-bottom: 24px;
    }

    .middle-container {
      display: none;
    }

      .intro__title {
      max-width: 290px;
      font-size: 18px;
      line-height: 21px;
      text-align: left;
        min-height: 42px;
    }

    .intro__text {
      max-width: 290px;
      margin-top: 17px;
      min-height: 64px;
    }
    .intro__middle {
      margin: 42px 0 25px;
      position: relative;
      min-height: 150px;
      max-width: 290px;
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
</style>
