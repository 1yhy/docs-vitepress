# git常用命令

gitbash别名设置：
```bash
cd D:\soft\Git\etc\profile.d


// 添加别名
alias gs='git status'
alias ga='git add .'
alias gc='git commit -m'
alias gch='git checkout'
alias gcm='git checkout master'
alias gpu='git push'
alias gcl='git clone'
alias gpl='git pull'
alias gb='git branch'
alias gbd='git branch -d'
alias gcn='git config user.name yanghongyu'
alias gce='git config user.email a319139806@163.com'

alias md='mkdir'
alias rd='rmdir'
alias ..='cd ..'
alias ...='cd ../..'

alias nu='nrm use'
alias nls='nrm ls'

alias nv='nvm use'
alias nvl='nvm ls'


alias ni='npm install'
alias nrd='npm run dev'
alias nrs='npm run start'
alias ns='npm start'

alias pi='pnpm install'
alias prd='pnpm run dev'
alias prs='pnpm run start'

alias yi='yarn install'
alias yrd='yarn run dev'
alias yrs='yarn run start'
```

初始化

```git
git init (your_project)
```

配置

```
--local  只对当前仓库有效
--global 对当前用户所有仓库有效
--system 对系统登录的所有用户有效
git config --global user.name 'your_name'
git config --global user.email 'your_email@domain.com'
```

显示config配置

```
git config --list --local(--global/--system)
```

提交给git管理

```
git add
```

提交变更

```
git commit -m 'message'
git commit -am 'message'
```

日志信息

```
git log
git log --oneline
git log -n(最近几次:eg:n4) --oneline
git log --all(所有分支) --graph(图形化)
```

查看目录信息

```
ls -al
```

拷贝文件

```
cp 要拷贝的文件 拷贝到的文件位置
```

重命名文件

```
git mv 原名字 改变成的名字
```

清除暂存区的变更

```
git reset --hard
```

图形化界面

```
gitk --all
```

分离头指针

```
git checkout 某个commit的值(没有绑定任何分支)
git commit -am 'message' 提交变更
git branch 新分支名(绑定上面的commit) 某个commit的值
```

查看文件信息

```
git cat 文件名
git cat-file -t hash值
git cat-file -p hash值
```

对比差异

```
git diff 第一个hash值 第二个hash值
```

删除不需要的分支

```
git branch -d 分支名
git branch -D 分支名
```

查看分支信息

```
git branch -av
```

修改最近一次commit的message

```
git commit -amend
```

修改旧的commit的message(多人协作尽量避免操作)

```
git rebase -i 改变的commit的父亲hash值
=>
进入编辑界面
=>
把要修改的commit前的pick改成r,保存
```

把多个连续commit合并成一个

```
git rebase -i 多个commit的父亲hash值
=>
进入编辑界面
=>
把父commit后的要合并的commit的pick都改成s,保存


！！不连续commmit可在编辑界面调整要合并的commit位置到父commit下合并就行
```

比较暂存区和HEAD所含文件差异

```
git diff -cached
```

比较暂存区和工作区所含文件差异

```
git diff (文件名)
```

让暂存区恢复和HEAD一样

```
git reset HEAD <file>
```

让工作区恢复和暂存一样

```
git checkout -- <file>
```

消除最近几次commit

```
git reset --hard 要回到的commit位置的hash值
```

比较分支差异

```
git diff 分支名 分支名 （文件名）
git diff hash值 hash值 （文件名）
```

删除文件

```
git rm 文件名
```

紧急事件暂停当前任务，暂存stage

```
git stash
git stash pop/apply(apply不会删除暂存区信息)
```

连接远程仓库

```
git remote add (改名，默认origin) 远程地址
git remote -v
```

拉取远程仓库

```
git fetch origin master
git merge -h(查看merge命令)
git merge (--allow-unrelated-histories) origin/master
```

不同人处理不同文件

```
切换分支
git checkout 分支名 origin/远程分支名(将本地创建的分支与远程分支关联)
git branch -v
1、git fetch origin
2、git merge origin/远程分支名
3、git push
```

不同人修改同个文件不同区域

```
1、git fetch origin
2、git merge origin/远程分支名
3、git push
```

不同人修改同个文件相同区域

```
git commit....
git push...
出现冲突
git merge 远程分支
git pull
修改冲突位置
git commit -am 'message'
git push
```

同时变更文件名和内容

```
git push
出现错误，先
git pull
再git push
```

同时修改同一个文件文件名

```
git push
报错
git pull
git报冲突，不对文件修改，自行协商解决
```
