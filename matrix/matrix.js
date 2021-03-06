const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let cw = window.innerWidth
let ch = window.innerHeight

let charArr = [
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ ',
  'đĄ',
  'đĸ',
  'đŖ',
  'đ¤',
  'đĨ',
  'đĻ',
  'đ§',
  'đ¨',
  'đŠ',
  'đĒ',
  'đĢ',
  'đŦ',
  'đ­',
  'đŽ',
  'đ¯',
  'đ°',
  'đą',
  'đ˛',
  'đŗ',
  'đ´',
  'đĩ',
  'đļ',
  'đˇ',
  'đ¸',
  'đš',
  'đē',
  'đģ',
  'đŧ',
  'đŊ',
  'đž',
  'đŋ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ',
  'đ ',
  'đĄ',
]

let maxCharCount = 300 // ä¸ä¸Ēåąåšæå¤įå­æ¯æ°
let fallingCharArr = []
let fontSize = 13 // č°čå­äŊå¤§å°
let maxColumns = cw / fontSize

canvas.width = cw
canvas.height = ch

let frames = 0

class FallingChar {
  constructor(x, y) {
    this.speed = (Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4
    this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))]
    this.x = x
    this.y = y
  }

  draw(ctx) {
    ctx.fillStyle = 'rgba(0,255,0)'
    ctx.font = fontSize + 'px san-serif'
    ctx.fillText(this.value, this.x, this.y)
    this.y += this.speed

    if (this.y > ch) {
      // č°čå­æ¯äšé´æ¨ĒįčˇįĻģ
      this.x = Math.floor(Math.random() * maxColumns) * fontSize * 2
      this.y = (Math.random() * ch) / 2 - 50
    }
  }
}

let update = () => {
  if (fallingCharArr.length < maxCharCount) {
    let fallingChar = new FallingChar(
      Math.floor(Math.random() * maxColumns) * fontSize,
      (Math.random() * ch) / 2 - 50
    )
    fallingCharArr.push(fallingChar)
  }
  ctx.fillStyle = 'rgba(0,0,0,0.5)'
  ctx.fillRect(0, 0, cw, ch)
  for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
    fallingCharArr[i].draw(ctx)
  }
  requestAnimationFrame(update)
  frames++
}

update()
