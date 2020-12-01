const parse = require('csv-parse');
const fs = require('fs'); 
const { Matrix } = require("ml-matrix");
const { LogisticRegressionTwoClasses } = require("ml-logistic-regression");


const data = []
fs.createReadStream('dados.csv')
  .pipe(parse({ delimiter: ',' }))
  .on('data', (r) => {
    //console.log(r);
    data.push(r);        
  })
  .on('end', () => {
    //console.log('dados===========================================: ',data);
    data.shift();
    let Y = data.map((value,index) => { return value[0]; });
    console.log('Y===========================================: ',Y);
    let X = data.map((value,index) => { return value.slice(-value.length + 1); });
    console.log('X===========================================: ',X);
    let logreg = new LogisticRegressionTwoClasses({
      numSteps: 500,
      learningRate: 1e-8
    });
    logreg.train(X, Y);

    let Xtest = new Matrix([
      [ '0.3', '48.52227614', '0.8', '66.77796327', '65.66347469' ],
      [ '0.5', '58.70399639', '0.9', '146.2865716', '139.9144967' ],
      [ '0.2', '121.875', '0.6', '241.0445263', '229.5918367' ]
    ]);

  })
