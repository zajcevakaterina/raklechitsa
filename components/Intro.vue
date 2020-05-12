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
        <sliderB
          class="slider-buttons"
          @btnClickRightIntro="buttonHandler(true)"
          @btnClickLeftIntro="buttonHandler(false)"
        />
      </div>
      <youtube-video :url="introVideo[i].url" />
    </div>

    <div class="intro__cover">
      <p class="intro__cover-quote">
        И В ОТЛИЧИЕ ОТ РАКА, <span class="quote">#ЭТОНЕЛЕЧИТСЯ</span>
      </p>
    </div>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionText from '@/components/ui/SectionText';
import SliderButtons from '@/components/ui/SliderButtons';
import VideoFrame from '@/components/VideoFrame';

export default {
  components: {
    'title-text': SectionTitle,
    'regular-text': SectionText,
    sliderB: SliderButtons,
    'youtube-video': VideoFrame,
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
.intro {
  padding: 100px 60px;
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

.intro__cover {
  width: 100%;
  height: 86px;
  background: #613a93;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro__cover-quote {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  margin: 0;
  color: #ffffff;
}

.quote {
  font-weight: 600;
  font-size: 40px;
}

@media (max-width: 1280px) {
  .intro__content {
    min-height: 495px;
    max-width: 1180px;
  }

  .intro {
    padding: 90px 50px;
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

  /*.slider-buttons {*/
  /*  margin-top: 124px;*/
  /*}*/
  .intro__cover-quote {
    font-size: 28px;
  }
}

@media (max-width: 1024px) {
  .intro {
    padding: 80px 50px;
  }

  .intro__content {
    min-height: 396px;
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

  .intro__cover-quote {
    font-size: 24px;
    line-height: 40px;
  }

  .quote {
    font-size: 35px;
  }

  .intro__cover {
    height: 80px;
  }
}

@media (max-width: 768px) {
}
</style>
