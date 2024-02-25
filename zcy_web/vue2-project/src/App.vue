<template>
  <div id="app">
    <button>click me!</button>
    <image src="https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF"></image>
  </div>
</template>

<script>

// 原生element的修改
import UniButton from './components/UniButton.vue';
import UniImage from './components/UniImage.vue'

export default {
  name: 'App',
  components: {
    'button': UniButton,
    'image': UniImage
  },
  created() {
    
  },

  methods: {
    
  },
}
</script>