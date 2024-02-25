### vim编辑器

vim hello.txt

按i进入编辑模式

再按Esc进入命令行模式

:wq : 保存退出                :q  : 退出不保存       :q! : 强制退出不保存

##### 快捷键

| 快捷键                              |                      |                      |
| ----------------------------------- | -------------------- | -------------------- |
| yy                                  | 拷贝当前行           |                      |
| 5yy                                 | 拷贝当前行向下的5行  |                      |
| p                                   | 粘贴                 |                      |
| dd                                  | 删除当前行           |                      |
| 5dd                                 | 删除当前行向下的5行  |                      |
| /eat   (命令行下)                   | 在文件中查找某个单词 | 输入n，查找下一个    |
| :set nu                             | 设置文件显示行号     | :set nonu   取消显示 |
| G, gg                               | 最末行，最首行       |                      |
| u （在正常模式下，vim刚进去的模式） | 撤销                 |                      |
| 输入20（shift + g）                 | 光标移动到第20行     |                      |

### 关机重启命令

| 命令            | 作用                 |
| --------------- | -------------------- |
| shutdown -h now | 立即关机             |
| shutdown -h 1   | 一分钟后关机         |
| shutdown -r now | 立即重启             |
| half            | 效果等同于关机       |
| reboot          | 重启系统             |
| sync            | 把内存数据同步到磁盘 |

### 登录注销

logout:       注销用户（在图形界面下无效，在运行级别3下有效）

### 用户管理

#### 添加用户

useradd xm     添加用户xm, 会自动创建叫xm的家目录

useradd -d /home/dog xq       给新用户xq创建指定的家目录dog

#### 给用户指定或者修改密码

passwd xm

123456

123456

#### 删除用户

userdel  xm       保留了用户的家目录

userdel  -r  xm      删除用户以及用户的家目录

#### 查询用户信息

id  xm

id  root![20210731193255](C:\Users\HDR\QQ\3167253066\Image\SharePic\20210731193255.png)

#### 切换用户

su  -  root

123456

exit    返回原来的用户

#### 用户组

groudadd  wudang

grouddel  wudang

#### 增加用户时直接加上组

useradd  -g  xm  wudang

#### 修改用户组

usermod  -g  wudang  xq      把xq改到wudang组

| 文件        | 作用                                  |
| ----------- | ------------------------------------- |
| /etc/passwd | 用户的配置文件，记录用户的各种信息    |
| /etc/shadow | 口令的配置文件                        |
| /etc/group  | 组的配置文件，记录linux包含的组的信息 |

### 实用指令

#### 运行级别说明

- 0：关机
- 1：单用户【找回丢失密码】
- 2：多用户状态，没有网络服务
- 3：多用户状态，有网络服务
- 4：系统未使用保留给用户
- 5：图形界面
- 6：系统重启

##### 修改默认运行级别

/etc/inittab  的id:5:initdefault:   这一行中的数字

#### 切换到指定的运行级别

init 3

#### 找回root用户的密码

开机--在引导时输入回车键--看到一个界面输入e--看到一个新的界面，选中第二行（编辑内核）再输入e--在这行的最后输入1， 再输入 回车键--再输入b，这时就会进入到单用户模式---使用passwd指令修改root密码即可

### 帮助指令

man ls

help cd

### 文件目录类

| 命令         |                                 |                                                        |
| ------------ | ------------------------------- | ------------------------------------------------------ |
| pwd          |                                 |                                                        |
| ls           | ls  -a                          | ls -al                                                 |
| mkdir  /home | mkdir  -p  /home/dog            |                                                        |
| touch        | touch  01.py                    |                                                        |
| cp           | cp -r  test.txt  /home/bbb      | 拷贝test.txt到home的bbb目录里面                        |
| rm           | rm -r  local/hhh       递归删除 | rm  -rf  local/hhh     递归强制删除                    |
| mv           | mv  旧文件   新文件             |                                                        |
| cat          | cat  -n   a.txt    显示行号     |                                                        |
| more         | 以全屏方式按页显示文本文件内容  | 快捷键:space:  下一页， enter: 下一行， q: 退出        |
| less         | 主要用来显示大文件              |                                                        |
| >            | ls  -l  >  a.txt                | 输出重定向，将原来的内容覆盖                           |
| >>           | ls  -l  >>  b.txt               | 追加重定向                                             |
| echo         | 输出内容到控制台                |                                                        |
| head  a.txt  | head  -n  5  a.txt              |                                                        |
| tail  a.txt  | tail  -n  5  a.txt              | tail  -f  a.txt   实时追踪文档的更新（实时的追加日期） |
| ln           | ln  -s  /root  linkToRoot       | rm  -rf  linkToRoot    删除软连接                      |
| history      | history  10                     | !8       8为前面的编号                                 |
|              |                                 |                                                        |

### 日期时间

#### 显示当前日期

| date                       | 当前时间         |
| -------------------------- | ---------------- |
| date+%Y                    | 显示当前年份     |
| date+%m                    | 显示当前月份     |
| date+%d                    | 显示当前是哪一天 |
| date "+%Y-%m-%d  %H:%M:%S" | 年月日时分秒     |

#### 设置时间日期

date -s "2019-10-10  11:22:22"

date

#### 查看日历

cal                             cal 2020

#### 搜索查找

| 指令   范围    选项    文件    |      |
| ------------------------------ | ---- |
| find  /opt  -user  nobody      |      |
| find  /home  -name   hello.txt |      |
| find  /  -size  +20M           |      |
| find  /  -name  *.txt          |      |

##### locate

updatedb       创建locate数据库

locate  hello.txt   快速定位hello.txt文件所在目录

#### grep 和 管道符|

##### 在hello.txt文件中，找yes所在行，并显示行号

cat  hello.txt  |  grep  -n  yes           区分大小写

cat  hello.txt  |  grep  -ni  yes          不区分大小写

#### 压缩解压

##### gzip/gunzip

gzip  hello.txt                 压缩后不保留原文件

gunzip  hello.txt.gz

##### zip/unzip

将/home下的所有文件进行压缩成my.zip

zip  -r  my.zip  /home/                    -r: 递归

将my.zip解压到/opt/tmp目录下

unzip  -d  /opt/tmp/  my.zip

##### tar

压缩后的文件格式为.tar.gz

| 选项 | 功能               |
| ---- | ------------------ |
| -c   | 产生.tar打包文件   |
| -v   | 显示详细信息       |
| -f   | 指定压缩后的文件名 |
| -z   | 打包同时压缩       |
| -x   | 解包.tar文件       |

1. 将/home/a1.txt 和/home/a2.txt 压缩成a.tar.gz

   tar  -zcvf  a.tar.gz   a1.txt  a2.txt

2. 将/home的文件夹压缩成my.tar.gz

   tar  -zcvf  my.tar.gz  /home/

3. 将a.tar.gz解压到当前目录

   tar  -zcvf  a.tar.gz

4. 将my.tar.gz解压到/opt/目录下

   tar  -zcvf  my.tar.gz  -C  /otp/

### 组管理和权限管理

#### 组管理

##### 查看文件的所有者,查看文件所在组

ls -ahl

##### 修改文件的所有者(修改apple.txt的所有者为tom)

chown  tom  apple.txt

##### 修改文件所在组  （将orange.txt文件修改进police组）

chgrp  police  orange.txt

#### 权限管理

##### 基本

![image-20210801174958546](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210801174958546.png)



##### 修改权限

![image-20210801175527335](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210801175527335.png)

### crond任务调度

- 任务调度：是指系统在某个时间执行的特定的命令或程序
- 分类：系统工作：病毒扫描，用户工作：对mysql数据的备份

#### crontab

| 常用选项 | 功能                          |
| -------- | ----------------------------- |
| -e       | 编辑crontab定时任务           |
| -l       | 查询crontab任务               |
| -r       | 删除当前用户所有的crontab任务 |

![image-20210801180626525](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210801180626525.png)

### linux磁盘

##### 查看系统的分区和挂载的情况

lsblk  -f                              lsblk

##### 查询系统整体磁盘使用情况

df  -lh                            df  -h

##### 查询指定目录的磁盘占用情况

du  -h   /home

| 选项          |                            |
| ------------- | -------------------------- |
| -s            | 指定目录占用大小汇总       |
| -h            | 带计量单位                 |
| -a            | 含文件                     |
| --max-depth=1 | 子目录深度                 |
| -c            | 列出明细的同时，增加汇总值 |

du  -ach  --max-depth=1  /opt

##### 磁盘操作的实用指令

| 统计/home文件夹下文件的个数                   | ls -l /home \| grep  "^-" \| wc  -l        |
| --------------------------------------------- | ------------------------------------------ |
| 统计/home文件夹下目录的个数                   | ls  -l  /home  \|  grep  "^d"  \| wc  -l   |
| 统计/home文件夹下文件的个数，包括子文件夹里的 | ls  -lR  /home  \| grep "^-"  \| wc  -l    |
| 统计文件夹下目录的个数，包括子文件夹里的      | ls  -lR  /home  \|  grep  "^d"  \|  wc  -l |
| 以树状显示目录结构                            | yum   install  tree              tree      |

### 网络配置

##### 测试当前服务器是否可以连接百度

ping  www.baidu.com

##### linux网络环境配置

![image-20210802154754374](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210802154754374.png)

### 进程管理

##### 基本介绍

- 每个进程都有一个id号
- 每个进程会对应一个父进程，父进程可复制多个子进程
- 进程两种方式存在，前台进程，后台进程
- 一般系统的服务都是以后台进程的方式存在，会常驻在系统中，关机结束

##### 显示系统执行的进程

ps -aux

| 选项 |                            |
| ---- | -------------------------- |
| -a   | 显示当前终端的所有进程信息 |
| -u   | 以用户的格式显示进程信息   |
| -x   | 显示后台进程运行的参数     |

![image-20210802155439708](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210802155439708.png)

##### 以全格式显示当前所有的进程，查看进程的父进程。

ps  -ef  |  more![image-20210802155658501](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210802155658501.png)

##### 查看sshd进程的父进程号

ps  -ef  |  grep  sshd

#### 杀死进程

kill  -9  进程号                  -9强迫进程立即停止

killall  进程名称

##### 踢掉某个非法登录用户

![image-20210802160145350](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210802160145350.png)

##### 终止远程登录服务sshd，在适当的时候再次重启sshd服务

![image-20210802160232109](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210802160232109.png)

#### 查看进程树pstree

pstree   -p     显示进程的PID

pstree  -u      显示进程的所有用户

#### 服务(Service)管理

Service本质就是进程，运行在后台，通常会监听某个端口，等待其他程序的请求（mysql,sshd,防火墙等）,又叫守护进程

![image-20210802160806707](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210802160806707.png)

##### 查看当前防火墙状况，关闭防火墙和重启防火墙

![image-20210802160918688](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210802160918688.png)

##### 细节

关闭防火后效果立即生效，但只是临时生效，重启后还是回归以前的设置

##### 查看服务名

1. setup  ->  系统服务
2. ls  -l  /etc/init.d/                          列出系统有哪些服务

##### 服务的运行级别

![image-20210802161449628](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210802161449628.png)

##### 查看或者修改运行级别

vim  /etc/inittab

#### 设置每个服务的各个运行级别的自启动/关闭

##### 查看服务

chkconfig  --list  |  grep  sshd

chkconfig  iptables  --list               iptables为服务名

##### 将sshd服务在运行级别为5的情况下，不要自启动

chkconfig  --level  5  sshd  off

##### 显示当前系统所有服务的各个运行级别的运行状态

chkconfig  --list

##### 查看sshg服务的运行状态

service  sshd  status

##### 当运行级别为5时，关闭防火墙

chkconfig  --level  5  iptables  off

##### 在所有运行级别下，关闭防火墙

chkconfig  iptables  off

##### 在所有运行级别下，开启防火墙

chkconfig  iptables  on

##### 细节

chkconfig重启设置服务后，要reboot才生效

#### 动态监控进程

| 语法           | 功能                                       |
| -------------- | ------------------------------------------ |
| top  -d   秒数 | 指定top命令每隔几秒更新，默认3             |
| top  -i        | 使top不显示任何闲置或者僵死进程            |
| top  -p        | 通过指定监控进程id来仅仅监控某个进程的状态 |

| 交互操作 |                       |
| -------- | --------------------- |
| P        | 默认的以cpu使用率排序 |
| M        | 以内存的使用率排序    |
| N        | 以PID排序             |
| q        | 退出top               |

##### 实例

![image-20210802164209385](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210802164209385.png)

#### 查看系统网络情况

netstat   -an                  按一定顺序排列输出

netstat    -p                    显示哪个进程在调用

##### 查看所有网络服务

netstat   -anp  | more

##### 查看服务名为sshd的服务的信息

netstat   -anp  | grep  sshd

### RPM和YUM

#### rpm包的管理

##### 介绍

互联网下载包的打包及安装工具

##### 查看是否安装了firefox

rpm  -qa  |  grep  firefox

##### 包名的基本格式

![image-20210802164859955](C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210802164859955.png)

##### 查询所有已安装的所有rpm软件包

rpm  -qa

##### 查询软件包是否安装

rpm  -q  firefox

##### 查询安装的rpm软件包的信息

rpm -qi  firefox

##### 查询rpm包的文件安装到哪里去了

rpm  -ql  firefox

##### 查询某个文件属于哪个rpm包

rpm  -qf  /etc/passwd

#### 卸载rpm包

##### 删除firefox软件包

rpm  -e  firefox

##### 强力删除（不推荐）

rpm  -e  --nodeps  foo

#### 安装rpm包

##### 安装firefox           -i:安装        -v：提示       -h:  进度条

rpm  -ivh   firefox-45.0.1-1.el6.centos.x86_64.rpm

#### Yum

##### 介绍

能够下载rpm包并且安装，可以自动处理依赖性关系，一次性安装所有以来的软件包

##### yum安装firefox

1. 查看firefox   rpm在yum服务器上有没有    yum  list  |  grep  firefox
2. 安装  yum  install  firefox