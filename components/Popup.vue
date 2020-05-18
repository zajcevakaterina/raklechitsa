<template>
  <overlay @overlayClick="popupToggle" v-if="popupActive">
    <div class="popup">
      <slot></slot>
      <div @click="$emit('closePopup')" class="popup__close-button"></div>
    </div>
  </overlay>
</template>

<script>
import Overlay from '@@/components/ui/Overlay';
export default {
  components: {
    overlay: Overlay,
  },

  methods: {
    popupToggle() {
      this.popupActive = !this.popupActive;
    },
  },

  data() {
    return {
      popupActive: true,
    };
  },
};
</script>

<style scoped>
.popup {
  width: 90%;
  max-width: 920px;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: #fff;
  padding: 40px;
}

.popup__close-button {
  border: none;
  width: 25px;
  height: 25px;
  background: none;
  position: absolute;
  top: 33px;
  right: 33px;
  /* z-index: 3; */
  background-image: url(/popup/closepopup.png);
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .popup {
    max-width: 800px;
  }
}

@media screen and (max-width: 768px) {
  .popup {
    max-width: 580px;
  }
}

@media screen and (max-width: 580px) {
  .popup {
    max-width: 290px;
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
