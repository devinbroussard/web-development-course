import generateName from 'sillyname'
import superheroes from 'superheroes'

var sillyName = generateName()
var superheroName = superheroes.random()

console.log(`Your new name is ${sillyName}, but your super secret superhero name is ${superheroName}`)
