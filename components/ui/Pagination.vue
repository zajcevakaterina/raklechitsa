<template>
  <div class="container">
    <div class="pagination">
      <div
        v-if="pagesCount !== 0"
        class="pagination__item-first"
        :class="{ 'pagination__item-first_disable': active === 1 }"
        @click="setActive(1)"
      >
        Первая
      </div>
      <div
        v-if="pagesCount !== 0"
        class="pagination__arrow pagination__arrow_left"
        @click="setActive(clickArrowsLeft(active - 1))"
      ></div>
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
        v-if="index >= page - indexPage && index <= page + indexPage"
      >
        {{ index }}
      </div>
      <div
        v-if="pagesCount !== 0"
        class="pagination__arrow pagination__arrow_right"
        @click="setActive(clickArrowsRight(active + 1))"
      ></div>
      <div
        v-if="pagesCount !== 0"
        class="pagination__item-last"
        :class="{ 'pagination__item-last_disable': active === pagesCount }"
        @click="setActive(pagesCount)"
      >
        Последняя
      </div>
    </div>
    <div class="pagination__mobile">
      <div
        class="pagination__mobile-first"
        v-if="pagesCount !== 0"
        :class="{ 'pagination__mobile-first_disable': active === 1 }"
        @click="setActive(1)"
      >
        Первая
      </div>
      <div
        class="pagination__mobile-last"
        v-if="pagesCount !== 0"
        :class="{ 'pagination__mobile-last_disable': active === pagesCount }"
        @click="setActive(pagesCount)"
      >
        Последняя
      </div>
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
      page: 3,
      indexPage: 2,
      firstPage: 3,
      lastPage: 2,
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

      console.log(index);
      if (
        index > 2 &&
        index < Math.ceil(this.totalItems / this.itemsPerPage) - 1
      ) {
        this.page = index;
      } else if (index <= 2) {
        this.page = this.firstPage;
      } else {
        this.page =
          Math.ceil(this.totalItems / this.itemsPerPage) - this.lastPage;
      }
      this.$emit('onPageChanged', index);
    },
    clickArrowsRight(right) {
      if (this.active === this.pagesCount) {
        return this.active;
      } else {
        return right;
      }
    },
    clickArrowsLeft(left) {
      if (this.active === 1) {
        return this.active;
      } else {
        return left;
      }
    },
  },
  mounted() {
    if (process.browser) {
      if (window.innerWidth > 475) {
        this.indexPage = 2;
        this.page = 3;
        this.firstPage = 3;
        this.lastPage = 2;
      } else if (window.innerWidth <= 475) {
        this.indexPage = 1;
        this.page = 2;
        this.firstPage = 2;
        this.lastPage = 1;
      }
      console.log(this.indexPage);
    }
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 89px 0 100px 0;
}
.container {
  display: flex;
  flex-direction: column;
}
.pagination__mobile {
  display: none;
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

.pagination__item-first {
  margin-right: 10px;
  cursor: pointer;
}
.pagination__item-last {
  cursor: pointer;
}
.pagination__item_active,
.pagination__item:hover {
  background-color: #f4f4f4;
}
.pagination__item-first_disable,
.pagination__item-last_disable,
.pagination__mobile-first_disable,
.pagination__mobile-last_disable {
  color: #a2a2a2;
}
.pagination__arrow {
  width: 58px;
  height: 58px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  user-select: none;
  display: flex;
  font-style: normal;
}
.pagination__arrow_right {
  background-image: url('/arrows/right_arrow.svg');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.pagination__arrow_left {
  background-image: url('/arrows/left_arrow.svg');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .pagination {
    margin: 89px 0 90px 0;
  }
  .pagination__item {
    width: 56px;
    height: 56px;
  }
}

@media screen and (max-width: 1024px) {
  .pagination {
    margin: 82px 0 80px 0;
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
    margin: 90px 0 80px 0;
  }
}

@media screen and (max-width: 475px) {
  .pagination {
    margin: 10px 0 34px 0;
  }
  .pagination__item-first {
    display: none;
  }
  .pagination__item-last {
    display: none;
  }
  .pagination__mobile {
    display: flex;
    justify-content: space-between;
    margin: 0 0 50px 0;
  }
  .pagination__arrow {
    width: 11px;
    height: 16px;
    margin-right: 0px;
  }
  .pagination__arrow_right {
    margin-left: 20px;
  }
  .pagination__arrow_left {
    margin-right: 30px;
  }
}
</style>
