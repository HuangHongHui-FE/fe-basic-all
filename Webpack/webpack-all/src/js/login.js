// import 'css-loader!../css/login.css'
import '../css/login.css'
import '../css/login.less'

function login() {
  const oH2 = document.createElement('h2')
  oH2.innerHTML = '前端奥里给'
  oH2.className = 'title'
  return oH2
}

document.body.appendChild(login())
