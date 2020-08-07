#   KOA学习记录吧    大写比较酷

下面分模块记录

##     koa-Helmet  

>    官方文档这么写的
>
> ```
> In order to work well with the helmet HSTS module, koa-helmet will augment this.request to include a secure boolean to determine if the request is over HTTPS.
> ```
>
> 目前我的理解
>
> ```
> 加上了这个Helmet（头盔）后，我的项目就像带了头盔一样更加安全了，具体体现在什么地方呢，官方给了个小demo，我把源代码贴过来
> //demo 从这里开始
> "use strict";
>  
> const Koa = require("koa");
> const helmet = require("koa-helmet");
> const app = new Koa();
>  //第一次运行下面这个注释掉
> app.use(helmet());
>  
> app.use((ctx) => {
>   ctx.body = "Hello World"
> });
>  
> app.listen(4000);
> //demo 到这里结束
> 
> 我为了测试这个Helmet（头盔的实际作用），运行了两次，第一次把Helmet注释掉了，第二次把注释去掉，区别我贴两张图吧
> ```

>  ![1596793535234](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1596793535234.png) 
>
> ![1596793566422](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1596793566422.png)
>
> 以上第二张图中多出来的请求头字段就是Helmet生成的东西   具体作用后面再考究
>
> 

