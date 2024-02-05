## centos7 安装 Mysql 5.7

#### 一、下载地址：https://dev.mysql.com/downloads/mysql/5.7.html

#### 二、mysql5.7安装包上传到linux服务器
- linux服务器根目录下新建文件夹：
1）soft文件夹，存放软件安装包

- 将下载好的mysql-5.7.36-linux-glibc2.12-x86_64.tar.gz上传至soft文件夹下：


#### 三、检查系统是否安装过mysql
检查系统是否安装过mysql,如果没有略过此步骤：如下图：
```bash
#检查系统中有无安装过mysql
rpm -qa|grep mysql
```

```bash
# 如果系统自带mysql，查询所有mysql 对应的文件夹，全部删除
 whereis mysql
 find / -name mysql
```
#### 四、卸载CentOS7系统自带mariadb
```bash
#查看系统自带的Mariadb
rpm -qa|grep mariadb

#卸载系统自带的Mariadb
rpm -e --nodeps mariadb-libs-5.5.60-1.el7-5.x86_64

#删除etc目录下的my.cnf ，一定要删掉，等下再重新建，之前我将就用这个文件，后面改配置各种不生效，因为lz此目录下没有my.cnf文件，没有执行可命令
rm /etc/my.cnf
```
**补充**
- `MariaDB` 是一个开源的关系数据库管理系统，它是由 `MySQL` 的原始开发者之一，Monty Widenius，创建的，并且是作为 `MySQL` 的一个分支（fork）开始的。这个分支的目的是确保该项目保持完全开源，特别是在 Oracle 公司于 2010 年收购了 MySQL 后。

在 CentOS 和其他一些 Linux 发行版中，`MariaDB` 被选为默认的 MySQL 实现，这意味着当你在这些系统上安装 "MySQL" 时，你实际上可能会得到 `MariaDB`。

以下是关于 `MariaDB` 的一些关键点：

1. **兼容性**：`MariaDB` 与 `MySQL` 高度兼容，因为它们共享相同的源代码基础。这意味着大多数情况下，你可以直接将 `MySQL` 数据库迁移到 `MariaDB`，反之亦然。

2. **新特性**：尽管 `MariaDB` 与 `MySQL` 兼容，但它还引入了一些新特性和改进，如更好的性能、新的存储引擎等。

3. **开源**：`MariaDB` 是完全开源的，并且采用 GPL v2 许可。

4. **社区驱动**：`MariaDB` 由一个活跃的开发者和用户社区支持，这确保了其持续的开发和改进。

在 CentOS 7 中，当你使用 `yum` 安装 `mysql-server` 时，你实际上会得到 `MariaDB`。如果你已经熟悉 `MySQL`，那么使用 `MariaDB` 应该会非常直观，因为两者在使用和管理上非常相似。



#### 五、检查有无安装过mysql 用户组，没有的话创建
```bash
#检查mysql 用户组是否存在
cat /etc/group | grep mysql
cat /etc/passwd |grep mysql



#创建mysql 用户组和用户
groupadd mysql
useradd -r -g mysql mysql
```


#### 六、安装mysql5.7步骤
```bash
#解压安装mysql安装包到/soft/目录下
tar -zxvf mysql-5.7.36-linux-glibc2.12-x86_64.tar.gz -C  /soft

#修改mysql-5.7.36-linux-glibc2.12-x86_64名称为mysql5.7
mv mysql-5.7.36-linux-glibc2.12-x86_64/ mysql5.7


#更改mysql5.7 目录下所有文件夹所属的用户组、用户以及权限
chown -R mysql:mysql /soft/mysql5.7
chmod -R 755 /soft/mysql5.7

#进入/soft/mysql5.7/bin/目录，编译安装并初始化mysql,务必记住数据库管理员临时密码,如下图画红色框的部分。

./mysqld --initialize --user=mysql --datadir=/soft/mysql5.7/data --basedir=/soft/mysql5.7


#编写etc目录下的my.cnf 配置文件，并添加配置
#进入配置文件
vi /etc/my.cnf

#在插入模式下编写，完成后保存，当然这个可以自己添加
[mysqld]
datadir=/soft/mysql5.7/data
port = 3306
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
symbolic-links=0
max_connections=400
innodb_file_per_table=1
#表名大小写不明感，敏感为
lower_case_table_names=1

##授予my.cnf 配置文件775权限，如下：

chmod -R 775 /etc/my.cnf


#修改/soft/mysql5.7/support-files/目录下的mysql.server文件中5个位置的/usr/local/mysql全部修改成/soft/mysql5.7。
#因为没有安装下/usr/local/mysq目录下，所以需要修改成安装的/soft/mysql5.7目录。

```

##### 启动mysql 服务器
1）、查询服务
```bash
ps -ef|grep mysql
ps -ef|grep mysqld
```

2）、启动服务
```bash
 /soft/mysql5.7/support-files/mysql.server start
```


##### 添加软连接，并重启mysql 服务
```bash
#添加软连接
ln -s /soft/mysql5.7/support-files/mysql.server /etc/init.d/mysql
ln -s /soft/mysql5.7/bin/mysql /usr/bin/mysql
#重启mysql服务
service mysql restart


#登录mysql ，密码就是初始化时生成的临时密码

 mysql -u root -p


#修改密码为root

set password for root@localhost = password('root');


#开放远程连接

use mysql;
update user set user.Host='%' where user.User='root';
flush privileges;

#设置开机自启

#将服务文件拷贝到init.d下，并重命名为mysql
cp /soft/mysql5.7/support-files/mysql.server /etc/init.d/mysqld
#赋予可执行权限
chmod +x /etc/init.d/mysqld
#添加服务
chkconfig --add mysqld
#显示服务列表
chkconfig --list

开放3306端口，测试本地客户端是否连接成功

#开放3306端口命令
firewall-cmd --zone=public --add-port=3306/tcp --permanent
#配置立即生效
firewall-cmd --reload
```
##### 数据库的操作
```bash
（1）查看mysql是否启动：service mysqld status

启动mysql：service mysqld start

停止mysql：service mysqld stop

重启mysql：service mysqld restart

（2）查看临时密码：grep password /var/log/mysqld.log
```
至此，centos7安装mysql5.7完成，本客户端连接centos7中的mysql5.7服务端成功。

