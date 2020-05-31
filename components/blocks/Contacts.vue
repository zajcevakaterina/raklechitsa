<template>
  <form class="contacts" v-on:submit.prevent="submitContactsForm">
    <h3 class="contacts__title">Оставьте контакт для связи</h3>
    <p class="contacts__subtitle">
      Мы свяжемся с вами в течение недели, чтобы задать вопросы о вашей истории
      и разместить ее на сайте.
    </p>
    <contacts-input
      class="contacts__input"
      type="text"
      theme="contacts"
      placeholder="Напишите тут"
      labelText="Как вас зовут?"
      name="name"
      v-model="contacts.fullName"
    />

    <div class="contacts__input-container">
      <contacts-input
        class="contacts__input contacts__input_type_contacts"
        type="text"
        placeholder="pochta@example.com"
        labelText="Электронная почта"
        theme="contacts"
        name="e-mail"
        v-model="contacts.email"
      />
      <contacts-input
        class="contacts__input contacts__input_type_contacts"
        type="text"
        placeholder="+7 000 000 00 00"
        labelText="Телефон"
        theme="contacts"
        name="phone"
        v-model="contacts.phone"
      />
    </div>

    <contacts-input
      class="contacts__input"
      type="text"
      placeholder="Телефон / почта и удобное время"
      labelText="
        Напишите, если есть предпочтительный способ связи и удобное время
      "
      theme="contacts"
      name="preferred"
      v-model="contacts.preferred"
    />

    <div class="contacts__submit">
      <contacts-button class="contacts__submit-button" type="submit"
        >Отправить</contacts-button
      >
      <p class="contacts__policy">
        Нажимая на кнопку «отправить», вы даете согласие на
        <a class="contacts__policy-link" href="/policy" target="_blank"
          >обработку персональных данных</a
        >
      </p>
    </div>
  </form>
</template>

<script>
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default {
  components: {
    'contacts-input': Input,
    'contacts-button': Button,
  },
  data() {
    return {
      contacts: {
        fullName: '',
        email: '',
        phone: '',
        preferred: '',
      },
    };
  },

  methods: {
    closeContactsPopup() {
      this.$store.commit('popup/closeContactsPopup');
    },

    submitContactsForm() {
      console.log(this.contacts);
      this.closeContactsPopup();
    },
  },
};
</script>

<style scoped>
.contacts__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 1.12;
  margin: 0 0 40px;
}

.contacts__subtitle {
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  margin: 0 0 50px;
}

.contacts__input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contacts__input_type_contacts {
  flex-grow: 1;
}

.contacts__input_type_contacts:first-of-type {
  margin-right: 40px;
}

.contacts__submit {
  display: flex;
  align-items: center;
}

.contacts__submit-button {
  padding: 16px 0;
  width: 226px;
  font-weight: 500;
  margin-right: 30px;
}

.contacts__policy {
  font-size: 14px;
  line-height: 1.21;
  margin: 0;
  max-width: 378px;
  color: #666;
}

.contacts__policy-link {
  cursor: pointer;
  color: #666;
  text-decoration: none;
  border-bottom: 1px solid #666;
}

.contacts__policy-link:hover {
  opacity: 0.8;
  transition: opacity 0.3s linear;
}

@media screen and (max-width: 1280px) {
  .contacts__title {
    font-size: 28px;
    line-height: 1.14;
  }

  .contacts__subtitle {
    font-size: 16px;
    line-height: 1.37;
  }
}

@media screen and (max-width: 768px) {
  .contacts__title {
    font-size: 26px;
    line-height: 1.15;
    margin: 0 0 50px;
  }

  .contacts__subtitle {
    font-size: 15px;
    line-height: 1.27;
    margin: 0 0 40px;
  }

  .contacts__submit-button {
    padding: 13px 0;
    width: 200px;
  }

  .contacts__policy {
    font-size: 11px;
    line-height: 1.18;
    max-width: 270px;
  }
}

@media screen and (max-width: 425px) {
  .contacts__title {
    font-size: 18px;
    line-height: 1.17;
    margin: 0 0 35px;
    max-width: 185px;
  }

  .contacts__subtitle {
    font-size: 13px;
    line-height: 1.23;
    margin: 0 0 30px;
  }

  .contacts__input-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .contacts__input_type_contacts {
    width: 100%;
  }

  .contacts__submit {
    flex-direction: column;
    align-items: flex-start;
  }

  .contacts__submit-button {
    padding: 13px 0;
    width: 100%;
    margin: 0 0 10px;
  }

  .contacts__policy {
    width: 100%;
  }
}
</style>
