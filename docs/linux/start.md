## 基础

**部分内容为ChatGpt生成，可能不一定准确，仅供参考**

### Linux文件目录
Linux 和 Windows 的文件系统结构有所不同。在 Linux 中，所有内容都是从根目录 `/` 开始的，而在 Windows 中，每个磁盘分区都有自己的根目录（如 `C:\`、`D:\` 等）。

以下是 Linux 根目录下的主要文件夹及其作用，以及与 Windows 的对比：

1. **`/bin`**：
   - **Linux**：包含基本的、必要的可执行文件（命令），如 `ls`、`cp` 等，用于系统启动和修复。
   - **Windows**：部分可比较于 `C:\Windows\System32`，但 Windows 的命令和可执行文件分散在多个目录中。

2. **`/boot`**：
   - **Linux**：包含启动加载器和核心映像等启动相关文件。
   - **Windows**：部分可比较于 `C:\Windows\Boot`。

3. **`/dev`**：
   - **Linux**：设备文件的位置。在 Linux 中，硬件设备被表示为文件，如 `/dev/sda`（硬盘）。
   - **Windows**：没有直接的对应，但设备管理器显示了系统中的设备。

4. **`/etc`**：
   - **Linux**：系统全局配置文件的位置。
   - **Windows**：部分可比较于 `C:\Windows\System32\config` 或注册表。

5. **`/home`**：
   - **Linux**：用户的主目录，每个用户都有自己的子目录，如 `/home/username`。
   - **Windows**：类似于 `C:\Users\username`。

6. **`/lib` 和 `/lib64`**：
   - **Linux**：系统库文件的位置，这些库支持 `/bin` 和 `/sbin` 中的可执行文件。
   - **Windows**：部分可比较于 `C:\Windows\System32`。

7. **`/media` 和 `/mnt`**：
   - **Linux**：外部设备（如 USB 驱动器、CD-ROM）的挂载点。
   - **Windows**：每个设备都有自己的字母驱动器，如 `D:\`、`E:\` 等。

8. **`/opt`**：
   - **Linux**：可选的应用软件包的位置。
   - **Windows**：某些软件可能安装在 `C:\Program Files` 或其他自定义目录中。

9. **`/proc`**：
   - **Linux**：一个虚拟文件系统，包含系统和进程信息。
   - **Windows**：没有直接的对应，但任务管理器提供了类似的信息。

10. **`/root`**：
    - **Linux**：root 用户的主目录。
    - **Windows**：没有直接的对应，但管理员账户有其自己的用户目录。

11. **`/sbin`**：
    - **Linux**：系统管理命令和程序的位置。
    - **Windows**：部分可比较于 `C:\Windows\System32`。

12. **`/tmp`**：
    - **Linux**：临时文件的存放位置。
    - **Windows**：类似于 `C:\Windows\Temp`。

13. **`/usr`**：
    - **Linux**：大部分用户命令和应用程序的位置，还包括库、头文件等。
    - **Windows**：部分可比较于 `C:\Program Files` 和 `C:\Windows`。

14. **`/var`**：
    - **Linux**：经常变化的文件的位置，如日志文件、数据库、邮件队列等。
    - **Windows**：部分可比较于 `C:\Windows\Logs` 和其他日志或数据存储位置。

这只是一个简要的对比。Linux 和 Windows 的文件系统结构和设计哲学有很大的不同，但理解这些基本的目录和它们的作用可以帮助你更好地在 Linux 环境中工作。

### 下载文件命令区别
Linux 系统中有多种命令和工具用于下载文件或软件包。以下是一些常用的下载命令、工具及其区别和作用：

1. **wget**：
   - **作用**：从网络上下载文件。
   - **区别**：是一个命令行工具，支持HTTP、HTTPS和FTP协议，可以进行递归下载。
   - **示例**：`wget http://example.com/file.zip`

2. **curl**：
   - **作用**：从或向网络传输数据。
   - **区别**：与 `wget` 类似，但更为强大和灵活。除了下载，还可以上传数据，支持更多的协议如 SCP、SFTP 等。
   - **示例**：`curl -O http://example.com/file.zip`

3. **yum**：
   - **作用**：是 Red Hat 系（如 CentOS、Fedora）的包管理工具，用于安装、更新、删除软件包。
   - **区别**：它处理软件包及其依赖关系，使用 RPM 包格式。
   - **示例**：`yum install nginx`

4. **apt (apt-get)**：
   - **作用**：是 Debian 系（如 Ubuntu、Debian）的包管理工具。
   - **区别**：与 `yum` 类似，但使用 DEB 包格式。
   - **示例**：`apt-get install nginx`

5. **dnf**：
   - **作用**：是新一代的包管理工具，预计将替代 `yum`。
   - **区别**：与 `yum` 类似，但更为现代，提供更好的性能和依赖解析。
   - **示例**：`dnf install nginx`

6. **pacman**：
   - **作用**：是 Arch Linux 的包管理工具。
   - **区别**：使用 tar.xz 格式的包，有一个简洁的命令语法。
   - **示例**：`pacman -S nginx`

7. **zypper**：
   - **作用**：是 openSUSE 的包管理工具。
   - **区别**：与 `yum` 和 `apt` 类似，但专为 openSUSE 设计。
   - **示例**：`zypper install nginx`

8. **snap**：
   - **作用**：是一个跨发行版的包管理工具，用于安装 snap 包。
   - **区别**：snap 包包含应用及其所有依赖，使得应用在所有支持的 Linux 发行版上都能一致地运行。
   - **示例**：`snap install vscode`

9. **flatpak**：
   - **作用**：与 `snap` 类似，是一个跨发行版的包管理工具。
   - **区别**：使用 Flatpak 格式的包，与 `snap` 有些许不同的设计哲学。
   - **示例**：`flatpak install flathub com.spotify.Client`

这些工具中，`wget` 和 `curl` 主要用于下载文件，而 `yum`、`apt`、`dnf`、`pacman`、`zypper`、`snap` 和 `flatpak` 主要用于软件包管理。选择哪个工具取决于你的发行版和具体需求。


### 替换yum源镜像

替换为清华大学的镜像源具体步骤会因不同的 Linux 发行版和包管理工具而异。以下是一些常见的 Linux 发行版如何替换为清华大学的镜像源：

1. **Ubuntu (使用 APT)**：
   - 备份原有的源列表文件：
     ```bash
     sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
     ```
   - 使用编辑器编辑源列表文件：
     ```bash
     sudo nano /etc/apt/sources.list
     ```
   - 将文件中的内容替换为清华大学的镜像源。例如，对于 Ubuntu 20.04 (Focal Fossa)：
     ```plaintext
     deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
     deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
     deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
     deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
     ```
   - 更新软件包列表：
     ```bash
     sudo apt update
     ```

2. **CentOS (使用 YUM)**：
   - 备份原有的 YUM 源配置文件：
     ```bash
     sudo cp -r /etc/yum.repos.d /etc/yum.repos.d.bak
     ```
   - 下载 CentOS 镜像源文件，并替换默认的源：
     ```bash
     阿里源（推荐）：
    wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
    网易源：
    wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.163.com/.help/CentOS7-Base-163.repo
     ```
   - 清除缓存并生成新的缓存：
     ```bash
     sudo yum clean all
     sudo yum makecache
     ```

3. **Fedora (使用 DNF)**：
   - 备份原有的 DNF 源配置文件：
     ```bash
     sudo cp -r /etc/yum.repos.d /etc/yum.repos.d.bak
     ```
   - 下载清华大学的 Fedora 镜像源文件，并替换默认的源：
     ```bash
     sudo wget -O /etc/yum.repos.d/fedora.repo https://mirrors.tuna.tsinghua.edu.cn/help/fedora/fedora.repo
     sudo wget -O /etc/yum.repos.d/fedora-updates.repo https://mirrors.tuna.tsinghua.edu.cn/help/fedora/fedora-updates.repo
     ```
   - 清除缓存并生成新的缓存：
     ```bash
     sudo dnf clean all
     sudo dnf makecache
     ```

以上是一些常见的 Linux 发行版如何替换为清华大学的镜像源的步骤。具体的 URL 和步骤可能会随着时间和版本的变化而变化，建议访问清华大学开源软件镜像站的[帮助页面](https://mirrors.tuna.tsinghua.edu.cn/help/)以获取最新的信息。

### 更换Docker源镜像

**比较快的镜像源**
|网站	|网址|
| --| --|
|网易云	|https://hub-mirror.c.163.com|
|百度云	|https://mirror.baidubce.com|
|阿里云	|https://ustc-edu-cn.mirror.aliyuncs.com|

- 编辑配置文件
编辑 /etc/docker/daemon.json 配置文件
```bash
创建配置文件目录
$ sudo mkdir /etc/docker

编辑配置文件，如果文件不存在，需要自己创建一个。
$ sudo vim /etc/docker/daemon.json

将配置信息粘贴到配置文件中，配置信息为 json 格式，可以根据实际需要设置多个国内的镜像服务器。
{
  "registry-mirrors": [
	"https://ustc-edu-cn.mirror.aliyuncs.com"
  ]
}

```

#### 重启docker服务
```bash
$ sudo systemctl daemon-reload 
$ sudo systemctl restart docker

```
#### 查看镜像源

```bash
$ sudo docker info
看到相关网址已经更改即修改成功
```


## 解决apt-get下载速度慢

1. 更换apt-get为国内镜像源
查看所用的源:
```bash
sudo gedit /etc/apt/sources.list 
```
2. 重命名原来的源作为备份：
```bash
sudo mv /etc/apt/sources.list /etc/apt/sources.list.backup
```

3. 新建一个sources.list文件
```bash
sudo gedit /etc/apt/sources.list
```
4. 复制以下内容并保存（阿里云源）：
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse

5. 更新apt软件源：
```bash
sudo apt-get update
```

## 参考链接
[解决apt-get下载速度慢的两种方式](https://blog.csdn.net/weixin_46474546/article/details/104708220)
