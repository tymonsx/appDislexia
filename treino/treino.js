const parse = require('csv-parse')
const fs = require('fs') 

const data = []
fs.createReadStream('dados.csv')
  .pipe(parse({ delimiter: ',' }))
  .on('data', (r) => {
    //console.log(r);
    data.push(r);        
  })
  .on('end', () => {
    console.log('dados===========================================: ',data);
  })