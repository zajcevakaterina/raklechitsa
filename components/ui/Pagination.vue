<template>
  <div class="pagination">
    <div
      v-for="index in pagesCount"
      :key="index"
      @click="setActive(index)"
      :class="[
        'pagination__item',
        {
          pagination__item_active: index === active,
        },
      ]"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalItems: {
      type: Number,
      default: 0,
    },
    itemsPerPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  methods: {
    setActive(index) {
      this.active = index;
      this.$emit('onPageChanged', index);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 140px 0 100px 0;
}

.pagination__item {
  width: 58px;
  height: 58px;
  margin-right: 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  user-select: none;
  transition: background 0.3s;
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
.pagination__item:last-child {
  margin-right: 0px;
}
.pagination__item_active,
.pagination__item:hover {
  background-color: #f4f4f4;
}
@media screen and (max-width: 1280px) {
  .pagination {
    margin: 130px 0 90px 0;
  }
  .pagination__item {
    width: 56px;
    height: 56px;
  }
}

@media screen and (max-width: 1024px) {
  .pagination {
    margin: 110px 0 80px 0;
  }
  .pagination__item {
    width: 50px;
    height: 50px;
    font-size: 15px;
    line-height: 18px;
  }
}
@media screen and (max-width: 768px) {
  .pagination {
    margin: 130px 0 80px 0;
  }
}

@media screen and (max-width: 475px) {
  .pagination {
    margin: 50px 0 50px 0;
  }
}
</style>
