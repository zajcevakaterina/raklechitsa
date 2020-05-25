<template>
  <div class="cover" ref="cover">
    <h1 class="cover__heading">#РАКЛЕЧИТСЯ</h1>
    <arrow @scrollToCoverClick="scrollToIntro" class="cover__arrow-button" />
  </div>
</template>

<script>
import ArrowButton from '@/components/ui/ArrowButton';
export default {
  components: {
    arrow: ArrowButton,
  },
  methods: {
    scrollToIntro() {
      this.$refs.cover.nextElementSibling.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.cover {
  min-height: calc(100vh - 76px);
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
  color: #fff;
}

.cover__arrow-button {
  padding: 0;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: auto;
}

@media screen and (max-width: 1280px) {
  .cover {
    min-height: calc(100vh - 72px);
  }

  .cover__heading {
    font-size: 78px;
    line-height: 94px;
  }
}

@media screen and (max-width: 768px) {
  .cover__heading {
    font-size: 64px;
    line-height: 77px;
  }

  @media screen and (max-width: 540px) {
    .cover {
      min-height: calc(100vh - 64px);
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
