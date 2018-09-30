const fs = require('fs')
const path = require('path')

module.exports = async(ctx) => {
  try {
    // 上传单个文件
    const file = ctx.request.files.userfile; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname, '../img/') + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream)
  } catch (e) {
    ctx.body = {
      code: '-1',
      description: 'error',
      result: '出错了！'
    }
  }
  ctx.body = {
    code: '0',
    description: 'ok',
    result: '上传成功！'
  }
}
