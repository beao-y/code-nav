# Docker Desktop 桌面工具安装与配置

> 作者：Beao Yang
>
> 介绍：Docker 桌面应用程序的安装与使用，更加便捷、直观使用 Docker

## For Windows 
::: tip
Docker 是基于 Linux 系统的，在 windows 上需要安装适用于 Linux 的 Windows 的子系统分发，
并且基于`WSL2`的开发环境部署
:::

#### WSL 常用命令
需要管理员权限打开 `CMD`
```html
wsl -v                                     查看当前WSL版本
wsl -l -v                                  查看当前的WSL版本和发行
wsl --status                               查看当前状态
wsl --set-default-version <version:1或2>   设置默认Linux发行版
wsl --set-version <发行名：如ubuntu> 2      指定Linux发行版
wsl -l -o                                  查询线上发行版
wsl --install -d <发行名>                   安装指定版本发行版
wsl --update                               更新WSL
wsl                                        运行
wsl --shutdown                             关闭
```

#### 安装 Docker Desktop
```
// 默认安装到C盘，更改安装路径
Start-Process -FilePath 'Docker Desktop Installer.exe' -Wait -ArgumentList "install --installation-dir=D:\Software\DockerDesktop"
```
::: tip 注释
* **Docker Desktop Installer.exe:** 在官网下载的 exe 文件所在位置打开 cmd
* **D:\Software\DockerDesktop：** 指定需要安装的路径
:::

###### 报错解决
::: danger 💣 报错
当前计算机配置不支持 WSL2，请启用“虚拟机平台”可选组件，并确保在 BIOS 中启用虚拟化
:::

* 打开 windows 中 `启用或关闭 Windows 功能`，确保勾选 `Hyper-V`、`适用于 Linux 的 Windows 子系统`、 `虚拟机平台`
* CMD 运行 `bcdedit /set hypervisorlaunchtype Auto`，确保 Hyper-V 状态不受冲突导致 off
* [安装WSL2](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
* 管理员打开CMD，运行 `wsl --set-default-version 2` 切换 `WSL2`
* 没有分发就执行 `wsl --install -d ubuntu`去下载，有分发就执行 `wsl --set-version ubuntu 2` 切换为 `version 2`
* `wsl -l -v` 确保使用的是 `Version 2`, 表示成功

::: warning ⚠️ 警告
当你使用的是 VMWARE 搭建的虚拟机时，虚拟机设置中需要勾选：
* 虚拟化引擎 -> 虚拟化Intel VT-x/EPT或AMD-V/RVI(V)
* 虚拟化引擎 -> 虚拟化IOMMU(IO内存管理单元)(I)
:::

