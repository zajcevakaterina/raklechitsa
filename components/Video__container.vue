<template>
  <section class="video">
    <div class="video__content">
      <div class="video__entry">
        <p class="video__title">
          Истории людей, победивших рак, но не свои привычки
        </p>
        <p class="video__subtitle">
          Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
          страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
          с их историями.
        </p>
      </div>
      <div class="video__container">
        <iframe
          class="video__frame"
          src="https://www.youtube.com/embed/coOppM34GtI"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
        <p class="video__text">
          Все видео вы можете найте на нашем YouTube канале.
        </p>
      </div>
    </div>
    <div class="video__cover">
      <p class="video__cover-quote">
        И В ОТЛИЧИЕ ОТ РАКА, <span class="quote">#ЭТОНЕЛЕЧИТСЯ</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Video__container',
};
</script>

<style scoped>
.quote {
  font-weight: 600;
  font-size: 40px;
}

.video {
  font-family: Inter, sans-serif;
  font-style: normal;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
}

.video__content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 74px;
}

.video__entry {
  width: 413px;
  margin-right: 40px;
  padding-top: 10px;
}

.video__title {
  margin: 0;
  width: 413px;
  height: 108px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.video__subtitle {
  width: 340px;
  margin-top: 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}

.video__container {
  width: 867px;
}

.video__frame {
  width: 100%;
  height: 450px;
  border: 0;
}

.video__text {
  margin: 5px 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
}

.video__cover {
  width: 1320px;
  height: 86px;
  background: #613a93;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video__cover-quote {
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  margin: 0;
  color: #ffffff;
}
</style>
