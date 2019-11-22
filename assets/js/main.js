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
  'target': 'main__confetti',
  'max': '80',
  'size': '1',
  'animate': true,
  'props': ['circle','square'],
  'colors': [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
  'clock': '25',
  'rotate': false
}

let confetti = new ConfettiGenerator(confettiSettings)

const randomOneToSix = () => {
  return Math.floor(Math.random() * 6) + 1
}

const showInstructions = () => {
  if ($('.main__game-instructions').style.display !== 'none') {
    $('.main__game-instructions').style.display = 'none'
  }
}

const handleRollResult = (num) => {
  $('.main__roll-result').innerHTML = 'Rolled ' + num
  rollCount[num]++
}

const checkWinner = (num) => {
  if (rollCount[num] === 5) {
    $('.main__winner').innerHTML = num + ' wins!'
    $('.main__roll-btn').disabled = true
    confetti.render()
  }
}

const rollDie = (num) => {
  let lastClass = $('.die__die').classList.item(1)
  if (lastClass) {
    $('.die__die').classList.remove(lastClass)
  }

  $('.die__die').classList.add(`die__show-side-${num}`)
}

const addDieToStack = (num) => {
  let stackClass = $(`.stack__col-${num}`)
  stackClass.innerHTML +=
    `<div class="stack__die stack__die-${num}"></div>`
}

$('.main__roll-btn').addEventListener('click', () => {
  let num = randomOneToSix()

  showInstructions()
  handleRollResult(num)
  checkWinner(num)
  rollDie(num)
  addDieToStack(num)
})

const resetDieClass = () => {
  let lastClass = $('.die__die').classList.item(1)
  if (lastClass) {
    $('.die__die').classList.remove(lastClass)
  }
}

const resetDieStack = () => {
  let stackInners = $$('.stack__column-inner-container')
  stackInners.forEach(container => {
    container.innerHTML = ''
  })
}

const reset = () => {
  $('.main__game-instructions').style.display = ''
  $('.main__roll-btn').disabled = false
  $('.main__roll-result').innerHTML = ''
  $('.main__winner').innerHTML = ''

  resetDieClass()
  resetDieStack()

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

$('.main__reset-btn').addEventListener('click', () => {
  reset()
})
