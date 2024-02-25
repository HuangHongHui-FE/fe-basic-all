
## todo

-   rpc 和 Node.js 的关系

-   [《吊打面试官》系列 Node.js 全栈秒杀系统](https://mp.weixin.qq.com/s/uWeAsJ-P253je15A49uKIQ)




### Node.js 的组成

二者采用的是同样的 JS 引擎。在写法上的区别在于：Node.js 没有浏览器、页面标签相关的 API，但是新增了一些 Node.js 相关的 API。通俗来说，对于开发者而言，在前端写 JS 是用于控制浏览器；而 Node.js 环境写 JS 可以控制整个计算机。

我们知道，JavaScript 的组成分为三个部分：

-   ECMAScript

-   DOM：标签元素相关的API

-   BOM：浏览器相关的API

ECMAScript 是 JS 的语法；DOM 和 BOM 浏览器端为 JS 提供的 API。

而 Node.js 的组成分为：

-   **ECMAScript**。ECMAScript 的所有语法在 Node 环境中都可以使用。

-   **Node 环境**提供的一些**附加 API**(包括文件、网络等相关的 API)。

如下图所示：

![](http://img.smyhvae.com/20200409_1545.png)

### 补充

与 PHP、JSP、Python、Perl、Ruby 的“既是语言，也是平台”不同，Node.js 的使用 JavaScript 进行编程，运行在 Chrome 的 V8 引擎上。

与 PHP、JSP 等相比（PHP、JSP、.net 都需要运行在服务器程序上，Apache、Nginx、Tomcat、IIS。
），Node.js 跳过了 Apache、Naginx、IIS 等 HTTP 服务器，它自己不用建设在任何服务器软件之上。Node.js 的许多设计理念与经典架构（LAMP = Linux + Apache + MySQL + PHP）有着很大的不同，可以提供强大的伸缩能力。Node.js 没有 web 容器。

## Node.js 的架构和依赖

Node.js 的架构如下：

![](http://img.smyhvae.com/20180301_1540.png)

Node.js 内部采用 Google Chrome 的 V8 引擎，作为 JavaScript 语言解释器；同时结合自行开发的 libuv 库，**扩展了 JS 在后端的能力（比如 I/O 操作、文件读写、数据库操作等）**。使得 JS 既可以在前端进行 DOM 操作（浏览器前端），又可以在后端调用操作系统资源，是目前最简单的全栈式语言。

### Node.js 运行环境的核心：V8 引擎 和 libuv 库

Node.js 是 JavaScript 在服务器端的运行环境，在这个意义上，Node.js 的地位其实就是 JavaScript 在服务器端的虚拟机，类似于 Java 语言中的 Java 虚拟机。

-   [V8 引擎](https://v8.dev/) ：编译和执行 JS 代码、管理内存、垃圾回收。V8 给 JS 提供了运行环境，可以说是 JS 的虚拟机。V8 引擎本身是用 C++ 写的。

-   [libuv](https://zh.wikipedia.org/wiki/Libuv)： libuv 是一个专注于异步 I/O 的跨平台类库，目前主要在 Node.js 上使用。它是 Node.js 最初的作者 Ryan Dahl 为 Node.js 写的底层类库，也可以称之为虚拟机。libuv 本身是用 C 写的。

### Java 虚拟机和 V8 引擎，是由同一人开发

Chrome 浏览器成功的背后，离不开 JS 的 V8 引擎。作为虚拟机，V8 的性能表现优异，它的开发者是 Lars Bak。在 Lars 的工作履历里，绝大部分都是与虚拟机相关的工作。在开发 V8 之前，他曾经在 Sun 公司工作，担任 HotSpot 团队的技术领导，主要致力于开发高性能的 Java 虚拟机。在这之前，他也曾为 Self、Smalltalk 语言开发过高性能虚拟机。这些无与伦比的经历让 V8 一出世就超越了当时所有的 JS 虚拟机。

![](http://img.smyhvae.com/20200617_1120.png)

V8 的性能优势使得用 JavaScript 写高性能后台服务程序成为可能。在这样的契机下，Ryan Dahl 选择了 JavaScript，选择了 V8，在事件驱动、非阻塞 I/O 模型的设计下实现了 Node。

### V8 的内存限制

在一般的后端开发语言中，在基本的内存使用上没有什么限制，然而在 Node 中通过 JavaScript 使用内存时就会发现只能使用部分内存（64 位系统下约为 1.4GB，32 位系统下约为 0.7GB）。在这样的限制下，将会导致 Node 无法直接操作大内存对象。

造成这个问题的主要原因在于 Node 基于 V8 构建，所以在 Node 中使用的 JavaScript 对象基本上都是通过 V8 自己的方式来进行分配和管理的。V8 的这套内存管理机制在浏览器的应用场景下使用起来绰绰有余，足以胜任前端页面中的所有需求。但在 Node 中，这却限制了开发者随心所欲使用大内存的想法。



## Node.js 的应用

它被广泛地应用在 Web 服务、开发工作流、客户端应用等诸多领域。其中，在 **Web 服务**领域，业界对 Node.js 的接受程度最高。

### 1、BFF 中间层

BFF，即 Backend For Frontend（服务于前端的后端）。玉伯在《[从前端技术进化到体验科技](https://mp.weixin.qq.com/s/IYddaaw2ps1wR2VT1dZWPg)》这篇文章中点出了 BFF 层的概念：

> BFF 模式下，整体分工很清晰，**后端通过 Java/C++ 等语言负责服务实现，理想情况下给前端提供的是基于领域模型的 RPC 接口，前端则在 BFF 层直接调用服务端 RPC 接口拿到数据**，按需加工消费数据，并实现人机交互。基于 BFF 模式的研发，很适合拥有前端技术背景的全栈型工程师。这种模式的好处很明显，后端可以专注于业务领域，更多从领域模型的视角去思考问题，页面视角的数据则交给前端型全栈工程师去搞定。**领域模型与页面数据是两种思维模式，通过 BFF 可以很好地解耦开，让彼此更专业高效**。

在 Web 服务里，搭建一个中间层，前端访问中间层的接口，中间层再访问后台的 Java/C++ 服务。这类服务的特点是不需要太强的服务器运算能力，但对程序的灵活性有较高的要求。这两个特点，正好和 Node.js 的优势相吻合。Node.js 非常适合用来做 BFF 层，优势如下：

-   对于前端来说：让前端**有能力自由组装后台数据**，这样可以减少大量的业务沟通成本，加快业务的迭代速度；并且，前端同学能够**自主决定**与后台的通讯方式。

-   对于后台和运维来说，好处是：安全性（不会把主服务器暴露在外面）、降低主服务器的复杂度等。

### 2、服务端渲染

**客户端渲染**（CSR / Client side render）：前端通过一大堆接口请求数据，然后通过 JS 动态处理和生成页面结构和展示。优点是**前后端分离**、减小服务器压力、局部刷新。缺点是不利于 SEO（如果你的页面然后通过 Ajax 异步获取内容，抓取工具并不会等待异步完成后再行抓取页面内容）、首屏渲染慢。

**服务端渲染**（SSR / Server Side Render）：服务器返回的不是接口数据，而是一整个页面（或整个楼层）的 HTML 字符串，浏览器直接显示即可。

优点是**有利于 SEO、首屏渲染很快**。

**总结： 搜索引擎优化 + 首屏速度优化 = 服务端渲染**。

参考链接：

-   [Vue 服务端渲染的概念](https://ssr.vuejs.org/zh/)

-   <https://blog.csdn.net/u012036171/article/details/88833200>

-   <https://juejin.im/post/5c068fd8f265da61524d2abc>

-   [方应杭](https://www.zhihu.com/question/59578433/answer/326694511)

历史回顾：

（1）一开始，页面很简单，html 是后端渲染的（比如PHP、ASP、JSP等方式）。后端发现页面中的 js 好麻烦（虽然简单，但是坑多），于是让公司招聘专门写 js 的人，简称「前端切图仔」。

（2）随着 Node.js 和前端 MVC 的兴起，以及前端越来越复杂，慢慢演变成了「前后端分离」。

（3）前端的 SPA 应用流行之后，发现 SEO 问题很大，而且首屏渲染速度很慢，但是自己选的路再难走也要走下去，于是用 Node.js 在服务端渲染被看成是一条出路。

（4）以前在一起的时候，是后端做部分前端的工作；现在在一起的时候，是前端做部分后端的工作。

### 5、 做 PC 端的软件（基于 Electron 框架）

Electron 框架就是基于 Node.js 的。也可以说：Electron 是 Node.js 在PC客户端的技术。

有一点你可能会感到惊讶：程序员们都在用的代码编辑器 VS Code 软件， 就是用 JS 语言实现的。

还有一个例子是：电子游戏直播网站 [Twitch](https://www.twitch.tv/)，号称是国外游戏直播的鼻祖，它在 PC 端的客户端软件，就是用 Electron 框架的。你会发现，Twitch 的网站视觉，和 PC 端的视觉，几乎是一样的。

### 知名度较高的 Node.js 开源项目

-   express：Node.js 中著名的 web 服务框架。

-   Koa：下一代的 Node.js 的 Web 服务框架。所谓的“下一代”是相对于 Express 而言的。

-   [Egg](https://eggjs.org/zh-cn/)：2016 年，阿里巴巴研发了知名的 Egg.js 开源项目，号称企业级 Web 服务框架。Egg.js 是基于 Koa 开发的。

*   mocha：是现在最流行的 JavaScript 测试框架，在浏览器和 Node 环境都可以使用。

*   PM2：node 多进程管理。

*   jade：非常优秀的模板引擎，不仅限于 js 语言。

*   CoffeeScript：用简洁的方式展示 JavaScript 优秀的部分。

*   Atom：编辑器。

*   socket.io：实时通信框架。



## 最后一段：前端同学会 Node.js 就真的全栈了吗？

林肯说过：“你可以在所有的时间欺骗一部分人，也可以在一段时间欺骗所有的人，但你不可能在所有的时间欺骗所有的人”。

涉及到后台开发相关的技术，无论如何，也绕不开**框架设计、开发调试、数据库操作、高并发处理、大规模存储、性能优化、容灾方案、RPC 调用、进程管理、操作系统调度、网络安全、系统运维、日常维护、甚至是 Linux 内核、驱动开发**等过硬的知识技能和经验积累。等你亲身经历过这些，才算明白：语言只是一种工具。
