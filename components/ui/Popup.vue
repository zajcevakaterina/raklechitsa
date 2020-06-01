<template>
  <div class="popup">
    <div class="popup__overlay" @click="$emit('overlayClick')"></div>
    <div class="popup__content" :class="[marginTopToSet]">
      <slot></slot>
      <div @click="$emit('closePopup')" class="popup__close-button"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    marginTopToSet() {
      if (process.browser) {
        if (window.innerHeight <= 710 && window.innerWidth >= 476) {
          return 'popup__content_type_wide-screens';
        } else if (window.innerHeight <= 666 && window.innerWidth <= 475) {
          return 'popup__content_type_thin-screens';
        }
      }
      // Вычисляет значение верхнего margin на устройствах с маленькой высотой экрана. Включается скролл, но сверху над попапом имеем отступ
    },
  },
};
</script>

<style scoped>
.popup__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.popup__content {
  width: 90%;
  max-width: 920px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #fff;
  padding: 40px;
  box-sizing: border-box;
}

.popup__content_type_wide-screens {
  margin: 70px auto 0;
  max-height: calc(100vh - 90px);
}

.popup__content_type_thin-screens {
  max-height: calc(100vh - 17px);
  margin: 17px auto 0;
}

.popup__close-button {
  border: none;
  width: 25px;
  height: 25px;
  background: none;
  position: absolute;
  top: 33px;
  right: 33px;
  background-image: url(/popup/closepopup.png);
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .popup__content {
    max-width: 800px;
  }
}

@media screen and (max-width: 768px) {
  .popup__content {
    max-width: 580px;
  }
}

@media screen and (max-width: 580px) {
  .popup__content {
    max-width: 90%;
    padding: 15px;
  }

  .popup__close-button {
    width: 18px;
    height: 18px;
    top: 15px;
    right: 15px;
  }
}
</style>
