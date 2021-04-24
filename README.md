# 个人网站

# 安装依赖包

根目录下执行

```
服务端
cd service && yarn
```

```
前端
cd client && yarn
```

# 前端启动

```

根目录下执行
yarn start-client || (cd client && yarn start)

```

# 服务端启动

```
服务端暂时没有完善
```
# node接口

```
code对比
url:code/contrast
请求方式：post
参数json：{
    best:number,//百位数
    ten:number,//十位数
    a:number,//个位数
}
```
```
登陆
url:users/login
请求方式：post
参数json：{
    name:string,//用户名
    password:number,//密码
}
```