<template>
  <label class="input">
    {{ labelText }}
    <input
      :class="[
        'input__item',
        `input__item_border-theme_${borderTheme}`,
        `input__item_theme_${theme}`,
      ]"
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
    theme: String,
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
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
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
  padding: 10px 0 10px 1px;
  border-bottom: 1px solid #e7e7e7;
}

.input__item_theme_contacts {
  margin: 40px 0;
}

.input__item_border-theme_stories {
  border: 1px solid #e7e7e7;
  height: 52px;
  box-sizing: border-box;
}
@media screen and (max-width: 1280px) {
  .input,
  .input__item {
    font-size: 16px;
    line-height: 1.37;
  }
  .input__item_border-theme_stories {
    height: 48px;
  }
}

@media screen and (max-width: 1024px) {
  .input,
  .input__item {
    font-size: 15px;
    line-height: 1.47;
  }
  .input__item_border-theme_stories {
    height: 46px;
  }
}

@media screen and (max-width: 768px) {
  .input,
  .input__item {
    line-height: 1.27;
  }
}

@media screen and (max-width: 425px) {
  .input,
  .input__item {
    font-size: 13px;
    line-height: 1.23;
  }

  .input__item_theme_contacts {
    margin: 20px 0;
  }
}
</style>
