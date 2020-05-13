<template>
  <div class="wrapper">
    <section class="call-to-action root__section">
      <section-title>Расскажите свою историю</section-title>
      <div class="call-to-action__content">
        <section-text
          >Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </section-text>
        <main-tabs :tabsData="tabs" :theme="'call-to-action'">
          <action-button class="call-to-action__action-button">Заполнить форму</action-button
          >
        </main-tabs>
      </div>
    </section>
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionText from '@/components/ui/SectionText';
import Button from '@/components/ui/Button';
import Tabs from '@/components/Tabs';
export default {
  components: {
    'section-title': SectionTitle,
    'section-text': SectionText,
    'main-tabs': Tabs,
    'action-button': Button,
  },
  data() {
    return {
      tabs: [
        {
          id: '1',
          name: '1-й вариант',
          content:
            'Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю после проверки. Пожалуйста, заполняйте все пункты корректно, если вы испытаете какие-то сложности, воспользуйтесь 2-м вариантом.',
        },
        {
          id: '2',
          name: '2-й вариант',
          content:
            'Оставить контакт (почту или номер телефона) и мы свяжемся с вами, зададим вопросы, уточним детали вашей истории.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  background: #f7f7f7;
  width: 100vw;
}

.call-to-action {
  min-height: 522px;
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  margin: 0 auto;
  box-sizing: border-box;
}
.call-to-action__content {
  display: flex;
  justify-content: space-between;
  flex: auto;
}
.call-to-action__action-button {
  margin: auto 0 0;
  width: 280px;
  height: 52px;
  font-size: 16px;
  line-height: 19px;
  padding: 0;
}

@media screen and (max-width: 1280px) {
  .call-to-action {
    min-height: 480px;
    padding: 90px 0;
  }
  .call-to-action__action-button {
    width: 230px;
    height: 48px;
  }
}
@media screen and (max-width: 1024px) {
  .call-to-action {
    min-height: 436px;
    padding: 80px 0;
  }
  .call-to-action__action-button {
    width: 230px;
    height: 46px;
    font-size: 15px;
    line-height: 18px;
  }
}
@media screen and (max-width: 768px) {
  .call-to-action {
    min-height: 598px;
    padding: 80px 0;
    align-items: center;
  }
  .call-to-action__content {
    flex-direction: column;
    align-items: center;
  }
}
@media screen and (max-width: 320px) {
  .call-to-action__action-button {
    width: 290px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
    padding: 0;
  }
}

@media screen and (max-width: 1280px) {
  .call-to-action {
    min-height: 480px;
    padding: 90px 0;
  }
}
@media screen and (max-width: 1024px) {
  .call-to-action {
    min-height: 436px;
    padding: 80px 0;
  }
}
@media screen and (max-width: 768px) {
  .call-to-action {
    min-height: 598px;
    padding: 80px 0;
    align-items: center;
  }
  .call-to-action__content {
    flex-direction: column;
    align-items: center;
  }
}
</style>
