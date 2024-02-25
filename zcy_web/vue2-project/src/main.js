import Vue from 'vue'


// import App from './App.vue'

// import App from './01-visiual-list-App.vue'
// import App from './02-html2canvas-App.vue'
// import App from './03-htmlToword-App.vue'

// import App from './04-jsToPdf-App.vue
import App from './05-App.vue'


Vue.config.productionTip = false



// 下面三条参考 uni-app 源码实现 uni-app/lib/h5/ui.js
// ① 为了解决报错 [Vue warn]: Unknown custom element: <uni-button> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
Vue.config.ignoredElements = [
  'uni-button',
  'uni-image',
]; 

// ② 为了解决报错 [Vue warn]: Do not use built-in or reserved HTML elements as component id: button
const overrideTags = ['button', 'image']
// 1）先保存原来的 isReservedTag 逻辑
const oldIsReservedTag = Vue.config.isReservedTag;
Vue.config.isReservedTag = function (tag) {
  // 2）在遇到 button 标签的时候，不认为是个内置标签
  if (overrideTags.indexOf(tag) !== -1) {
    return false;
  }
  // 3）非 button 标签再走原来的内置标签的判断逻辑
  return oldIsReservedTag(tag);
};

// ③ 为了解决 image 标签虽然被解析，但是渲染不出来的问题

// 命名空间存在的意义是，一个文档可能包含多个软件模块的元素和属性，在不同软件模块中使用相同名称的元素或属性，
// 可能会导致识别和冲突问题，而 xml 命名空间可以解决该问题。
// svg 部分标签名称与 uni 标签冲突
const conflictTags = [
  'image', 
  // 'switch', 
  // 'text', 
  // 'view',
];
const oldGetTagNamespace = Vue.config.getTagNamespace;
Vue.config.getTagNamespace = function (tag) {
  // “~”运算符（位非）用于对一个二进制操作数逐位进行取反操作。位非运算实际上就是对数字进行取负运算，再减 1
  // 等价于 conflictTags.indexOf(tag) > -1
  if (~conflictTags.indexOf(tag)) {
    return false;
  }
  return oldGetTagNamespace(tag);
};

new Vue({
  render: h => h(App),
}).$mount('#app')