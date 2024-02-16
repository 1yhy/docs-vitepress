# Git 命令别名配置

## windows

- 找到安装 git 目录下的`etc\profile.d\aliases.sh`目录
- 在可编辑的应用中打开，添加别名配置

```bash
alias ls='ls -F --color=auto --show-control-chars'
alias ll='ls -l'
alias ga='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gpl='git pull'
alias gco='git checkout'
alias gcb='git checkout -b'
alias gcm='git checkout master'
alias gcn='git config user.name'
alias gce='git config user.email'
alias gcl='git clone'
alias gbd='git branch -d'

alias md='mkdir'
alias rd='rmdir'
alias ..='cd ..'
alias ...='cd ../..'

# npm
alias ni='npm install'
alias nid='npm install -d'
alias ns='npm run start'
alias nd='npm run dev'
alias nb='npm run build'
alias nt='npm run test'
alias np='npm publish'
alias ncl='npm cache clean --force' # 清理 npm 缓存
alias nu='npm update' # 更新所有包
alias nui='npm uninstall' # 卸载包
alias nl='npm list' # 列出已安装的包

# yarn
alias yi='yarn add'
alias yid='yarn add --dev'
alias ys='yarn start'
alias yd='yarn dev'
alias yb='yarn build'
alias yt='yarn test'
alias yp='yarn publish'
alias ycl='yarn cache clean'
alias yu='yarn upgrade'
alias yui='yarn remove'
alias yl='yarn list'

# pnpm
alias pi='pnpm add'
alias pid='pnpm add --save-dev'
alias ps='pnpm start'
alias pd='pnpm dev'
alias pb='pnpm build'
alias pt='pnpm test'
alias pp='pnpm publish'
alias pcl='pnpm store prune'
alias pu='pnpm update'
alias pui='pnpm remove'
alias pl='pnpm list'

# nvm
alias nvl='nvm ls' # 列出已安装的 Node.js 版本
alias nvi='nvm install' # 安装指定版本的 Node.js
alias nvu='nvm use' # 切换到指定版本的 Node.js
alias nvd='nvm deactivate' # 停用 nvm
alias nvn='nvm current' # 显示当前使用的 Node.js 版本
alias nva='nvm alias' # 创建版本别名

# nrm
alias nrl='nrm ls' # 列出所有可用的 npm 镜像源
alias nru='nrm use' # 切换到指定的 npm 镜像源
alias nra='nrm add' # 添加一个新的 npm 镜像源
alias nrd='nrm del' # 删除一个 npm 镜像源
alias nrc='nrm current' # 显示当前使用的 npm 镜像源
```

## npm 修改源镜像

```
npm config set registry https://registry.npmmirror.com/

npm config get registry
```
