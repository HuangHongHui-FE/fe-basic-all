import { sum, square } from './js/utils.js'
const getInfo = require('./js/api.js')

import './js/login'

import about from './md/about.md'

import icon from './image/icon.png'
const img = new Image()
img.src = icon
document.body.append(img)


// 测试proxy
fetch('https://api.github.com/users') // http://localhost:8080/api/users
  .then(res => res.json())
  .then(data => {
    console.log('data---', data);
  })


// 测试definePlugin
console.log('definePlugin---', API_BASE_URL);



// dynamic-import
const render = () => {
  const hash = window.location.hash || '#posts'
  const mainElement = document.querySelector('.main')

  mainElement.innerHTML = ''
  // 动态导入配置
  if (hash === '#posts') {
    // 魔法注释，在打包后会按照这个名字，生成打包的文件名，设置一样就会打包进一个包里
    import(/* webpackChunkName: 'components' */'./posts/posts').then(({ default: posts }) => {
      mainElement.appendChild(posts())
    })
  } else if (hash === '#album') {
    import(/* webpackChunkName: 'components' */'./album/album').then(({ default: album }) => {
      mainElement.appendChild(album())
    })
  }
}
render()
window.addEventListener('hashchange', render)





console.log(about);

console.log(sum(10, 20))
console.log(square(10))
console.log(getInfo())
