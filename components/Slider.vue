<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="video in videos" :key="video.id">
      <youtube-video :url="video.url"></youtube-video>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import VideoFrame from '@/components/VideoFrame';

export default {
  name: 'swiper-example-navigation',
  title: 'Navigation',
  components: {
    Swiper,
    SwiperSlide,
    'youtube-video': VideoFrame,
  },
  computed: {
    videos() {
      return this.$store.getters['video/getVideo'];
    },
  },
  data() {
    return {
      baseurl: process.env.BASE_URL,
      swiperOption: {
        navigation: {
          nextEl: '.swiper-buttons-next',
          prevEl: '.swiper-buttons-prev',
        },
      },
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
@media (max-width: 900px) {
  .swiper-slide {
    width: 500px;
  }
}
</style>
