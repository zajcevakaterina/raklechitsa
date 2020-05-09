<template>
  <div class="tabs">
    <ul class="tabs__list">
      <li
        v-for="tab in tabsData"
        :key="tab.id"
        :class="tab.class"
        class="tabs__link "
      >
        {{ tab.name }}
      </li>
    </ul>
    <div class="tabs__content">
      <p
        v-for="tab in tabsData"
        class="tabs__text"
        :key="tab.id"
        :name="tab.name"
        :content="tab.content"
      >
        {{ tab.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tabsData'],
  data() {
    return {
      tabs: [],
    };
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}
.tabs__content {
  display: flex;
  flex-direction: column;
}
.tabs__text {
  max-width: 630px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
.tabs__link {
  width: 115px;
  color: #a2a2a2;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin: 0 0 10px;
  list-style: none;
  margin-right: 28px;
  cursor: pointer;
}

.tabs__link:hover {
  font-weight: normal;
}

.tabs__link_active {
  color: #000000;
}
</style>
