<template>
  <div>
    <Overlay @overlayClick="popupToggle" v-if="popupActive"></Overlay>
    <form v-if="popupActive" class="form">
      <button @click="popupToggle" class="form-button-close">+</button>
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
  width: 920px;
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
  transform: rotate(-45deg);
  font-size: 45px;
  position: absolute;
  top: 25px;
  right: 30px;
  z-index: 3;
}

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .form {
    width: 800px;
  }

  .form-button-close {
    font-size: 35px;
    top: 5px;
    right: 6px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279px) {
  .form {
    width: 800px;
  }

  .form-button-close {
    font-size: 35px;
    top: 5px;
    right: 6px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .form {
    width: 580px;
  }

  .form-button-close {
    font-size: 35px;
    top: 5px;
    right: 6px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .form {
    width: 290px;
    padding: 15px;
  }

  .form-button-close {
    font-size: 40px;
    top: 2px;
    right: 6px;
  }
}
</style>
