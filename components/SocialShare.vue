<template>
  <div class="social">
    <h2 class="social__title">Поделитесь</h2>
    <ul class="icons__list">
      <li class="icons__item" v-for="link in links" :key="link.id">
        <a :href="link.Url" class="icons__link"
          ><img
            :src="`/social-icons/${link.name}.svg`"
            class="icons__image"
            target="blank"
            alt="#"
        /></a>
        <!-- TODO:подставить нужные ссылки -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 1,
          name: 'facebook',
          Url: 'https://www.instagram.com/raklechitsa/',
        },
        {
          id: 2,
          name: 'twitter',
          Url: 'https://www.instagram.com/raklechitsa/',
        },
        {
          id: 3,
          name: 'vkontakte',
          Url: 'https://www.instagram.com/raklechitsa/',
        },
        {
          id: 4,
          name: 'odnoklassniki',
          Url: 'https://www.instagram.com/raklechitsa/',
        },
        {
          id: 5,
          name: 'instagram',
          Url: 'https://www.instagram.com/raklechitsa/',
        },
        {
          id: 6,
          name: 'youtube',
          Url: 'https://www.instagram.com/raklechitsa/',
        },
      ],
    };
  },
};
</script>

<style scoped>
.social {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icons__list {
  padding: 0;
  list-style: none;
  margin: 108px auto 68px;
  display: flex;
  align-items: center;
}

.icons__item {
  margin-left: 42px;
}

.icons__item:first-child {
  margin-left: 0px;
}

.social__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 1.12;
  margin: 0;
  padding: 0;
  text-align: center;
}

@media screen and (max-width: 1280px) {
  .social__icons {
    margin: 100px 165px 60px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .social__icons {
    margin: 100px 58px 60px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .social__icons {
    margin: 70px 0px 35px;
  }

  .social__title {
    font-size: 18px;
    line-height: 21px;
  }
  .icons__image {
    width: 30px;
  }
}
</style>
