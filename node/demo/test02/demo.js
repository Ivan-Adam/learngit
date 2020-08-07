///这是koa-Helmet的小demo


"use strict";
const Koa = require('koa');
const helmet = require('koa-helmet');
const app = new Koa();
 app.use(helmet());
app.use((ctx) => {
    ctx.body = 'hello world'
});
app.listen(8082);