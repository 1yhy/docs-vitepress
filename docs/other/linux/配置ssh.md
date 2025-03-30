# 配置ssh

## 配置SSH_PRIVATE_KEY

SSH_PRIVATE_KEY是您用于连接服务器的SSH私钥。以下是获取和配置SSH_PRIVATE_KEY的步骤：

1. **查看是否已有SSH密钥对**：
   在您的本地计算机上，检查是否已经有SSH密钥：
   ```
   ls -la ~/.ssh
   ```
   如果存在`id_rsa`（私钥）和`id_rsa.pub`（公钥）文件，则已经有SSH密钥对。

2. **如果没有SSH密钥，创建一个新的密钥对**：
   ```
   ssh-keygen -t rsa -b 4096 -C "您的邮箱地址"
   ```
   按照提示完成创建过程，不需要设置密码短语（直接按Enter）。

3. **查看并复制私钥内容**：
   ```
   cat ~/.ssh/id_rsa
   ```
   复制输出的全部内容，包括开头的`-----BEGIN RSA PRIVATE KEY-----`和结尾的`-----END RSA PRIVATE KEY-----`。

4. **将公钥添加到服务器的authorized_keys中**：
   ```
   ssh-copy-id root@您的服务器IP
   ```
   或者手动将公钥内容添加到服务器的`~/.ssh/authorized_keys`文件中。
