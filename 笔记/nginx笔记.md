### nginx笔记（配合尚硅谷资料使用）

### 简介

![image-20210920211352390](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920211352390.png)

##### 正向代理

![image-20210920211720991](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920211720991.png)

##### 反向代理

![image-20210920211842498](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920211842498.png)

![image-20210920212046322](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920212046322.png) 

##### 负载均衡

![image-20210920212321951](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920212321951.png)

![image-20210920212515975](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920212515975.png)

##### 动静分离

![image-20210920212552264](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920212552264.png)

一般的方式

![image-20210920212647824](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920212647824.png)

动静分离方式（动态资源与静态资源）

![image-20210920212751179](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920212751179.png)

### nginx再linux上的安装





### nginx配置实例-反向代理

#### 准备阶段

##### 需要在虚拟机上安装tomcat

![image-20210920222652384](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920222652384.png)

##### 找到tomcat的上一级目录解压

![image-20210920222742793](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920222742793.png)

tomcat需要JDK环境，系统有自带的

##### 启动tomcat

![image-20210920222942905](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920222942905.png)

##### 查看tomcat日志

![image-20210920223117254](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920223117254.png)

##### 网页进入tomcat服务器

![image-20210920223304548](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920223304548.png)

#### 反向代理实例一

##### 配置

进入到配置文件

![image-20210920223817252](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920223817252.png)

![image-20210920224009244](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920224009244.png)

##### 效果

![image-20210920224133291](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920224133291.png)

#### 反向代理实例二

##### 准备工作

![image-20210920224456769](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920224456769.png)

![image-20210920224631216](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920224631216.png)

两个目录中均加入tomcat压缩包，解压

![image-20210920224740813](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920224740813.png)

![image-20210920224830611](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920224830611.png)

##### 另一个修改tomcat的配置文件，端口号修改

![image-20210920224947477](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920224947477.png)

![image-20210920225008124](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920225008124.png)

![image-20210920225029064](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920225029064.png)

![image-20210920225045439](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920225045439.png)

![image-20210920225105534](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920225105534.png)

启动起来

![image-20210920225212391](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920225212391.png)

测试

![image-20210920225228469](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920225228469.png)

##### 再在nginx中配置，新增

![image-20210920225756850](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920225756850.png)

##### 重启nginx

![image-20210920225934044](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920225934044.png)

##### 最终测试

![image-20210920230000139](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920230000139.png)

![image-20210920230044209](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210920230044209.png)

### 配置实例-负载均衡

##### 启动tomcat

![image-20210921084133990](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210921084133990.png)

### 配置实例--动静分离

![image-20210921085038238](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210921085038238.png)

### 配置实例--高可用效果

![image-20210921091043429](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210921091043429.png)

主服务器挂了会请求备用服务器

##### 虚拟机安装keepalived

![image-20210921091433128](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210921091433128.png)

看是否安装好

![image-20210921091501687](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210921091501687.png)

##### 启动keepalived, 并查看进程

![image-20210921092119754](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210921092119754.png)

