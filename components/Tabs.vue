<template>
  <div class="tabs">
    <ul class="tabs__list">
      <li
        class="tabs__link"
        v-for="(tab, index) in tabsData"
        :key="tab.id"
        :class="[{ ['active_' + theme]: show == index }, `tabs__link_${theme}`]"
        @click.prevent="show = index"
      >
        {{ tab.name }}
      </li>
    </ul>
    <div class="tabs__content">
      <p
        class="tabs__text"
        :class="`tabs__text_${theme}`"
        v-for="(tab, index) in tabsData"
        v-if="show === index"
        :key="index"
        v-html="tab.content"
      ></p>
      <p
        class="tabs__text"
        :class="`tabs__text_${theme}`"
        v-for="(tab, index) in tabsData"
        v-if="show === index && tab.content2"
        :key="tab.id"
        v-html="tab.content2"
      ></p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tabsData', 'theme'],
  data() {
    return {
      show: 0,
    };
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: space-between;
  margin: 32px 0 0;
}
.tabs__list {
  list-style: none;
}
.tabs__link {
  cursor: pointer;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
}

.tabs__link_call-to-action {
  color: #a2a2a2;
}
.tabs__link_call-to-action:hover {
  color: #000000;
}
.active_call-to-action {
  color: #000000;
}

.tabs__link_about {
  color: #c9c9c9;
}
.tabs__link_about:hover {
  color: #ffffff;
}
.active_about {
  color: #ffffff;
}
.tabs__content {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}
.tabs__text {
  display: flex;
  flex-direction: column;
  max-width: 640px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 20px;
}
.tabs__text:last-child {
  margin-bottom: 0;
}

.tabs__text_call-to-action {
  color: #666666;
}
.tabs__text_about {
  color: #dedede;
}
</style>
