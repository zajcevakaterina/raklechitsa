<template>
  <container class="container">
    <stories :stories="renderStories" :totalItems="totalItems" class="stories">
      <form class="stories__form" v-on:submit.prevent="findStories">
        <stories-input
          class="stories__input "
          v-model="searchText"
          :borderTheme="'stories'"
        >
        </stories-input>
        <stories-button
          type="submit"
          class="stories__button"
          :disabled="!searchText.length"
          >Поиск</stories-button
        >
        <stories-button
          type="submit"
          class="stories__button-mobile"
          :disabled="!searchText.length"
        ></stories-button>
      </form>
    </stories>
    <pagination
      :totalItems="totalItems"
      :itemsPerPage="itemsPerPage"
      @onPageChanged="changeStartIndex"
    />
  </container>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import Stories from '@/components/blocks/Stories';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Pagination from '@/components/ui/Pagination';
import Container from '@/components/ui/Container';

export default {
  data() {
    return {
      searchText: '',
      itemsPerPage: 16,
      startIndex: 0,
      texts: '',
      totalItems: this.$store.state.stories.stories.length,
    };
  },

  components: {
    stories: Stories,
    'stories-input': Input,
    'stories-button': Button,
    pagination: Pagination,
    container: Container,
    'stories-title': SectionTitle,
  },
  computed: {
    renderStories() {
      const { stories } = this.$store.state;

      if (this.texts !== '') {
        this.texts = this.texts.toLowerCase();
        const newTotalItems = stories.stories.filter(
          item =>
            item.author.toLowerCase().includes(this.texts) ||
            item.title.toLowerCase().includes(this.texts)
        );

        return newTotalItems.filter(
          (item, idx) =>
            idx >= this.startIndex &&
            idx <= this.startIndex + this.itemsPerPage - 1
        );
      } else {
        return stories.stories.filter(
          (item, idx) =>
            idx >= this.startIndex &&
            idx <= this.startIndex + this.itemsPerPage - 1
        );
      }
    },
  },
  methods: {
    changeStartIndex(index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
    },
    findStories(event) {
      this.texts = this.searchText;
      const { stories } = this.$store.state;
      const newTotalItems = stories.stories.filter(
        item =>
          item.author.toLowerCase().includes(this.texts) ||
          item.title.toLowerCase().includes(this.texts)
      );
      this.totalItems = newTotalItems.length;
    },
  },
  mounted() {
    if (process.browser) {
      if (window.innerWidth <= 768 && window.innerWidth > 475) {
        this.itemsPerPage = 12;
      } else if (window.innerWidth <= 475) {
        this.itemsPerPage = 9;
      } else {
        this.itemsPerPage = 16;
      }
    }
  },
};
</script>

<style scoped>
.stories {
  padding-top: 100px;
}
.stories__form {
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
}
.stories__input {
  height: 52px;
  flex: 1;
  margin-right: 20px;
}
.stories__button {
  width: 226px;
  height: 52px;
  padding: 0;
  background-color: #613a93;
}

.stories__button-mobile {
  background-color: #613a93;
  height: 46px;
  width: 46px;
  background-image: url(/button/magnifier.svg);
  padding: 0;
  background-position: center;
  background-repeat: no-repeat;
  display: none;
}

@media screen and (max-width: 1280px) {
  .stories {
    padding-top: 90px;
  }
  .stories__form {
    margin-bottom: 60px;
  }
  .stories__input {
    height: 48px;
  }
  .stories__button {
    height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .stories {
    padding-top: 80px;
  }
  .stories__form {
    margin-bottom: 46px;
  }
  .stories__input {
    height: 46px;
  }
  .stories__button {
    height: 46px;
    width: 208px;
  }
}

@media screen and (max-width: 768px) {
  .stories__form {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 475px) {
  .stories__button {
    display: none;
  }
  .stories__input {
    margin-right: 6px;
  }
  .stories__button-mobile {
    display: block;
  }
}

@media screen and (max-width: 320px) {
  .stories {
    padding-top: 50px;
  }
  .stories__form {
    margin-bottom: 30px;
  }
}
</style>
