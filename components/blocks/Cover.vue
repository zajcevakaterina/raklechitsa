<template>
  <div class="cover">
    <h1 class="cover__heading">#РАКЛЕЧИТСЯ</h1>
    <button class="cover__arrow-button" />
  </div>
</template>

<script></script>

<style scoped>
.cover {
  min-height: 689px;
  background-color: #613a93;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.cover__heading {
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-align: center;
  color: #ffffff;
}

.cover__arrow-button {
  background: no-repeat url('/arrows/arrow.png');
  background-size: cover;
  width: 36px;
  height: 14px;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0;
  position: absolute;
  bottom: 40px;
  left: auto;
  right: auto;
  margin-top: auto;
}

@media screen and (max-width: 1280px) {
  .cover {
    min-height: 620px;
  }

  .cover__heading {
    font-size: 78px;
    line-height: 94px;
  }
}

@media screen and (max-width: 1024px) {
  .cover {
    min-height: 540px;
  }
}

@media screen and (max-width: 768px) {
  .cover {
    min-height: 780px;
  }

  .cover__heading {
    font-size: 64px;
    line-height: 77px;
  }

  @media screen and (max-width: 320px) {
    .cover {
      min-height: 480px;
    }

    .cover__heading {
      font-size: 36px;
      line-height: 44px;
    }

    .cover__arrow-button {
      bottom: 30px;
    }
  }
}
</style>
