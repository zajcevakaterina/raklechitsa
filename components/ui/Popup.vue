<template>
  <div class="popup">
    <div class="popup__overlay" @click="$emit('overlayClick')"></div>
    <div class="popup__content">
      <slot></slot>
      <div @click="$emit('closePopup')" class="popup__close-button"></div>
    </div>
  </div>
</template>

<script>
export default {};
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
