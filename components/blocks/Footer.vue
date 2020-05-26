<template>
  <footer class="footer">
    <container class="footer__container">
      <div class="footer__content">
        <div class="footer__title-menu">
          <section-title class="section__title_place_footer"
            >Спасибо всем, кто помог состояться этому проекту</section-title
          >
          <!-- <footer-menu /> -->

          <!--          старый код-->
          <!--          <div class="footer__menu">-->
          <!--            <a href="/" class="footer__link footer__link_type_menu">Главная</a>-->
          <!--            <a href="/stories" class="footer__link footer__link_type_menu"-->
          <!--              >Истории</a-->
          <!--            >-->
          <!--          </div>-->
        </div>
        <footer-menu class="footer__menu" />
        <div class="footer__social">
          <p class="footer__social-text">
            Мы в
            <a
              class="footer__link footer__link_type_social"
              href="https://www.instagram.com/raklechitsa/"
              target="_blank"
            >
              Инстаграме</a
            >
            и
            <a
              class="footer__link footer__link_type_social"
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              target="_blank"
              >Youtube</a
            >
          </p>
          <footer-button
            @btnClick="openSharePopup"
            :theme="'share'"
            class="footer__link footer__link_type_share"
            >Поделитесь &#8599;</footer-button
          >
        </div>
      </div>
      <div class="footer__copyright">
        <span class="footer__copyright-text"
          >Рак Лечится {{ new Date().getFullYear() }}</span
        >
        <span class="footer__copyright-text"
          >Сделано студентами
          <a href="https://praktikum.yandex.ru/" class="footer__praktikum-link"
            >Яндекс Практикум</a
          ></span
        >
      </div>
    </container>
  </footer>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import Menu from '@/components/Menu';
import Button from '@/components/ui/Button';
import Container from '@/components/Container';

export default {
  components: {
    'section-title': SectionTitle,
    'footer-menu': Menu,
    'footer-button': Button,
    container: Container,
  },
  methods: {
    openSharePopup() {
      this.$store.commit('popup/openSharePopup');
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #fbfbfb;
  width: 100%;
}
.footer__container {
  min-height: 356px;
  padding: 60px 0;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
}
.footer__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.footer__title-menu {
  display: flex;
  justify-content: space-between;
  max-width: 700px;
}
.footer__menu {
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  padding-right: 20%;
}

.footer__link {
  font-size: 18px;
  line-height: 24px;
  color: #000;
  height: fit-content;
  cursor: pointer;
  text-decoration: none;
}

/*TODO проверить наличие в разметке классов, которые указаны ниже*/
.footer__link_type_menu {
  margin-right: 40px;
  text-decoration: none;
}

.footer__link_type_menu:last-child {
  margin: 0;
}

.footer__link_type_menu:hover {
  color: #121212;
  opacity: 0.8;
  transition: opacity 0.3 linear;
}

.footer__social {
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 88px;
  justify-content: space-between;
}

.footer__social-text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  margin: 0;
}
.footer__link_type_share {
  font-size: 18px;
  line-height: 24px;
  text-align: left;
}

.footer__link_type_social {
  border-bottom: 1px solid #000;
}

.footer__link:hover {
  opacity: 0.8;
  transition: opacity 0.3 linear;
}

.footer__copyright {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: auto;
}
.footer__copyright-text {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #898989;
}
.section__title_place_footer {
  max-width: 340px;
}
.footer__praktikum-link {
  text-decoration: none;
  color: #898989;
}

@media screen and (max-width: 1280px) {
  .footer__container {
    min-height: 316px;
    padding: 50px 0;
  }
  .section__title_place_footer {
    max-width: 305px;
  }
  .footer__menu {
    padding-right: 20%;
  }
  .footer__social {
    width: 264px;
  }
  .footer__link {
    font-size: 16px;
  }
  .footer__social-text {
    font-size: 16px;
  }
  .footer__copyright-text {
    font-size: 16px;
  }
}
@media screen and (max-width: 1024px) {
  .footer__container {
    min-height: 292px;
    padding: 50px 0;
  }
  .footer__social {
    width: 381px;
  }
  .footer__menu {
    padding-right: 20%;
  }
  .section__title_place_footer {
    max-width: 288px;
  }
  .footer__title-menu {
    width: 50%;
  }
}
@media screen and (max-width: 950px) {
  .section__title_place_footer {
    max-width: 268px;
  }
  .footer__title-menu {
    width: 60%;
  }
  .footer__menu {
    flex-direction: column;
    padding-right: 20%;
  }
  .footer__social {
    width: 226px;
  }
  ::v-deep .menu__links {
    flex-direction: column;
  }
  ::v-deep .nuxt-link-exact-active {
    border-bottom: none;
  }
  ::v-deep .menu__link-wrapper {
    margin-bottom: 16px;
  }
}
@media screen and (max-width: 660px) {
  .section__title_place_footer {
    max-width: 290px;
    font-size: 18px;
    line-height: 1.17;
    margin-bottom: 42px;
  }
  .footer__content {
    flex-direction: column;
  }
  .footer__title-menu {
    flex-direction: column;
  }
  .footer__title-menu {
    width: 100%;
  }
  .footer__link {
    font-size: 13px;
    line-height: 1.15;
    margin-bottom: 18px;
  }
  .footer__link_type_menu:last-child {
    margin-bottom: 18px;
  }
  .footer__social {
    min-height: 0;
  }
  .footer__social-text {
    font-size: 13px;
    line-height: 1.15;
    margin-bottom: 18px;
  }
  .footer__copyright {
    flex-direction: column;
    margin-top: 40px;
  }
  .footer__copyright-text {
    font-size: 13px;
    line-height: 1.15;
    margin-bottom: 10px;
  }
  .footer__copyright-text:last-child {
    margin: 0;
  }
}
</style>
