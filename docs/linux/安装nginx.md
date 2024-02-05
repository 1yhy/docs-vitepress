## 安装nginx
- Linux的两种安装方式 首先，介绍一下Linux的安装方式，可以是yum安装，也可以是源码包安装。
- yum安装：简单方便，不易出错。
- 源码包安装：有点繁琐，但是服务性能好。 
### 第一种、yum 安装 
1. 安装 Nginx yum 
- 安装nginx非常简单，就输入一条命令即可。 
```bash
sudo yum -y install nginx # 安装 nginx
sudo yum remove nginx  # 卸载 nginx
```
- 使用yum进行Nginx安装时，Nginx配置文件在/etc/nginx目录下。

1. 配置 Nginx 服务
```bash
$ sudo systemctl enable nginx # 设置开机启动 
$ sudo service nginx start # 启动nginx服务
$ sudo service nginx stop # 停止nginx服务
$ sudo service nginx restart # 重启nginx服务
$ sudo service nginx reload # 重新加载配置，一般是在修改过nginx配置文件时使用。
nginx默认目录在：/usr/share/nginx/html
```


### 第二种

#### 一、配置 EPEL源
```bash
sudo yum install -y epel-release
sudo yum -y update
```
#### 二、安装Nginx
```bash
sudo yum install -y nginx
```
- 安装成功后，默认的网站目录为： /usr/share/nginx/html

- 默认的配置文件为：/etc/nginx/nginx.conf

- 自定义配置文件目录为: /etc/nginx/conf.d/

#### 三、开启端口80和443
如果你的服务器打开了防火墙，你需要运行下面的命令，打开80和443端口。
```bash
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```
