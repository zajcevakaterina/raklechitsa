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
    </div>
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

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

@media screen and (max-width: 1280px) {
  .video {
    max-width: 773px;
    max-height: 400px;
  }
}

@media screen and (max-width: 1024px) {
  .video {
    max-width: 600px;
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

@media (max-width: 475px) {
  .video__caption {
    display: none;
  }
}

@media (max-width: 425px) {
  .video {
    max-width: 290px;
  }

  .video__container {
    max-height: 150px;
  }
}
</style>
