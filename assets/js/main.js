const $ = selector => document.querySelector(selector)

const randomOneToSix = () => {
  return Math.floor(Math.random() * 6) + 1
}

$('.roll-button').addEventListener('click', () => {
  let num = randomOneToSix()
  $('.roll-result').innerHTML = 'rolled ' + num
})
