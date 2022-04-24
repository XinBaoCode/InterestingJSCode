// 画出Canvas图像
function createCanvas() {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  const canvasHeight = 300
  const canvasWidth = 300

  const imgSrc = document.getElementById('upload')
  console.log(imgSrc)
  ctx.drawImage(imgSrc, 0, 0, 300, 300)
}

setInterval(() => {
  createCanvas()
}, 1000)

// 展示上传的图片
function showImg(input) {
  var file = input.files[0]
  var reader = new FileReader()
  // 图片读取成功回调函数
  reader.onload = function (e) {
    document.getElementById('upload').src = e.target.result
  }
  reader.readAsDataURL(file)
}

// 将Canvas下载成PNG
function exportCanvasAsPNG(id, fileName) {
  var canvasElement = document.getElementById(id)
  var MIME_TYPE = 'image/png'
  var imgURL = canvasElement.toDataURL(MIME_TYPE)
  var dlLink = document.createElement('a')
  dlLink.download = fileName
  dlLink.href = imgURL
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(
    ':'
  )
  document.body.appendChild(dlLink)
  dlLink.click()
  document.body.removeChild(dlLink)
}
