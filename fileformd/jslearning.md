# jslearning





## map、set

> map
>
> > 
> >
> > 
> >
> > 
> >
> > ![1596505272811](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1596505272811.png)
>
> set
>
> >  
> >

##  async   promise   await

> > async
> >
> > ```
> >  异步函数，坦率地讲，它们的作用相当不可思议。 可以利用它们像编写同步代码那样编写基于 Promise 的代码，而且还不会阻塞主线程。 它们可以让异步代码“智商”下降、可读性提高。
> > ```
> >
> > 
> >
> >   promise、await
> >
> > ````
> > 如果在函数定义之前使用了 async 关键字，就可以在函数内使用 await。 当您 await 某个 Promise 时，函数暂停执行，直至该 Promise 产生结果，并且暂停并不会阻塞主线程。 如果 Promise 执行，则会返回值。 如果 Promise 拒绝，则会抛出拒绝的值。
> > ````
> >
> >  Promise.all
> >
> > ```
> > 通过使用await，我们能够在三个promise的结果都可用的时候，放入values数组中。这看起来非常像同步代码。我们需要将所有代码封装在一个新的异步函数displayContent() 中，尽管没有减少很多代码，但能够将大部分代码从 .then() 代码块移出，使代码得到了简化，更易读。
> > ```
> >
> 

##  关于require   

> ```
> require的路径中不能包含有下划线，解决办法为
> 
> 
> 
> /**
>  * 存在即合理     当require的路径中带有下划线时，需要采用绝对路径的方式来引入模块   
>  */
> const eventHandlerPath = path.join(__dirname, '11', '22_11','33');
> //console.log("eventHandlerPath-=-=-=-=-=-=-=-=-=-=-=-=------->"+eventHandlerPath);
> //output  d:\workspace\project\fujian_north_dry_1-beiqian-master\beiqian\gps-device\lib\event_handlers
> const eventFiles = fs.readdirSync(eventHandlerPath);
> eventFiles.forEach((fileName) => {
>     const handlerFile = path.join(eventHandlerPath, fileName);
>     // 通过绝对路径的方式来引入模块
>     const handle = require(handlerFile);
>     //handle()是通过读取文件名的方式来调用方法  
>     handle();
> });
> 
> 
> 
> output  恭喜你找到我了
>```
>  
>
>  
>
>  
>