<template>
  <div class="wrapper">
    <popup v-if="popupActive">
      <form-stories />
    </popup>
    <section class="call-to-action root__section">
      <section-title>Расскажите свою историю</section-title>
      <div class="call-to-action__content">
        <section-text class="call-to-action__section-text"
          >Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </section-text>
        <main-tabs :tabsData="actions" :theme="'call-to-action'">
          <action-button
            @btnClick="popupToggle"
            class="call-to-action__action-button"
            >Заполнить форму</action-button
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
import Popup from '@@/components/Popup';
import FormStories from '@@/components/FormStories';
export default {
  components: {
    'section-title': SectionTitle,
    'section-text': SectionText,
    'main-tabs': Tabs,
    'action-button': Button,
    popup: Popup,
    'form-stories': FormStories,
  },

  methods: {
    popupToggle() {
      this.popupActive = !this.popupActive;
    },
  },
  computed: {
    actions() {
      return this.$store.getters['call-to-action/getAction'];
    },
  },

  data() {
    return {
      popupActive: false,
    };
  },
};
</script>

<style scoped>
.wrapper {
  background: #f7f7f7;
  width: 100%;
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
  .call-to-action__section-text {
    margin: 26px 0 0;
  }
}
@media screen and (max-width: 320px) {
  .call-to-action {
    min-height: 462px;
    padding: 50px 0;
  }
  .call-to-action__action-button {
    width: 290px;
    height: 40px;
    font-size: 13px;
    line-height: 16px;
    padding: 0;
  }
  .call-to-action__section-text {
    margin: 16px 0 0;
  }
}
</style>
