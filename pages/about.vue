<template>
  <div>
    <Button />
    <pop-up>
      <FormStories />
    </pop-up>
  </div>
</template>

<script>
import Popup from '@@/components/Popup';
import Button from '@@/components/ui/Button';
import FormStories from '@@/components/FormStories';

export default {
  components: {
    'pop-up': Popup,
    Button,
    FormStories,
  },
};
</script>

<style></style>
