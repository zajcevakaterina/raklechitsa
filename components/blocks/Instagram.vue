<template>
  <section class="insta">
    <div class="insta__cover">
      <p class="insta__cover-text">
        {{ tagLeadInstaTitle }}
        <span class="insta__hashtag">{{ tagLeadInstaHashtag }}</span>
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
.insta__title-link {
  color: #000;
  text-decoration: none;
  border-bottom: 2px solid #000;
}

.insta__title-link:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}

.insta__text {
  margin-top: 32px;
}

.insta__desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

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

.insta__container {
  display: grid;
  grid-template-columns: fit-content(340px) 1fr;
  justify-content: space-between;
  margin: 0 auto;
}

.insta__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
  margin: 0 0 100px 110px;
  column-gap: 30px;
  row-gap: 30px;
}

@media screen and (max-width: 1280px) {
  .insta__text {
    margin-top: 30px;
  }

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
  .insta__desc {
    padding-top: 10px;
  }

  .insta__cards {
    margin-bottom: 90px;
    column-gap: 27px;
    row-gap: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .insta__text {
    margin-top: 20px;
  }

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

  .insta__cards {
    margin-bottom: 80px;
    margin-left: 60px;
    column-gap: 20px;
    row-gap: 20px;
  }
}

@media screen and (max-width: 768px) {
  .insta__text {
    margin-top: 26px;
  }

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
  .insta__desc {
    padding-top: 6px;
    align-items: center;
  }

  .insta__container {
    grid-template-columns: 1fr;
    grid-template-rows: fit-content(140px) 1fr;
  }

  .insta__cards {
    grid-template-columns: repeat(4, 1fr);
    margin: 60px 0 80px;
  }
}

@media screen and (max-width: 475px) {
  .insta__text {
    margin-top: 16px;
  }

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

  .insta__desc {
    padding-top: 0px;
    align-items: flex-start;
  }

  .insta__cards {
    grid-template-columns: repeat(2, 1fr);
    margin: 43px 0 50px;
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>
