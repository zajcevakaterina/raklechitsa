<template>
  <div>
    <button class="mobile-button" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mobile-button {
  background: url('../../static/mobile-menu.svg') no-repeat;
  background-color: transparent;
  background-size: cover;
  border: 0;
  cursor: pointer;
  padding: 0;
  outline: 0;
  width: 32px;
  height: 27px;
}

@media screen and (max-width: 320px) {
  .mobile-button {
    width: 26px;
    height: 23px;
  }
}
</style>
