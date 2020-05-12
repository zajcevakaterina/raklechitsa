<template>
  <div class="intro">
    <div class="intro__left">
      <title-text
        >Истории людей, победивших рак, но не свои привычки</title-text
      >
      <regular-text
        >Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.</regular-text
      >
      <sliderB />
    </div>
    <youtube-video />
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
};
</script>

<style scoped>
.intro {
  display: flex;
  justify-content: space-between;
  min-height: 650px;
  padding: 100px 0;
  margin: 0 auto;
}

.intro__left {
  display: flex;
  flex-direction: column;
  padding-top: 12px;
}
</style>
