<template>
  <section class="insta">
    <div class="insta__cover">
      <p class="insta__cover-text">
        {{ tagLeadInstaTitle }}
        <span class="insta__hashtag">
          {{ tagLeadInstaHashtag }}
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tagLeadInstaTitle: {
      type: String,
    },
    tagLeadInstaHashtag: {
      type: String,
    },
  },
};
</script>

<style scoped>
.insta__cover {
  width: 100%;
  background: #613a93;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 17px 5px;
  margin-bottom: 100px;
  min-height: 130px;
}

.insta__cover-text {
  text-transform: uppercase;
  font-size: 30px;
  line-height: 1.33;
  margin: 0;
  color: #fff;
  max-width: 750px;
  text-align: center;
}

.insta__hashtag {
  font-weight: 800;
  font-size: 40px;
}

@media screen and (max-width: 1280px) {
  .insta__cover {
    padding-top: 18px;
    margin-bottom: 91px;
  }

  .insta__cover-text {
    font-size: 28px;
    line-height: 1.4;
  }

  .insta__hashtag {
    font-size: 38px;
  }
}

@media screen and (max-width: 1024px) {
  .insta__cover {
    min-height: 80px;
    padding-top: 18px;
    margin-bottom: 80px;
  }

  .insta__hashtag {
    font-size: 34px;
  }

  .insta__cover-text {
    font-size: 24px;
    line-height: 40px;
  }
}

@media screen and (max-width: 768px) {
  .insta__cover {
    min-height: 100px;
    padding: 12px 0;
    margin-bottom: 76px;
  }

  .insta__cover-text {
    font-size: 22px;
    line-height: 1.24;
    text-align: center;
  }

  .insta__hashtag {
    font-size: 32px;
  }
}

@media screen and (max-width: 475px) {
  .insta__cover {
    min-height: 80px;
    padding: 15px 0;
    margin-bottom: 50px;
  }

  .insta__cover-text {
    font-size: 16px;
    line-height: 1.12;
    text-align: center;
    max-width: 220px;
  }

  .insta__hashtag {
    font-size: 20px;
  }
}
</style>
