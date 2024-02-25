1. #### 基本git安装

   按照文档上的来

2. #### 常用命令

   | 命令名称                             | 作用                           |
   | :----------------------------------- | ------------------------------ |
   | git config --global user.name 用户名 | 设置用户签名（第一次用时使用） |
   | git config --global user.email 邮箱  | 设置用户签名                   |
   | git init                             | 初始化本地库                   |
   | git status                           | 查看本地库状态                 |
   | git add 文件名                       | 添加到暂存区                   |
   | git commit -m "日志信息" 文件名      | 提交到本地库                   |
   | git reflog                           | 查看历史记录                   |
   | git log                              | 详细记录                       |
   | git reset --hard 版本号              | 版本穿梭                       |

3. ##### git status: 检测到未追踪的文件时，将未追踪的文件添加到暂存区，将暂存区的文件提交到本地库。版本号用git reflog的版本号。

4. ##### 注意对应的分支，现在在的分支

   <img src="C:\Users\HDR\AppData\Roaming\Typora\typora-user-images\image-20210528151636973.png" alt="image-20210528151636973" style="zoom:150%;" />

5. #### 分支操作

   | 命令名称            | 作用                         |
   | ------------------- | ---------------------------- |
   | git branch 分支名   | 创建分支                     |
   | git branch -v       | 查看分支                     |
   | git checkout 分支名 | 切换分支                     |
   | git merge 分支名    | 把指定的分支合并到当前分支上 |

   - ##### 无冲突：

     直接就合并了

   - ##### 有冲突：

     原因:  合并分支时，两个分支在同一个文件的同一个位置有两套完全不同的修改。

     冲突产生的表现：后面状态为 MERGING

   - ##### 解决冲突:

     1. 编辑有冲突的文件，删除特殊符号，决定要使用的内容  --> 文件保存后
     2. 添加到暂存区， git add hello.txt
     3. 执行提交, git commit -m "merge hot-fix"           （ **一定不要带文件名**）

6. #### 团队协作

   - ##### 团队内协作:

     1. ###### github上建立远程仓库，Git_fuzhu

        - 远程仓库操作

          | 命令名称                           | 作用                                                      |
          | ---------------------------------- | --------------------------------------------------------- |
          | git remote -v                      | 查看当前所有远程地址别名                                  |
          | git remote add 别名 远程地址       | 起别名                                                    |
          | git push 别名 分支                 | 推送本地分支上的内容到远程仓库                            |
          | git clone 远程地址                 | 将远程仓库的内容克隆到本地                                |
          | git pull 远程库地址别名 远程分支名 | 将远程仓库对于分支最新内容拉下来后与 当前本地分支直接合并 |

     2. ###### 起别名

        git remote add 别名 远程地址 . 

        git remote add ori https://github.com/3167253066/Git_fuzhu.git

     3. ###### 推送本地分支到远程仓库

        git push ori master

     4. ###### 克隆远程仓库到本地

        git clone http://github.com/3167253066/Git_fuzhu.git

        clone 会做如下操作。1、拉取代码。2、初始化本地仓库。3、创建别名

     5. ###### 邀请加入团队

        - 项目中的settings --> Manage access -->  Invite a collaborator
        - 填写邀请人的邮件等地址-->邀请
        - 复制邀请的地址，发送给该用户
        - 用户在他的账号的地址栏复制收到邀请的链接，点击接受邀请
        - 成功后被邀请的用户也可以在自己账号上看到Git_fuzhu的远程仓库，并且可以修改内容并且push

     6. ###### 拉取远程库内容

        git pull 远程库地址别名 远程分支名

        **将远程仓库对于分支最新内容拉下来后与当前本地分支直接合并**



### 关于git的几个问题

#### （1）git push 的 -u 参数具体作用？

就是你第一次使用 git push -u origin master 之后，
第二次【下次，以后】可以直接使用 git pull 拉取代码，就不需要输入完整的命令 git pull origin master 来拉取代码了。
即 第二次 使用 git pull 等同于执行 git pull origin master。
然后第二次也可以用 git push推送代码而不用git push origin master。
即第二次 使用 git push 等同于执行 git push origin master。



