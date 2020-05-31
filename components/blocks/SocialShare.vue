<template>
  <div class="social">
    <h2 class="social__title">Поделитесь</h2>
    <ul class="social__list">
      <li class="social__item" v-for="link in links" :key="link.id">
        <a :href="link.url" class="social__link" target="_blank"
          ><img
            :src="`/social-icons/${link.name}.svg`"
            class="social__image"
            target="_blank"
            alt="#"
        /></a>
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
          url: `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(
            window.location.href
          )}&title=${document.querySelector('title').innerText}`,
        },
        {
          id: 2,
          name: 'twitter',
          url: `https://twitter.com/intent/tweet?text=${
            document.querySelector('title').innerText
          }&url=${encodeURI(window.location.href)}`,
        },
        {
          id: 3,
          name: 'vkontakte',
          url: `https://vk.com/share.php?url=${encodeURI(
            window.location.href
          )}&title=${document.querySelector('title').innerText}`,
        },
        {
          id: 4,
          name: 'odnoklassniki',
          url: `https://connect.ok.ru/offer?url=${encodeURI(
            window.location.href
          )}&amp;title=${document.querySelector('title').innerText}`,
        },
        {
          id: 5,
          name: 'instagram',
          url: 'https://www.instagram.com/raklechitsa/',
        },
        {
          id: 6,
          name: 'youtube',
          url:
            'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
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
.social__list {
  padding: 0;
  list-style: none;
  margin: 108px auto 68px;
  display: flex;
  align-items: center;
}

.social__link:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}

.social__item {
  margin-left: 42px;
}

.social__item:first-child {
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

@media screen and (max-width: 475px) {
  .social__title {
    font-size: 18px;
    line-height: 1.17;
  }
  .social__image {
    width: 23px;
    height: 23px;
  }
  .social__item {
    margin: 0;
  }
  .social__list {
    width: 100%;
    justify-content: space-between;
    margin: 65px auto 50px;
  }
}
</style>
