<template>
  <uni-image>
    <img :src="src" />
  </uni-image>
</template>

<script>
export default {
  name: "image",
  props: {
    src: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
uni-image {
  width: 320px;
  height: 240px;
  display: inline-block;
  overflow: hidden;
  position: relative;
}
</style>
