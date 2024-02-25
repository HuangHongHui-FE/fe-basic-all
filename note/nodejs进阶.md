### nodejs架构

![image-20210916094209225](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916094209225.png)

![image-20210916094448224](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916094448224.png)

![image-20210916094457079](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916094457079.png)

![image-20210916094624714](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916094624714.png)

v8引擎

#### 应答者模式

![image-20210916095127696](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916095127696.png)

非阻塞

![image-20210916095149593](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916095149593.png)

对cpu来说，只有阻塞IO与非阻塞

操作系统为了获取完整的数据，会让应用程序重复![image-20210916095655061](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916095655061.png)

这就叫轮训：重复调用IO，判断操作是否结束

轮训技术：

![image-20210916095800430](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916095800430.png)



![image-20210916100041331](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916100041331.png)

![image-20210916100123375](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916100123375.png)

### nodejs事件驱动架构

![image-20210916100235386](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916100235386.png)

日常的有

![image-20210916100247346](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916100247346.png)

![image-20210916100253434](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916100253434.png)

![image-20210916100848174](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916100848174.png)

On代表的是多个订阅者，注册的事件

### Node单线程

![image-20210916101101131](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916101101131.png)

![image-20210916101109730](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916101109730.png)

![image-20210916101124459](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916101124459.png)

![image-20210916101153201](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916101153201.png)

v8这一个线程，但是在node内部存在线程池

![image-20210916101253111](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916101253111.png)

![image-20210916101841044](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916101841044.png)

### node实现api服务

![image-20210916102333294](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916102333294.png)

直接运行ts代码

![image-20210916102432572](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916102432572.png)

![image-20210916102444578](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916102444578.png)

引入包

![image-20210916102646771](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916102646771.png)

### nodejs全局对象

![image-20210916103131284](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916103131284.png)

![image-20210916103158719](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916103158719.png)

![image-20210916103240368](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916103240368.png)

![image-20210916103331084](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916103331084.png)

![image-20210916103532155](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916103532155.png)

### 全局变量-process

![image-20210916103625694](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916103625694.png)

![image-20210916103636569](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916103636569.png)

![image-20210916103802531](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916103802531.png)

![image-20210916104030827](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916104030827.png)

![image-20210916104223489](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916104223489.png)

![image-20210916104410030](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916104410030.png)

![image-20210916145943346](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916145943346.png)

文件流读进管道

![image-20210916150136640](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916150136640.png)

输入什么跟这输出什么

![image-20210916150326689](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916150326689.png)

标准输入标准输出

![image-20210916150602562](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916150602562.png)

### 核心模块path

![image-20210916150807135](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916150807135.png)

![image-20210916150819113](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916150819113.png)

![image-20210916151016732](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916151016732.png)

![image-20210916151236375](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916151236375.png)

![image-20210916151439573](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916151439573.png)

### 全局变量之buffer缓冲区

![image-20210916151539114](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916151539114.png)

![image-20210916151712687](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916151712687.png)

![image-20210916151724762](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916151724762.png)

stream可以分段

![image-20210916151741329](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916151741329.png)

![image-20210916151925741](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916151925741.png)

##### 创建buffer

![image-20210916152119081](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916152119081.png)

![image-20210916152246797](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916152246797.png)

转换成字符串

![image-20210916223754088](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916223754088.png)

#### buffer实例方法

![image-20210916224200295](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916224200295.png)

![image-20210916224339945](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916224339945.png)

![image-20210916224512702](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210916224512702.png)

### FS核心模块

![image-20210917100548195](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210917100548195.png)

![image-20210917100650472](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210917100650472.png)

![image-20210917100901318](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210917100901318.png)

![image-20210917101000809](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210917101000809.png)

![image-20210917102545404](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210917102545404.png)

##### 文件的打开与关闭

![image-20210917102802192](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210917102802192.png)

##### 大文件的读写

![image-20210917102901565](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210917102901565.png)

![image-20210917103124117](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210917103124117.png)

![image-20210917103653277](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210917103653277.png)

### 目录操作

![image-20210917171823742](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210917171823742.png)

### 模块化历程

![image-20210918135441345](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918135441345.png)

![image-20210918135518585](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918135518585.png)

#### conmentjs规范

![image-20210918135742405](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918135742405.png)

![image-20210918135805241](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918135805241.png)

![image-20210918135819714](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918135819714.png)

![image-20210918135855015](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918135855015.png)

![image-20210918135911153](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918135911153.png)

#### 演示

##### 导入导出

![image-20210918140107680](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918140107680.png)

![image-20210918140150085](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918140150085.png)

### 模块分类以及加载流程

![image-20210918140457401](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918140457401.png)

![image-20210918140522051](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918140522051.png)

![image-20210918140724630](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918140724630.png)

![image-20210918140743818](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918140743818.png)

![image-20210918140801174](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918140801174.png)

### 发布订阅模式

![image-20210918191249794](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918191249794.png)

![image-20210918191324701](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918191324701.png)

![image-20210918191348029](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918191348029.png)

![image-20210918191357235](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210918191357235.png)



### EventEmitter类源码分析



### 模拟eventEmitter类的实现

模拟事件的发布，订阅，删除

```js
function MyEvent(){
	// 准备一个数据结构用于缓存订阅者信息
    this._evemts = Object.create(null)
}

// 事件监听
MyEvent.prototype.on = function(type, callback){
    // 判断当前次的事件是否已经存在，然后再决定如何做缓存
    if(this._events[type]){
        this._events[type].push(callback)
    }else{
        this._events[type] = [callback]
    }
}

// 事件触发
MyEvent.protype.emit = function(type, ...args){
    if(this._events && this._events[type].length){
        this._events[type].forEach((callback) => {
            callback.call(this, ...args)
        })
    }
}

// 事件取消
MyEvent.prototype.off = function(type, callback){
    // 判断当前type事件监听是否存在，如果存在则取消指定的监听
    if(this._events && this._events[type]){
        this._events[type] = this._events[type].filter((item) => {
            return item !== callback
        })
    }
}

let ev = new MyEvent()

let fn = function(...data) {
    console.log("事件执行了", data)
}

ev.on("事件1", fn)
ev.on("事件1", () => {
    console.log("事件1----2")
})

// 触发事件
ev.emit("事件1", 1, 2)
```

![image-20211011133553138](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011133553138.png)

##### off检验

![image-20211011134113275](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011134113275.png)



### 浏览器中的事件环

##### 宏任务，微任务都为队列

注意setTimeOut,里面的代码会添加进宏任务



![image-20211011134836832](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011134836832.png)

![image-20211011134919459](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011134919459.png)

##### 例子

![image-20211011140932180](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011140932180.png)

![image-20211011135703803](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011135703803.png)



### nodejs中事件环

##### 六个事件队列

![image-20211011135915265](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011135915265.png)

![image-20211011135950297](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011135950297.png)

![image-20211011140057347](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011140057347.png)

##### 验证

![image-20211011140831162](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011140831162.png)

![image-20211011140318628](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011140318628.png)



### nodejs事件环理解

![image-20211011140712013](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011140712013.png)

##### 切换

![image-20211011140742156](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011140742156.png)





![image-20211011141058233](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011141058233.png)



### nodejs事件环常见问题

![image-20211011141509549](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011141509549.png)



### 核心模块-stream

![image-20211011141622334](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011141622334.png)

![image-20211011141644942](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011141644942.png)

![image-20211011141709823](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011141709823.png)

![image-20211011141656527](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011141656527.png)

![image-20211011141747527](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011141747527.png)

![image-20211011141806152](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011141806152.png)

![image-20211011141821734](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011141821734.png)

##### 例子：拷贝指定文件

![image-20211011141914400](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011141914400.png)



### 可读流

![image-20211011142042384](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011142042384.png)

![image-20211011142137002](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011142137002.png)

![image-20211011142218176](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011142218176.png)

![image-20211011142307735](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011142307735.png)

![image-20211011142334495](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011142334495.png)

![image-20211011142339175](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011142339175.png)

![image-20211011193722249](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011193722249.png)

![image-20211011193747300](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011193747300.png)



### 可写流

![image-20211011193925883](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011193925883.png)

![image-20211011194002854](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194002854.png)

![image-20211011194029108](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194029108.png)



### 双工和转换流

![image-20211011194238146](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194238146.png)

![image-20211011194245529](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194245529.png)

![image-20211011194301741](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194301741.png)

![image-20211011194314257](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194314257.png)

![image-20211011194331337](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194331337.png)

![image-20211011194347275](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194347275.png)

![image-20211011194354987](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194354987.png)

![image-20211011194403017](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194403017.png)

![image-20211011194428525](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194428525.png)

![image-20211011194441819](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194441819.png)

![image-20211011194455026](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194455026.png)



### 文件可读流的创建与消费

![image-20211011194647614](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194647614.png)

![image-20211011194723527](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194723527.png)

![image-20211011194834141](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011194834141.png)

![image-20211011195136591](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011195136591.png)



### 文件可读流事件与应用

事件

![image-20211011195419498](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011195419498.png)

完整流程

![image-20211011195509849](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011195509849.png)



### 文件可写流

![image-20211011195629544](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011195629544.png)

![image-20211011195757483](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011195757483.png)



### write执行流程

![image-20211011195938094](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011195938094.png)



### 控制写入速度

只写了  拉

![image-20211011200202977](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011200202977.png)

判断写完了再继续写后面的

![image-20211011200332010](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011200332010.png)



### 背压机制

读的快，消费的慢，这样存满了就会

![image-20211011200500199](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011200500199.png)

读操作流程

![image-20211011200545284](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011200545284.png)

可写流流程

![image-20211011200615826](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011200615826.png)

![image-20211011200812863](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011200812863.png)





### pipe方法实现

底层还是流操作实现

![image-20211011201229959](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011201229959.png)



### 网络通信

![image-20211011201422495](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011201422495.png)

##### 网络层次模型

![image-20211011201551705](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011201551705.png)

#### 三次握手四次挥手

![image-20211011201654247](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011201654247.png)

![image-20211011201755240](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011201755240.png)

![image-20211011201844042](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20211011201844042.png)

