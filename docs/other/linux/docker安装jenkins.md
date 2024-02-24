## 使用 docker 安装 jenkins（服务器太小，好像运行不下，未完，待续。。。）

#### 安装 maven

https://maven.apache.org/download.cgi
下载`tar.gz`文件
上传服务器某个目录，进入目录，解压

```bash
tar -zxvf apache-maven-3.8.5-bin.tar.gz
# 重命名
mv apache-maven-3.8.5-bin.tar.gz apache-maven-3.8.5
```

#### 安装 jdk11

```bash
yum install -y java-11-openjdk.x86_64

#配置环境变量
vim /etc/profile

JAVA_HOME=/usr/lib/jvm/java-11-openjdk-11.0.20.0.8-1.el7_9.x86_64
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
PATH=$JAVA_HOME/bin:$PATH
export JAVA_HOME CLASSPATH PATH
export MAVEN_HOME=/opt/soft/maven/apache-maven-3.9.4
export PATH=${MAVEN_HOME}/bin:${PATH}

# 使配置生效
source /etc/profile
java -version
mvn -v
```

#### 配置 Maven 加速镜像

```bash
cd apache-maven-3.8.5/conf/

vim settings.xml

<mirrors>
	<mirror>
	    <id>alimaven</id>
	    <name>aliyun maven</name>
	    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
	    <mirrorOf>central</mirrorOf>
	</mirror>
</mirrors>
```

#### docker 安装 jenkins

- 进入http://hub.docker.com官方的镜像仓库，下载Jenkins的镜像
- 在 dockerhub 里搜索 jenkins/jenkins，点击 tag，搜索 jdk11，然后选择 jenkins:2.346.3-2-lts-jdk11 即可：
- 拉取镜像

```bash

docker pull jenkins/jenkins:2.414.1-lts-jdk11
```

- 运行 jenkins
- 注意中间空格格式，否则报错（docker: invalid reference format.See 'docker run --help'.）

```bash
docker run -p 8888:8080 -p 50000:50000 --name jenkins -u root --restart=always -v /opt/soft/jdk8/jdk8:/usr/local/jdk1.8 -v /opt/soft/jenkins_home:/var/jenkins_home -v /opt/soft/maven/apache-maven-3.9.4:/usr/local/maven -v /etc/localtime:/etc/localtime -d jenkins/jenkins:2.414.1-lts-jdk11
```

```
参数说明：
　-p 8888:8080   意义： 将镜像的8080端口映射到服务器的8888端口。
   50000是Agent连接Server用到的通信端口。(后面安装JenkinsAgent的时候要注意网络连通性)
　--name jenkins  意义：给容器起一个别名
　-v /opt/soft/jdk8/jdk8:/usr/local/jdk1.8  意义：是把linux下的jdk和容器内的关联
 -v /opt/soft/jenkins_home:/var/jenkins_home  意义： /var/jenkins_home目录为容器jenkins工作目录，我们将硬盘上的一个目录挂载到这个位置，方便后                        续更新镜像后继续使用原来的工作目录。这里设置的就是 /opt/soft/jenkins_home目录
　-v /etc/localtime:/etc/localtime  意义：让容器使用和服务器同样的时间设置。
 -d 后台运行镜像
 -v /opt/soft/maven/apache-maven-3.9.4:/usr/local/maven 意义：挂载本地maven，前面是服务器上的，后面是挂载到容器上的目录，后面使用maven时只能找到容器上的目录，有需要maven的话最好要挂载一下
```

#### 修改 jenkins 镜像

清华源地址： https://mirrors.tuna.tsinghua.edu.cn/
找到 jenkins/updates 和自己相似的版本
在上面自己配置的`/opt/soft/jenkins_home`目录下，修改`hudson.model.UpdateCenter.xml`内容

```
将 url 修改为 清华大学官方镜像：https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/2.46/update-center.json
```

#### 获取 jenkins 密码

```bash
sudo docker logs jenkins
```

#### jenkins 容器配置 maven 环境变量

```bash
#root权限进入容器
docker exec -u 0 -it 容器ID /bin/bash

#安装vim
apt-get update
apt-get install vim

#添加环境变量
export JAVA_HOME=/opt/java/openjdk
export MAVEN_HOME=/usr/local/maven
export PATH=$PATH:$JAVA_HOME/bin:${MAVEN_HOME}/bin

source /etc/profile

#好像退出容器环境变量就不生效了，可以写到~/.bashrc目录里
vim ~/.bashrc
source ~/.bashrc
```

## 参考链接

[Docker 安装 Jenkins 及配置详细教程](https://juejin.cn/post/6854573218687746062)
[超详细 Docker 安装 Jenkins（避坑！！！）](https://juejin.cn/post/6862497968973742094)
[Docker 安装 Jenkins 打包 Maven 项目为 Docker 镜像并运行](https://blog.51cto.com/wangzhenjun/5373487)
[实战：docker 方式安装 jenkins-2023.3.19(测试成功)(荐)](https://zhuanlan.zhihu.com/p/615571448)
[docker 安装 jenkins 后 配置 jdk maven 路径不识别问题](https://blog.csdn.net/yemao6/article/details/127422501)
[Docker 系列之搭建 Jenkins 持续集成 Maven 项目](https://blog.csdn.net/liu320yj/article/details/123633994)
