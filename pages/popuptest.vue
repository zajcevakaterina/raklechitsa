<template>
  <div>
    <Button @btnClick="popupToggle" />
    <Popup v-if="popupShown">
      <FormStories />
    </Popup>
  </div>
</template>

<script>
import Popup from '@@/components/Popup';
import Button from '@@/components/ui/Button';
import FormStories from '@@/components/FormStories';

export default {
  components: {
    Popup,
    Button,
    FormStories,
  },

  methods: {
    popupToggle() {
      this.popupShown = !this.popupShown;
    },
  },

  data() {
    return {
      popupShown: false,
    };
  },
};
</script>

<style></style>
