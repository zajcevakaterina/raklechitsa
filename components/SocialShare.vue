<template>
  <div class="social">
    <h2 class="social__title">Поделитесь</h2>
    <ul class="icons__list">
      <li class="icons__item" v-for="link in links" :key="link.id">
        <a :href="link.url" class="icons__link" target="_blank"
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
          url:
            'https://www.facebook.com/sharer.php?src=sp&u=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2',
        },
        {
          id: 2,
          name: 'twitter',
          url:
            'https://twitter.com/intent/tweet?text=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&url=https%3A%2F%2Fraklechitsa.ru%2F&utm_source=share2',
        },
        {
          id: 3,
          name: 'vkontakte',
          url:
            'https://vk.com/share.php?url=https%3A%2F%2Fraklechitsa.ru%2F&title=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4%20%E2%80%94%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BB%D1%8E%D0%B4%D0%B5%D0%B9%2C%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%B8%D0%B2%D1%88%D0%B8%D1%85%20%D1%80%D0%B0%D0%BA%2C%20%D0%BD%D0%BE%20%D0%BD%D0%B5%20%D1%81%D0%B2%D0%BE%D0%B8%20%D0%BF%D1%80%D0%B8%D0%B2%D1%8B%D1%87%D0%BA%D0%B8&utm_source=share2',
        },
        {
          id: 4,
          name: 'odnoklassniki',
          url:
            'https://connect.ok.ru/dk?st.cmd=OAuth2Login&st.layout=w&st.redirect=%252Fdk%253Fcmd%253DWidgetSharePreview%2526amp%253Bst.cmd%253DWidgetSharePreview%2526amp%253Bst.title%253D%2525D0%2525A0%2525D0%252590%2525D0%25259A%2525D0%25259B%2525D0%252595%2525D0%2525A7%2525D0%252598%2525D0%2525A2%2525D0%2525A1%2525D0%2525AF.%2525D0%2525A0%2525D0%2525A4%252B%2525E2%252580%252594%252B%2525D0%2525B8%2525D1%252581%2525D1%252582%2525D0%2525BE%2525D1%252580%2525D0%2525B8%2525D0%2525B8%252B%2525D0%2525BB%2525D1%25258E%2525D0%2525B4%2525D0%2525B5%2525D0%2525B9%25252C%252B%2525D0%2525BF%2525D0%2525BE%2525D0%2525B1%2525D0%2525B5%2525D0%2525B4%2525D0%2525B8%2525D0%2525B2%2525D1%252588%2525D0%2525B8%2525D1%252585%252B%2525D1%252580%2525D0%2525B0%2525D0%2525BA%25252C%252B%2525D0%2525BD%2525D0%2525BE%252B%2525D0%2525BD%2525D0%2525B5%252B%2525D1%252581%2525D0%2525B2%2525D0%2525BE%2525D0%2525B8%252B%2525D0%2525BF%2525D1%252580%2525D0%2525B8%2525D0%2525B2%2525D1%25258B%2525D1%252587%2525D0%2525BA%2525D0%2525B8%2526amp%253Bst.shareUrl%253Dhttps%25253A%25252F%25252Fraklechitsa.ru%25252F&st._wt=1&st.client_id=-1',
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
.icons__list {
  padding: 0;
  list-style: none;
  margin: 108px auto 68px;
  display: flex;
  align-items: center;
}

.icons__link:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
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

@media screen and (max-width: 475px) {
  .social__title {
    font-size: 18px;
    line-height: 1.17;
  }
  .icons__image {
    width: 23px;
    height: 23px;
  }
  .icons__item {
    margin: 0;
  }
  .icons__list {
    width: 100%;
    justify-content: space-between;
    margin: 65px auto 50px;
  }
}
</style>
