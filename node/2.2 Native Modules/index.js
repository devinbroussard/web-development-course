const fs = require("fs")
fs.writeFile('./message.txt', 'Hello from Node!', (error) => {
  if (error) throw error
  console.log('Save successful!')
})