const axios = require('axios');
const fs = require('fs');

async function loadImg(imgUrl) {
    let { data } = await axios({
        url: imgUrl,
        headers: {
            'Content-Type': 'multipart/form-data',  // !
        },
        responseType: 'arraybuffer',  // !
    })
    await fs.promises.writeFile(`./data/01.jpg`, data, 'binary');
}

; (async function () {
    let url = 'https://tiven.cn/static/img/img-post-08-c1kr9HQ13lTEmcyI_mowX.jpg'
    console.time('download time：')
    try {
        await loadImg(url)
        console.log('下载成功')
    } catch (err) {
        console.log(err)
    }
    console.log('')
    console.timeEnd('download time：')
})();