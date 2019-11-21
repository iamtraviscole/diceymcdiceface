const $ = selector => document.querySelector(selector)

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
  $('.roll-count-ul').innerHTML = 
   `<li>1: <span class="roll-1"></span></li>
    <li>2: <span class="roll-2"></span></li>
    <li>3: <span class="roll-3"></span></li>
    <li>4: <span class="roll-4"></span></li>
    <li>5: <span class="roll-5"></span></li>
    <li>6: <span class="roll-6"></span></li>`

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

const handleRollCount = (num) => {
  rollCount[num]++
  $(`.roll-${num}`).innerHTML = rollCount[num]
}

$('.roll-button').addEventListener('click', () => {
  let num = randomOneToSix()
  $('.roll-result').innerHTML = 'rolled ' + num
  handleRollCount(num)
  if (rollCount[num] === 5) {
    $('.winner').innerHTML = num + ' wins!'
    $('.roll-button').disabled = true
  }
})

$('.reset-button').addEventListener('click', () => {
  reset()
})
