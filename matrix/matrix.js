const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let cw = window.innerWidth
let ch = window.innerHeight

let charArr = [
  '𝓐',
  '𝓑',
  '𝓒',
  '𝓓',
  '𝓔',
  '𝓕',
  '𝓖',
  '𝓗',
  '𝓘',
  '𝓙',
  '𝓚',
  '𝓛',
  '𝓜',
  '𝓝',
  '𝓞',
  '𝓟',
  '𝓠',
  '𝓡',
  '𝓢',
  '𝓣',
  '𝓤',
  '𝓥',
  '𝓦',
  '𝓧',
  '𝓨',
  '𝓩',
  '𝓪',
  '𝓫',
  '𝓬',
  '𝓭',
  '𝓮',
  '𝓯',
  '𝓰',
  '𝓱',
  '𝓲',
  '𝓳',
  '𝓴',
  '𝓵',
  '𝓶',
  '𝓷',
  '𝓸',
  '𝓹',
  '𝓺',
  '𝓻',
  '𝓼',
  '𝓽',
  '𝓾',
  '𝓿',
  '𝔀',
  '𝔁',
  '𝔂',
  '𝔃',
  '𝟘',
  '𝟙',
  '𝟚',
  '𝟛',
  '𝟜',
  '𝟝',
  '𝟞',
  '𝟟',
  '𝟠',
  '𝟡',
]

let maxCharCount = 300 // 一个屏幕最多的字母数
let fallingCharArr = []
let fontSize = 13 // 调节字体大小
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
      // 调节字母之间横的距离
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
