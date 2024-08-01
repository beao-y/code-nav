# 使用 Node 镜像作为基础
FROM node:20 AS build-stage

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 yarn.lock/npm-shrinkwrap.json 到工作目录
COPY package.json yarn.lock ./

# 安装依赖
RUN yarn install --frozen-lockfile

# 复制所有文件到工作目录
COPY . .

# 构建项目
RUN yarn build

# 使用 Nginx 镜像作为生产服务器
FROM nginx:alpine

# 将构建输出目录中的文件复制到 Nginx 服务器的默认公共目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Nginx 默认运行在80端口，所以无需暴露端口

# 容器启动时自动运行 Nginx
CMD ["nginx", "-g", "daemon off;"]
