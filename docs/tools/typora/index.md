# Typora 集成 PicGo 图床工具

### 安装[PicGo](https://molunerfinn.com/PicGo/)

### 打开偏好设置

![image-20240217151918316](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2024/202402171554082.png)

### Typora 配置 PicGo

#### 选择图像 —— 选择上传服务 —— 选择 PicGo App —— 选择安装路径

![image-20240217152222885](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2024/202402171554276.png)

### PicGo 配置阿里云图床

#### 打开 PicGo，选择自己的图床进行配置，比如我使用的是阿里云图床，

- 登录阿里云，选择头像下的**访问控制**

  ![image-20240217153054736](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2024/202402171554899.png)

- 选择用户，创建一个用户，启用**OpenAPI 调用访问**，并复制**KeyId**和**KeySecre**到 PicGo

  ![image-20240217153356693](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2024/202402171553135.png)

  ![image-20240217153546086](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2024/202402171553426.png)

  ![image-20240217153802800](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2024/202402171553492.png)

- 设定 keyid，就是创建用户的 AccessKey ID，KeySecret 就是 AccessKeySecret，存储空间名就是创建 Bucket 的名字，存储区域也是创建时设定的， 忘记的可以通过 Bucket 概览查看，如下图所示：

  ![image-20240217154219823](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2024/202402171553679.png)

### **Typora**测试上传

![image-20240217154352959](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2024/202402171553559.png)

![image-20240217155232446](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2024/202402171552704.png)
