const Koa = require('koa')
const cors = require('@koa/cors')
const router = require('koa-router')()
const logger = require('koa-logger')()
const error = require('./utils/error')
const links = require('./routes/router')
const app = new Koa()
const koaBody = require('koa-body')

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
  }
}))

app.use(cors())

// Development style logger middleware for Koa.
app.use(logger)

// 统一的错误处理
app.use(error)

// add router middleware:
app.use(router.routes(links(router)))

app.listen(3001)
console.log('app started at port 3001...')