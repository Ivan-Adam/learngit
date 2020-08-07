# git learning





## 名词

1. Repository
   * 本地仓库 
   * 创建本地仓库的文件夹为工作目录
   * .git文件即为本地版本库
   * 
2. 暂存区
3. 分支概念   dev Head指针的指向调整  
4. 1



```	
简单记录一下git使用流程

```

### 操作名称

1.   修改内容

   * 做修改后用add命令提交到暂存区   可以add提交多次
   * 工作结束、或有需要提交工作内容时，使用commit 命令

2. 删除内容

   * 同上

3. 链接GitHub远程仓库后需要同步时

   * push操作会检查远程仓库是否比本地仓库更新（在本地分支push之前有其他分支先push了）  如果有，会push失败，此时需要从远程仓库pull到工作区，进行冲突解决 ，冲突解决之后，再次提交到暂存区，再次push，以此循环

     

命令[^git commit]

[^git commit]:用于创建仓库

命令[^git add]

[^git add]:用于添加修改到暂存区

命令[^git commit] 

[^git commit]:用于提交到本地仓库

命令 [^git clone]

[^git clone]: 用于从远程仓库直接复制到本地仓库一份一模一样的文件









![1596441132699](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1596441132699.png)



![1596441678562](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1596441678562.png)




