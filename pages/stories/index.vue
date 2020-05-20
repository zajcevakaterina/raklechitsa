<template>
  <div class="root__section">
    <stories :stories="renderStories" class="stories">
      Сюда еще добавим инпут и поиск
    </stories>
    <pagination
      :totalItems="this.$store.state.stories.stories.length"
      :itemsPerPage="itemsPerPage"
      @onPageChanged="changeStartIndex"
    />
  </div>
</template>

<script>
import Stories from '@/components/blocks/Stories';
import Pagination from '@/components/ui/Pagination';
export default {
  data() {
    return {
      itemsPerPage: 16,
      startIndex: 0,
    };
  },
  components: {
    stories: Stories,
    pagination: Pagination,
  },
  computed: {
    renderStories() {
      const { stories } = this.$store.state;
      return stories.stories.filter(
        (item, idx) =>
          idx >= this.startIndex &&
          idx <= this.startIndex + this.itemsPerPage - 1
      );
    },
  },
  methods: {
    changeStartIndex(index) {
      this.startIndex = (index - 1) * this.itemsPerPage;
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
  padding-top: 98px;
}
</style>
