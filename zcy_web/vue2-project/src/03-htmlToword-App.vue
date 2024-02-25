<template>
  <div id="export-word">
    <table border>
      <tr>
        <th>姓名</th>
        <th>年龄</th>
      </tr>
      <tr>
        <td>贾维斯</td>
        <td>2</td>
      </tr>
    </table>
    <button @click="onWordExport">导出为word</button>
  </div>
</template>

<script>
import htmlDocx from "html-docx-js/dist/html-docx";
import saveAs from "file-saver";
export default {
  name: "APP",
  data() {
    return {};
  },
  methods: {
    onWordExport() {
      var contentHtml = document.getElementById("export-word").innerHTML;
      const cssHTML = `table {
                          width: 200px;
                          border: 1px solid #ccc;
                          color:red;
                        }`;

      var content = `<!DOCTYPE html><html>
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <style>
                    ${cssHTML}
                </style>
            </head>
            <body>
                ${contentHtml}--------666
            </body>
            </html>`;
      var converted = htmlDocx.asBlob(content, { orientation: "landscape" });
      saveAs(converted, "word文件名.docx");
    },
  },
};
</script>

<style lang="css"></style>
