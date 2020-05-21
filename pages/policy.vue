<template>
  <div class="policy">
    <policy-title class="policy__title">{{ policy.title }}</policy-title>

    <article class="policy__text" v-html="policy.text"></article>

    <!-- ниже вариант, если захардкодить. а вообще начала стилизовать теги потихоньку. маркеры все портят ))) -->
    <!-- <ol class="policy__list">
      <li class="policy__item">
        <h2 class="policy__item-title">1. Общие положения</h2>
        <policy-text class="policy__text">
          Настоящая политика обработки персональных данных составлена в
          соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ
          «О персональных данных» и определяет порядок обработки персональных
          данных и меры по обеспечению безопасности персональных данных
          Благотворительный Фонд Константина Хабенского (далее – Оператор).
        </policy-text>
      </li>
      <ol class="policy__item-list">
        <li class="policy__item-list-point">
          <policy-text class="policy__text">
            Оператор ставит своей важнейшей целью и условием осуществления своей
            деятельности соблюдение прав и свобод человека и гражданина при
            обработке его персональных данных, в том числе защиты прав на
            неприкосновенность частной жизни, личную и семейную тайну.
          </policy-text>
        </li>
        <li class="policy__item-list-point">
          <policy-text class="policy__text">
            Настоящая политика Оператора в отношении обработки персональных
            данных (далее – Политика) применяется ко всей информации, которую
            Оператор может получить о посетителях веб-сайта
            http://raklechitsa.ru.
          </policy-text>
        </li>
      </ol>
      <li class="policy__item">
        <h2 class="policy__item-title">2. Основные понятия, используемые в Политике</h2>
      </li>
      <ol class="policy__item-list">
        <li class="policy__item-list-point">
          <policy-text class="policy__text">
            Автоматизированная обработка персональных данных – обработка
            персональных данных с помощью средств вычислительной
            техники;
          </policy-text>
        </li>
      </ol>
    </ol> -->
  </div>
</template>

<script>
import ArticleTitle from '@/components/ui/ArticleTitle';
import ArticleColumn from '@/components/ui/ArticleColumn';
export default {
  components: {
    'policy-title': ArticleTitle,
    'policy-text': ArticleColumn,
  },

  computed: {
    policy() {
      return this.$store.getters['policy/getPolicy'];
    },
  },
};
</script>

<style scoped>
.policy {
  max-width: 780px;
  margin: 0 auto;
}

.policy__title {
  text-align: center;
  margin: 100px auto;
  padding: 30px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

/* .policy__list */
.policy__text >>> ol {
  margin: 0;
  padding: 0;
}

h2:first-of-type {
  margin-top: 100px;
}

/* .policy__item-title  */
.policy__text >>> h2 {
  font-weight: 600;
  font-size: 22px;
  line-height: 1.36;
  margin: 90px 0 40px;
}

.policy__text >>> li,
.policy__text >>> p {
  margin: 0 0 30px;
}

/* .policy__item-list  */
ol >>> ol {
  margin-left: 24px;
  padding: 0;
  font-size: 22px;
  line-height: 1.36;
}

/* .policy__item-list-point */
.policy__text >>> li {
  padding-left: 14px;
}

@media screen and (max-width: 1280px) {
  .policy {
    max-width: 700px;
  }

  .policy__title {
    margin: 90px auto;
  }

  .policy__item-title,
  .policy__item-list {
    font-size: 20px;
    line-height: 1.4;
  }
}

@media screen and (max-width: 1024px) {
  .policy {
    max-width: 640px;
  }
  .policy__title {
    margin: 80px auto;
  }

  .policy__item-title,
  .policy__item-list {
    font-size: 18px;
    line-height: 1.5;
  }

  .policy__item-list-point {
    padding-left: 8px;
  }
}

@media screen and (max-width: 670px) {
  .policy {
    max-width: 425px;
  }
}

@media screen and (max-width: 440px) {
  .policy {
    max-width: 290px;
  }
  .policy__title {
    margin: 50px auto 40px;
    padding: 20px 0;
  }

  .policy__item-title {
    font-size: 13px;
    line-height: 1.23;
    margin: 20px 0;
  }

  .policy__item-list {
    margin-left: 16px;
    font-size: 13px;
    line-height: 1.23;
  }

  .policy__item-list-point {
    padding-left: 4px;
  }
}
</style>
