const $ = selector => document.querySelector(selector)

let rollCount = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0
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
})
