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
  margin: 0;
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
  margin: 0 0 20px;
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

@media screen and (max-width: 1280px) {
  .tabs {
    margin: 30px 0 0;
  }
  .tabs__text {
    max-width: 570px;
  }
}
@media screen and (max-width: 1024px) {
  .tabs {
    margin: 20px 0 0;
  }
  .tabs__link {
    margin-bottom: 8px;
    font-size: 15px;
    line-height: 1.27;
  }
  .tabs__content {
    margin-left: 30px;
  }
  .tabs__text {
    max-width: 447px;
    font-size: 15px;
    line-height: 1.27;
  }
}

@media screen and (max-width: 768px) {
  .tabs {
    margin: 80px 0 0;
    flex-direction: column;
    flex: auto;
  }
  .tabs__link {
    margin-bottom: 24px;
    font-size: 15px;
    line-height: 1.27;
    margin-right: 30px;
  }
  .tabs__link:last-child {
    margin-right: 0px;
  }
  .active_call-to-action {
    border-bottom: #613a93 solid 2px;
  }
  .active_about {
    border-bottom: #ffffff solid 2px;
  }
  .tabs__content {
    margin-left: 0px;
    flex: auto;
    justify-content: space-between;
  }
  .tabs__list {
    display: flex;
    padding: 0;
  }
  .tabs__text {
    font-size: 15px;
    line-height: 1.27;
    max-width: 380px;
  }
}
@media screen and (max-width: 320px) {
  .tabs {
    margin: 40px 0 0;
    flex-direction: column;
    flex: auto;
  }
  .tabs__text_call-to-action {
    font-size: 13px;
    line-height: 1.23;
  }
}
</style>
