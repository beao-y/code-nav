# 以最新版的 nginx 镜像为基础制作镜像
FROM nginx:latest

# 设置工作目录，设置的是镜像中的目标目录
WORKDIR /usr/share/nginx/html

# 复制静态资源，复制当前项目的内容到镜像中，即工作目录 WORKDIR
COPY ../dist/ .

# 复制 nginx 配置文件
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口，暴露的是镜像中的 nginx 端口，可以自定义
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
