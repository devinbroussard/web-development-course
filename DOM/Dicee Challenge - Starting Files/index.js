let path1 = './images//dice'
let path2 = './images/dice'

const random1 = Math.floor(Math.random() * 6 + 1)
const random2 = Math.floor(Math.random() * 6 + 1)

path1 += random1 + '.png';
path2 += random2 + '.png';

document.querySelector(".img1").setAttribute('src', path1)
document.querySelector(".img2").setAttribute('src', path2)

console.log(path1);