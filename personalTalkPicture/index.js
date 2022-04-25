// 展示上传的图片
function showImg(input) {
  var file = input.files[0]
  var reader = new FileReader()
  // 图片读取成功回调函数
  reader.onload = function (e) {
    document.getElementById('upload').src = e.target.result
    document.getElementById('result_src').src = e.target.result
  }
  reader.readAsDataURL(file)
}

//下载海报
function download() {
  html2canvas(document.querySelector('.result'), { dpi: 400 }).then(
    (canvas) => {
      var img = document.createElement('a')
      img.href = canvas
        .toDataURL('image/jpeg')
        .replace('image/jpeg', 'image/octet-stream')
      img.download = 'invite.jpg'
      img.click()
    }
  )
}
