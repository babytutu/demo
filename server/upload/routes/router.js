module.exports = (router) => {
  // 整合请求地址
  router.post('/upload', require('../controllers/upload'))
}
