<template>
  <footer class="footer">
    <div class="footer__content">
      <section-title
        >Спасибо всем, кто помог состояться этому проекту</section-title
      >
      <!-- <footer-menu /> -->
      <div class="footer__menu">
        <a href="/" class="footer__menu-link">Главная</a>
        <a href="/stories" class="footer__menu-link">Истории</a>
      </div>
      <div class="footer__social">
        <p class="footer__social-text">Мы в Инстаграме и Youtube</p>
        <a class="footer__social_link">Поделитесь ↗</a>
      </div>
    </div>
    <div class="footer__copyright">
      <span class="footer__copyright-text">Рак Лечится 2020</span>
      <span class="footer__copyright-text"
        >Сделано студентами Яндекс Практикум</span
      >
    </div>
  </footer>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import Menu from '@/components/Menu';
export default {
  components: {
    'section-title': SectionTitle,
    'footer-menu': Menu,
  },
};
</script>

<style scoped>
.footer {
  min-height: 356px;
  width: 100%;
  background-color: #fbfbfb;
  padding: 60px;
  flex-direction: column;
  display: flex;
}
.footer__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.footer__menu {
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}
.footer__menu-link {
  margin-right: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  color: #000000;
  height: fit-content;
}

.footer__menu-link:hover {
  color: #121212;
  opacity: 0.8;
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
  color: #000000;
}
.footer__social_link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
  color: #121212;
}
.footer__social_link:hover {
  opacity: 0.8;
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
</style>
