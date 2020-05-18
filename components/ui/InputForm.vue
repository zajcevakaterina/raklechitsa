<template>
  <label class="input">
    {{ labelText }}
    <input
      :class="['input__item', `input__item_border-theme_{{borderTheme}}`]"
      :type="type"
      :placeholder="placeholder || 'Напишите тут'"
      :name="name"
      :required="required"
    />
  </label>
</template>

<script>
export default {
  props: [
    'labelText',
    'type',
    'name',
    'required',
    'placeholder',
    'borderTheme',
  ],
};
</script>

<style scoped>
.input {
  display: block;
}

.input__item {
  display: block;
  width: 100%;
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  color: #666666;
  border: none;
  resize: none;
  padding: 0 0 10px;
  border-bottom: 1px solid #e7e7e7;
}

.input__item_border-theme_full {
  border: 1px solid #e7e7e7;
}

@media screen and (max-width: 1280px) {
  .input__item {
    font-size: 16px;
    line-height: 1.37;
  }
}

@media screen and (max-width: 1024px) {
  .input__item {
    font-size: 15px;
    line-height: 1.47;
  }
}

@media screen and (max-width: 768px) {
  .input__item {
    line-height: 1.27;
  }
}

@media screen and (max-width: 768px) {
  .input__item {
    font-size: 13px;
    line-height: 1.23;
    /* width: 260px; */
    /* padding-bottom: 2px; */
  }
}
</style>
