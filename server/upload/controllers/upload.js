const fs = require('fs')
const path = require('path')

function readerFile(file) {
  // 创建可读流
  const reader = fs.createReadStream(file.path)
  let filePath = path.join(__dirname, '../img/') + `/${file.name}`
  // 创建可写流
  const upStream = fs.createWriteStream(filePath)
  // 可读流通过管道写入可写流
  reader.pipe(upStream)
}

module.exports = async(ctx) => {
  // 上传文件
  const files = ctx.request.files.file; // 获取上传文件
  if (files.length) {
    for (let file of files) {
      readerFile(file)
    }
  } else {
    readerFile(files)
  }
  ctx.body = {
    code: '0',
    description: 'ok',
    result: '上传成功！'
  }
}
