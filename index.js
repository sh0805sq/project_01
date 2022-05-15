//git init 初始化本地仓库 会生成 .git 隐藏文件



//通过 git status 查看当前文件状态
//显示得状态 未被追踪的文件 untrack

//可以使用 clear 清除屏幕信息

//查看状态精简命令 git status -s  /  git status --short
// ?? 表示当前文件未被追踪的意思
// A 表示当前文件已处于追踪文件

// M 表示当前文件已经修改了

//跟踪新文件 git add index.js   (tab键补全路径)
// ↑ ↓ 箭头返回代码

//git commit -m '描述信息'
// -m 表示 message 的意思  ⭐命令后面的描述信息一定要写

//已修改文件 红色modified M

//暂存已修改的文件
// git add 命令 绿色modified M

//add命令的作用
//1.可以添加新的文件
//2.文件做了修改之后，本地提交之前还需要add一下
//3.多个人合并完代码之后，解决冲突之后，提交之前，还需要add一下

//git checkout -- .\index.js 撤销

//一次性添加多个文件到暂存区里面 git add .

//跳过使用暂存区 git add 和 gie commit 两个命令的复合写法
//git commit -a -m "描述"

//取消暂存的文件 git reset HEAD 要移除的文件名称 (了解)
//全部移除git reset HEAD .

//移除文件 (了解) git rm -f 要移除的文件  remove  force强制
//只移除仓库里面的文件，保留本地的文件 git rm --cached 要移除的文件

//查看提交历史 git log   查看最新两条 git log -2

//回退到指定的版本
//1.在一行上展示所有的提交历史
//git log --pretty=oneline
//2.使用git reset --hard 根据指定的提交ID退回到指定版本
//git reset --hard <CommitID>
//3.在旧版本中使用git log --pretty=oneline 查看命令操作的地址
//4.再次根据最新的提交ID 跳转到最新的版本
//git reset --hard <CommitID>



//查看本地工程关联的远程仓库是哪个 git remove -v




// 1. git remote add origin https://github.com/sh0805sq/project_01.git (是用来关联本地仓库和远程仓库的)

//remote 远程的意思
//add 添加
//origin 后面的地址仓库的别名
//远程仓库的地址 https://github.com/sh0805sq/project_01.git

// 2. git branch -M main (把默认的master 分支名称改成了 main)

// 3. git push -u origin main 表示第一次本地仓库朝远程仓库提交的时候 必须这么写

//push 推送
//-u 表示第一次推送的时候 必须添加-u元素
//origin 表示要把工程往哪推 这个名字代表的地址就是你要推送的地址
//main 表示上面那个地址所有的某一点 (房间，分支)

// 4. 后面 修改完代码之后 只需要走 git push 即可