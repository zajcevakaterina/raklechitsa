<template>
  <section class="call-to-action">
    <container class="call-to-action__container">
      <section-title class="call-to-action__title" v-html="callBlock.title" />
      <div class="call-to-action__content">
        <section-text
          class="call-to-action__section-text"
          v-html="callBlock.text"
        />
        <main-tabs
          v-on:tab-changed="tabIndex = $event"
          :tabsData="actions"
          theme="call-to-action"
        >
          <action-button
            v-if="tabIndex === 0"
            @btnClick="openQuizPopup"
            class="call-to-action__action-button"
            >Заполнить форму</action-button
          >
          <action-button
            v-else
            @btnClick="openContactsPopup"
            class="call-to-action__action-button"
            >Оставить контакт</action-button
          >
        </main-tabs>
      </div>
    </container>
  </section>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import SectionText from '@/components/ui/SectionText';
import Button from '@/components/ui/Button';
import Tabs from '@/components/Tabs';
import Container from '@/components/Container';

export default {
  components: {
    'section-title': SectionTitle,
    'section-text': SectionText,
    'main-tabs': Tabs,
    'action-button': Button,
    container: Container,
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    openQuizPopup() {
      this.$store.commit('popup/openQuizPopup');
    },
    openContactsPopup() {
      this.$store.commit('popup/openContactsPopup');
    },
  },
  computed: {
    actions() {
      return this.$store.getters['call-to-action/getAction'];
    },
    callBlock() {
      return this.$store.getters['blocks/getCurrentBlock']('story');
    },
  },
};
</script>

<style scoped>
.call-to-action {
  background: #f7f7f7;
  width: 100%;
}

.call-to-action__container {
  min-height: 522px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
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
}

@media screen and (max-width: 1280px) {
  .call-to-action__container {
    min-height: 487px;
    padding: 90px 0;
  }
  .call-to-action__action-button {
    width: 230px;
    height: 48px;
  }
}
@media screen and (max-width: 1024px) {
  .call-to-action__container {
    min-height: 436px;
    padding: 80px 0;
  }
  .call-to-action__action-button {
    width: 230px;
    height: 46px;
  }
}
@media screen and (max-width: 768px) {
  .call-to-action__container {
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
@media screen and (max-width: 425px) {
  .call-to-action__container {
    min-height: 462px;
    padding: 50px 0;
    align-items: flex-start;
  }

  .call-to-action__title {
    text-align: left;
  }

  .call-to-action__action-button {
    width: 100%;
    height: 40px;
  }
  .call-to-action__section-text {
    margin: 16px 0 0;
  }
}
</style>
