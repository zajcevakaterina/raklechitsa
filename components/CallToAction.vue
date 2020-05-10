<template>
  <section class="call-to-action">
    <section-title>Расскажите свою историю</section-title>
    <div class="call-to-action__content">
      <section-text
        >Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.
      </section-text>
      <main-tabs :tabsData="tabs" :theme="'call-to-action'" />
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionText from '@/components/ui/SectionText';
import Tabs from '@/components/Tabs';
export default {
  components: {
    'section-title': SectionTitle,
    'section-text': SectionText,
    'main-tabs': Tabs,
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
.call-to-action {
  width: 100%;
  min-height: 522px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  padding: 100px 60px 0;
}
.call-to-action__content {
  display: flex;
  justify-content: space-between;
}
</style>
