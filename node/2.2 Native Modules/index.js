const fs = require("fs")


/* fs.writeFile('./message.txt', 'Hello from Node!', (error) => {
  if (error) throw error
  console.log('Save successful!')
}) */

fs.readFile('./message.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
} )