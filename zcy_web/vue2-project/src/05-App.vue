<template>
  <div>
    <Html2Image ref="html2Image" @onExport="exportPic">
      <div class="export-content" style="border: 1px solid #f0f; width: 200px">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </Html2Image>
    <button @click="onExportImgByComponent">组件导出为图片</button>
  </div>
</template>

<script>
import Html2Image from "@/components/05-htmlToImage.vue";
export default {
  name: "App",
  // 使用组件
  components: {
    Html2Image,
  },

  methods: {
    // methods
    onExportImgByComponent() {
      // 预览图片的组件
      this.previewPicComponent = this.$refs.html2Image.onSaveCanvas();
    },
    exportPic(baseUrl) {
      // 赋值导出图片的blob路径
      this.previewPicComponent = baseUrl;
    },
  },
};
</script>
