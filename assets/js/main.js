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

function reset() {
  $('.roll-button').disabled = false
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
  console.log(stackClass)
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

$('.roll-button').addEventListener('click', () => {
  let num = randomOneToSix()
  $('.roll-result').innerHTML = 'rolled ' + num
  rollCount[num]++
  if (rollCount[num] === 5) {
    $('.winner').innerHTML = num + ' wins!'
    $('.roll-button').disabled = true
  }
  rollDie(num)
  addDieToStack(num)
})

$('.reset-button').addEventListener('click', () => {
  reset()
})
