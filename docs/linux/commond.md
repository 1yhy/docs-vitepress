## 常用命令

1. 要获取所有已加载的服务unit单元的列表，请输入：
```bash
sudo systemctl list-units --type service
```
- 默认情况下，该命令仅列出已加载的活动unit。要同时查看已加载但无效的unit，请传递以下--all选项：
```bash
sudo systemctl list-units --type service --all
```
- 如果要查看所有已安装的unit文件，而不仅仅是加载的unit文件
```bash
sudo systemctl list-unit-files
```

2. 显示服务状态
```bash
sudo systemctl status <service_name>.service  #.service可省略
```


### 删除文件夹（及其包含的所有文件和子文件夹），你可以使用 `rm` 命令配合 `-r`（或 `-rf`）选项。这里的 `-r` 代表递归删除。

1. **删除文件夹及其内容**：
   ```bash
   rm -r /path/to/directory
   ```

2. **强制删除文件夹及其内容**（不会询问确认）：
   ```bash
   rm -rf /path/to/directory
   ```


### 查看对应文件夹
```bash
 whereis mysql
 find / -name mysql
```

### 检查是否安装
```
rpm -qa|grep mysql
```

### 端口占用

```
1.先用ps -ef | grep xxx(某个进程)，可以查看某个进程的pid。
2.再用netstat -anp | grep pid号，可以查看到该进程占用的端口号!

1，lsof -i:端口号
2，netstat -tunlp|grep 端口号
```
