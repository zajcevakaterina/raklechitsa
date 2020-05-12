<template>
  <div class="cover">
    <h1 class="cover__heading">#РАКЛЕЧИТСЯ</h1>
    <button class="cover__arrow-button">
      <img src="@/static/arrows/arrow.png" alt="" />
    </button>
  </div>
</template>

<script></script>

<style scoped>
.cover {
  height: 689px;
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
  background: transparent;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  position: absolute;
  bottom: 40px;
  left: auto;
  right: auto;
  margin-top: auto;
}

@media screen and (max-width: 1439px) {
  .cover {
    height: 620px;
  }

  .cover__heading {
    font-size: 78px;
    line-height: 94px;
  }
}

@media screen and (max-width: 1279px) {
  .cover {
    height: 540px;
  }
}

@media screen and (max-width: 1023px) {
  .cover {
    height: 780px;
  }

  .cover__heading {
    font-size: 64px;
    line-height: 77px;
  }

  @media screen and (max-width: 767px) {
    .cover {
      height: 480px;
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
