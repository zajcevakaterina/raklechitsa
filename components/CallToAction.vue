<template>
  <section class="call-to-action">
    <div class="call-to-action__entry">
      <section-title>Расскажите свою историю</section-title>
      <section-text
        >Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
        поделиться своей историей неизлечимых привычек, навязчивых идей и
        болезненных привязанностей.</section-text
      >
    </div>
    <main-tabs :tabsData="tabs" />
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
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          class: 'tabs__link_active',
        },
        {
          id: '2',
          name: '2-й вариант',
          content:
            'Voluptate itaque dignissimos molestiae, totam ut corrupti atque',
          class: '',
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
  justify-content: space-between;
  padding: 100px 60px 0;
}
.call-to-action__entry {
  width: 340px;
  display: flex;
  flex-direction: column;
}
</style>
