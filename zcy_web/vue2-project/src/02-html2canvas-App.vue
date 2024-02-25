<template>
  <div class="box">
    <!-- 将可保存为图片的内容 通过一个 标签 框起来 -->
    <div id="screenshot-box">
      <!-- 内容可以随意 -->
      <p>名称</p>
      <p>名称</p>
      <p>名称</p>
      <p>名称</p>
      <p>名称</p>
      <p>名称</p>
      <p>名称</p>
    </div>
    <button @click="onSaveCanvas">保存为图片并预览</button>

    <img :src="previewPic" alt="预览图片" v-show="previewPicShow">
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
        previewPic: '',
        previewPicShow: false
    };
  },
  methods: {
    // 点击保存为Canvas
    onSaveCanvas() {
      // 这里的类名要与点击事件里的一样
      const canvas = document.querySelector("#screenshot-box");
      let that = this;
      html2canvas(canvas, { scale: 2, logging: false, useCORS: true }).then(function (
        canvas
      ) {
        const type = "png";
        let imgData = canvas.toDataURL(type);

        that.previewPic = imgData;
        that.previewPicShow = true;

        // // 图片格式处理
        let _fixType = function (type) {
          type = type.toLowerCase().replace(/jpg/i, "jpeg");
          let r = type.match(/png|jpeg|bmp|gif/)[0];
          return "image/" + r;
        };
        imgData = imgData.replace(_fixType(type), "image/octet-stream");
        let filename = "htmlImg" + "." + type;
        // // 保存为文件
        // //  以bolb文件下载
        that.downFileToLocal(filename, imgData);
      });
    },
    //下载图片-a标签的形式
    downFileToLocal(filename, downloadUrl) {
      let aLink = document.createElement("a");
      aLink.style.display = "none";
      aLink.href = downloadUrl;
      aLink.download = filename;
      // 触发点击-然后移除
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    },
  },
};
</script>

<style scoped></style>
