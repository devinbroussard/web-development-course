/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from 'fs'
import inquirer from 'inquirer'
import qr from 'qr-image'

const question = {
  type: 'input',
  name: 'url',
  message: 'Enter a URL to generate a QR code for.'
}

inquirer
  .prompt([
    question
  ])
  .then((answers) => {
    if (answers?.url === null || answers?.url === undefined) return
    
    var qrSvg = qr.image(answers.url, { type: 'svg' })
    qrSvg.pipe(fs.createWriteStream('url.svg'))

    fs.promises.writeFile('url.txt', answers.url)
  })
  .catch((error) => {
    throw error
  });