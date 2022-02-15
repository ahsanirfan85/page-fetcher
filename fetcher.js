const request = require('request');
const fs = require('fs');

request(process.argv[2], (error, response, body) => {
  if (!error && response.statusCode === 200) {
    fs.writeFile(process.argv[3], body, err => {
      if (err) {
        console.error('Invalid filename. Please enter a valid filename & try again.')
        return
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${process.argv[3]}`);
    })
  } else {
    console.log('Invalid URL. Please enter a valid URL & try again.')
  }
  
});