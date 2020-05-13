<template>
  <div>
    <Overlay @overlayClick="popupToggle" v-if="popupActive"></Overlay>
    <form v-if="popupActive" class="form">
      <img
        src="../static/closepopup.png"
        @click="popupToggle"
        class="form-button-close"
      />
      <slot></slot>
    </form>
  </div>
</template>

<script>
import Overlay from '@@/components/ui/Overlay';
export default {
  components: {
    Overlay,
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
.form {
  width: auto;
  height: auto;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  padding: 40px;
}

.form-button-close {
  border: none;
  background: none;
  position: absolute;
  top: 33px;
  right: 33px;
  z-index: 3;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .form-button-close {
    top: 33px;
    right: 33px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .form-button-close {
    top: 33px;
    right: 33px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .form-button-close {
    top: 33px;
    right: 33px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .form {
    padding: 15px;
  }

  .form-button-close {
    top: 8px;
    right: 8px;
  }
}
</style>
