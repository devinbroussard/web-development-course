const buttons = document.querySelectorAll('button')

for (const button of buttons) {
  button.addEventListener('click', () => { new Audio('sounds/tom-1.mp3').play() })
}