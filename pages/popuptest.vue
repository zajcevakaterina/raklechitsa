<template>
  <div>
    <overlay v-if="popupShown">
      <pop-up></pop-up>
    </overlay>
  </div>
</template>

<script>
import Popup from '@@/components/Popup';
import Overlay from '@@/components/ui/Overlay';

export default {
  components: {
    overlay: Overlay,
    'pop-up': Popup,
  },
  data() {
    return {
      popupShown: false,
    };
  },
};
</script>

<style></style>
