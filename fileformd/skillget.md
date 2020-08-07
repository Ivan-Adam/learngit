#  随便写写

##  node安装在win7上的问题    

>   直接安装在win7上时会报错，错误原因是不支持win7了，需要在win8以上的系统上安装

##  npm换源

>  一、使用淘宝镜像
>  1.临时使用
>  npm --registry [https://registry.npm.taobao.org](https://link.jianshu.com?t=https://registry.npm.taobao.org) install express
>
> 2.持久使用
>  npm config set registry [https://registry.npm.taobao.org](https://link.jianshu.com?t=https://registry.npm.taobao.org)
>
> 3.通过cnpm
>  npm install -g cnpm --registry=[https://registry.npm.taobao.org](https://link.jianshu.com?t=https://registry.npm.taobao.org)
>
> 二、使用官方镜像
>  npm config set registry [https://registry.npmjs.org/](https://link.jianshu.com?t=https://registry.npmjs.org/)
>
> 三、查看npm源地址
>  npm config get registry