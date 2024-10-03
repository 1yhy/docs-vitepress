## 安装 Nginx Proxy Manager

1. 创建安装目录

```bash
sudo -i

mkdir -p /root/data/docker_data/npm

cd /root/data/docker_data/npm #这边我们直接用 docker 的方式安装。

vim docker-compose.yml

# 输入安装脚本
version: '3'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'  # 保持默认即可，不建议修改左侧的80
      - '81:81'  # 冒号左边可以改成自己服务器未被占用的端口
      - '443:443' # 保持默认即可，不建议修改左侧的443
    volumes:
      - ./data:/data # 冒号左边可以改路径，现在是表示把数据存放在在当前文件夹下的 data 文件夹中
      - ./letsencrypt:/etc/letsencrypt  # 冒号左边可以改路径，现在是表示把数据存放在在当前文件夹下的 letsencrypt 文件夹中
```

2. 打开防火墙的端口 81

3. 查看端口是否被占用（以 81 为例），输入：

```bash
lsof -i:81  #查看 81 端口是否被占用，如果被占用，重新自定义一个端口
#如果啥也没出现，表示端口未被占用，我们可以继续下面的操作了～
```

4. 运行并访问 Nginx Proxy Manager
   最后：

```bash
cd /root/data/docker_data/npm   # 来到 dockercompose 文件所在的文件夹下

docker compose up -d
```

5. 理论上我们就可以输入 http://ip:81 访问了。

```bash
默认登陆名和密码：

Email:    admin@example.com
Password: changeme
```

::: tip
注意：

1、不知道服务器 IP，可以直接在命令行输入：curl ip.sb，会显示当前服务器的 IP。

2、遇到访问不了的情况，请再次检查在宝塔面板的防火墙和服务商的后台防火墙是否打开对应了端口。
:::

### 更新 Nginx Proxy Manager

```bash
cd /root/data/docker_data/npm

docker-compose down

cp -r /root/data/docker_data/npm /root/data/docker_data/npm.archive  # 万事先备份，以防万一

docker-compose pull

docker-compose up -d    # 请不要使用 docker-compose stop 来停止容器，因为这么做需要额外的时间等待容器停止；docker-compose up -d 直接升级容器时会自动停止并立刻重建新的容器，完全没有必要浪费那些时间。

docker image prune  # prune 命令用来删除不再使用的 docker 对象。删除所有未被 tag 标记和未被容器使用的镜像

WARNING! This will remove all dangling images.
Are you sure you want to continue? [y/N]
```

### 卸载 Nginx Proxy Manager

```bash
cd /root/data/docker_data/npm

docker-compose down

rm -rf /root/data/docker_data/npm  # 完全删除映射到本地的数据
```

[原文链接](https://blog.laoda.de/archives/nginxproxymanager#%E5%BC%80%E5%A7%8B%E9%83%A8%E7%BD%B2)
