const vm = require('vm')
const axios = require('axios')

// 在 global 对象上挂载对应的 callback 方法
global.jQuery11230971606670044967_1649312313646 = function (res) {
    // jsonp 接口返回的数据
    console.log("res---", res)
}

async function getData() {
    let { data } = await axios({
        url: 'https://push2.eastmoney.com/api/qt/clist/get?cb=jQuery11230971606670044967_1649312313646&fid=f62&po=1&pz=10&pn=1&np=1&fltt=2&invt=2&fs=m%3A90+t%3A3&stat=1&fields=f12%2Cf14%2Cf2%2Cf3%2Cf62%2Cf184%2Cf66%2Cf69%2Cf72%2Cf75%2Cf78%2Cf81%2Cf84%2Cf87%2Cf204%2Cf205%2Cf124&ut=b2884a393a59ad64002292a3e90d46a5'
    })

    // 查看返回内容的类型
    console.log(typeof data)
    console.log("data---", data)

    // 执行 callback
    vm.runInThisContext(data)
}

// 调用抓取数据的方法
getData()