<template>
  <div class="video">
    <div class="video__container">
      <iframe
        class="video__frame"
        :src="url"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
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
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<!--TODO доделать адаптив для видео-->
<style scoped>
.video {
  max-width: 867px;
  width: 100%;
}

.video__container {
  width: 100%;
  max-height: 450px;
  position: relative;
  padding-bottom: calc(9 * 91% / 16);
}

.video__frame {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
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

.video__link {
  color: #666666;
}

@media screen and (max-width: 1280px) {
  .video {
    max-width: 773px;
    max-height: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .video {
    max-height: 314px;
  }
}

@media screen and (max-width: 768px) {
  .video {
    width: 100%;
  }

  .video__container {
    max-height: 300px;
  }

  .video__caption {
    margin-bottom: -34px;
  }
}

@media screen and (max-width: 320px) {
  .video__container {
    max-height: 150px;
  }
}
</style>
