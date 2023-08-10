let path1 = './images//dice'
let path2 = './images/dice'

const random1 = Math.floor(Math.random() * 6 + 1)
const random2 = Math.floor(Math.random() * 6 + 1)

path1 += random1 + '.png';
path2 += random2 + '.png';

document.querySelector(".img1").setAttribute('src', path1)
document.querySelector(".img2").setAttribute('src', path2)

console.log(path1);

let h1Text;
if (random1 > random2) h1Text = '🚩 Player one wins!'
if (random2 > random1) h1Text = 'Player two wins! 🚩'
if (random1 === random2) h1Text = 'Draw!'

document.querySelector('h1').innerHTML = h1Text