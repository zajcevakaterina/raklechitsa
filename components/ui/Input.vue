<template>
  <label class="input">
    {{ labelText }}
    <input
      :class="['input__item', `input__item_border-theme_${borderTheme}`]"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :required="required"
      v-model="content"
      @input="getInputContent"
    />
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    labelText: String,
    type: {
      type: String,
      default: 'text',
    },
    name: String,
    required: Boolean,
    placeholder: String,
    borderTheme: String,
  },

  data() {
    return {
      content: this.value,
    };
  },

  watch: {
    value(newVal, oldVal) {
      if (newVal !== this.content) {
        this.content = newVal;
      }
    },
  },

  methods: {
    getInputContent(e) {
      this.$emit('input', this.content);
    },
  },
};
</script>

<style scoped>
.input {
  display: block;
}

.input::-webkit-input-placeholder {
  color: #666666;
}

.input::-moz-placeholder {
  color: #666666;
}

.input:-moz-placeholder {
  color: #666666;
}

.input:-ms-input-placeholder {
  color: #666666;
}

.input__item {
  display: block;
  width: 100%;
  font-family: inherit;
  font-size: 18px;
  line-height: 1.33;
  border: none;
  resize: none;
  padding: 10px 0 10px 4px;
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
