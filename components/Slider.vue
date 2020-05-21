<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      class="swiper-slide"
      v-for="video in introVideo"
      :key="video.id"
    >
      <youtube-video :url="video.url"></youtube-video>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import VideoFrame from '@/components/VideoFrame';
import SliderButtons from '@/components/ui/SliderButtons';

export default {
  name: 'swiper-example-navigation',
  title: 'Navigation',
  components: {
    Swiper,
    SwiperSlide,
    'youtube-video': VideoFrame,
    sliderB: SliderButtons,
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-buttons-next',
          prevEl: '.swiper-buttons-prev',
        },
      },
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
.swiper {
  display: flex;
  flex-direction: column;
}
.swiper-slide {
  width: 100%;
}
</style>
