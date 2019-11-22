const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

let rollCount = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
}

const confettiSettings = {
  'target': 'confetti',
  'max': '80',
  'size': '1',
  'animate': true,
  'props': ['circle','square'],
  'colors': [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
  'clock': '25',
  'rotate': false
}

let confetti = new ConfettiGenerator(confettiSettings)

function reset() {
  $('.game-instructions').style.display = ''
  $('.roll-btn').disabled = false
  $('.roll-result').innerHTML = ''
  $('.winner').innerHTML = ''

  let lastClass = $('.die').classList.item(1)
  if (lastClass) {
    $('.die').classList.remove(lastClass)
  }

  let stackInners = $$('.stack-column-inner-container')
  stackInners.forEach(container => {
    container.innerHTML = ''
  })

  confetti.clear()
  confetti = new ConfettiGenerator(confettiSettings)

  rollCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  }
}

const randomOneToSix = () => {
  return Math.floor(Math.random() * 6) + 1
}

const addDieToStack = (num) => {
  let stackClass = $(`.stack-${num}`)
  stackClass.innerHTML +=
    `<div class="stack-die stack-die-${num}"></div>`
}

const rollDie = (num) => {
  let lastClass = $('.die').classList.item(1)
  if (lastClass) {
    $('.die').classList.remove(lastClass)
  }

  $('.die').classList.add(`show-side-${num}`)
}

$('.roll-btn').addEventListener('click', () => {
  if ($('.game-instructions').style.display !== 'none') {
    $('.game-instructions').style.display = 'none'
  }
  let num = randomOneToSix()
  $('.roll-result').innerHTML = 'Rolled ' + num
  rollCount[num]++
  if (rollCount[num] === 5) {
    $('.winner').innerHTML = num + ' wins!'
    $('.roll-btn').disabled = true
    confetti.render()
  }
  rollDie(num)
  addDieToStack(num)
})

$('.reset-btn').addEventListener('click', () => {
  reset()
})
