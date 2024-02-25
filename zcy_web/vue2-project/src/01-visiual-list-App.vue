// 虚拟列表demo

<template>
  <div id="app">
    <div class="main">
      <div v-for="(row, index0) in uiPeriodList" :key="index0">
        <div class="period" :style="periodStyle">
          <div v-for="(column, index1) in row.columnList" :key="column.id">
            /* 详细展示元素 */
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "01-visiual-list-App",
  components: {},
  data() {
    return {
      uiPeriodList: [],
    };
  },
  created() {
    this.periodStyle = {
      "grid-template-columns": `52px repeat(${this.headList.length}, 1fr)`,
      height: "2000px",
    };
  },

  methods: {
    basic() {
      // 首先new IntersectionObserver 构造函数，这个函数接受两个参数：callback 是可见性变化时的回调函数，option 是配置对象（该参数可选）, 然后就得到一个观察器实例
      // 调用实例的 observe 方法对目标 dom 元素进行监听
      // 在回调函数 callback 中拿到 entries， entries是一个数组，里面每个成员都是一个IntersectionObserverEntry对象，监听了几个元素， entries就包含了几个成员。IntersectionObserverEntry对象描述了目标对象与容器之前的相交信息。其中 intersectionRatio 目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0。在这里我们取 entries[0].intersectionRatio 来判断目标元素是否在视野中, 大于0代表在视野中，小于0表示已移出视野。

      var intersectionObserver = new IntersectionObserver(function (entries) {
        console.log("entries---", entries);
        if (entries[0].intersectionRatio <= 0) return;

        // loadItems(10);
        console.log("Loaded new items");
      });
      // start observing
      intersectionObserver.observe(document.querySelector(".scrollerFooter"));
    },

    update() {
      let rolwList = document.querySelectorAll(".period");
      let _this = this;
      let config = {
        root: document.querySelector(".main"),
        rootMargin: "100px 0px",
      };

      let intersectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach((row) => {
          if (row.intersectionRatio <= 0) {
            if (!_this.isFirst) {
              row.target.style.height = `${row.target.clientHeight}px`;
            }
            _this.uiPeriodList[index].coordList = [];
          } else {
            row.target.style.height = "";
            _this.uiPeriodList[index].columnList = _this.periodList[index].columnList; // 附上实际元素
          }
        });
      }, config);

      if (this.isFirst) {
        rowList.forEach((row, index) => {
          intersectionObserver.observe(row);
        });
        this.isFirst = false;
      }
    },
  },
};
</script>
