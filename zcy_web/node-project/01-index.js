const childProcess = require('child_process');

const log = console.log

// 运行命令util
function runCommand(cmd, args, options, before, end) {
    return new Promise((resolve, reject) => {
        log(before, "blue")
        const spawn = childProcess.spawn(
            cmd,
            args,
            Object.assign(
                {
                    cwd: global.WORKSPACE,
                    stdio: 'inherit',
                    shell: true,
                },
                options
            )
        )
        spawn.on('error', (error) => {
            log(error, chalk.red)
            reject(error)
        });
        spawn.on('close', (code) => {
            if (code !== 0) {
                return reject(`sh: ${cmd} ${args.join(' ')}`)
            }
            end && log(end, "green")
            resolve()
        });
    })
}


// 切换公司的nrm
runCommand('nrm', ['use', 'zcy-server'], {}, 'switch nrm registry to zcy', 'switch nrm registry to zcy success')


// 下载依赖
runCommand('npm', ['i', '--unsafe-perm'], {}, 'npm install', 'npm install success')



// 不同环境需要上传不同的地址因此需要动态修改webpack 的publicPath
const cdnConfigStr = `assetsPublicPath: 'http://dev.com',`
replaceFileContent(configPath, /assetsPublicPath:.+,/g, cdnConfigStr)
exports.replaceFileContent = function (filePath, source, target) {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    let targetFileContent = fileContent
    if (Array.isArray(source)) {
        source.forEach(([s, target]) => {
            if (target) {
                targetFileContent = targetFileContent.replace(s, target)
            }
        })
    } else {
        targetFileContent = fileContent.replace(source, target)
    }
    fs.writeFileSync(filePath, targetFileContent, 'utf-8')
}

// 编译项目
runCommand('npm', ['run', 'build'], {}, `webpack build`, `webpack build success`)


// 替换url源码地址
const replaceWebpackDistContent =
    async function (options = {}, collectionAssets, folder) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        let targetFileContent = fileContent;
        [
            [/(https:)?g.alicdn.com/[-a - zA - Z0 - 9@:% _ +.~# ?&=]+.[-a - zA - Z0 - 9@:% _ +.~# ?&=]+/g, cdn],
            [/(https?:)?sitecdn.zcycdn.com/[-a - zA - Z0 - 9@:% _ +.~# ?&=]+.[-a - zA - Z0 - 9@:% _ +.~# ?&=]+/g, cdn],
            [/(https:)?cdn.zcycdn.com/[-a - zA - Z0 - 9@:% _ +.~# ?&=]+.[-a - zA - Z0 - 9@:% _ +.~# ?&=]+/g, cdn],
    ].forEach(([reg, uri]) => {
                targetFileContent = targetFileContent.replace(reg, function (match) {
                    let basename = '';
                    let uriMath = match;
                    basename = path.basename(uriMath);
                    if (uriMath.slice(0, 4) != 'http') {
                        uriMath = 'https:' + uriMath;
                    }
                    const parseUrl = url.parse(uriMath);

                    collectionAssets({ src: uriMath, fileName: path.basename(parseUrl.pathname) });
                    console.log('🚀替换前', match);
                    const myURL = new URL(projectName, uri);
                    const replacedUrl = uri + '/' + projectName + parseUrl.path + (parseUrl.hash || '');
                    console.log('🚀替换后', replacedUrl);
                    return replacedUrl;
                })
            })
fs.writeFileSync(filePath, targetFileContent, 'utf-8')
}


// 获取写死在前端代码中的静态资源

const downloadAssetsFiles = async function (img, forder) {
    const staticAssets = 'staticAssets';
    let assetsUrl = getPwdPath(`${forder || ''}${path.sep}${staticAssets}`);
    if (!fs.existsSync(assetsUrl)) {
        fs.mkdirSync(assetsUrl);
    }
    return Promise.all(img.objUnique('src').map(({ src, fileName }) => {
        if (fileName) {
            return new Promise(function (resolve, reject) {
                const originFileDir = path.join(assetsUrl, path.dirname(url.parse(src).pathname));
                fs.mkdirSync(originFileDir, { recursive: true });
                const uri = path.join(originFileDir, fileName);
                download(uri, src, resolve, reject);
            }).catch(err => {
                console.log(err)
                throw new Error(err);
            })
        }

    }))

}
function download(loadedUrl, src) {
    const writeStream = fs.createWriteStream(loadedUrl);
    const readStream = request(src);
    readStream.pipe(writeStream);
    readStream.on('end', function () {
        console.log(fileName, '文件下载成功');
    });
    writeStream.on("finish", function () {
        console.log(fileName, "文件写入成功");
        writeStream.end();
    });
}
downloadAssetsFiles(assetsArr, 'dist');
// 发现替换资源里还有cdn，因此替换下载后的cdn里面的cdn
const assetsArr = [];
await replaceWebpackDistContent(options, collectionAssets, 'staticAssets');
await downloadAssetsFiles(assetsArr, 'dist');



// 4、OSS推送静态资源到客户资源服务
const ossEndpoint = process.env.OSS_ENDPOINT;
const commonOptions = {
    accessKeyId: process.env.OSS_ACCESSKEYID,
    accessKeySecret: process.env.OSS_ACCESSKEYSECRET,
    bucket: process.env.OSS_BUCKET,
    timeout: '120s',
}

const extraOptions = ossEndpoint
    ? {
        endpoint: ossEndpoint, // 从全局数据获取，没有会依赖 region
        cname: true,
    } : {
        region: process.env.OSS_REGION,
    }
const ossOptions = Object.assign({}, commonOptions, extraOptions);
const client = new OSS(ossOptions);
//onlinePath 访问的文件地址
//curPath 上传的文件地址
result = await client.put(onlinePath, curPath);