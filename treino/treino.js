//import parse from 'csv-parse'
const parse = require('csv-parse');
//import fs from 'fs'
const fs = require('fs'); 
//import Matrix from "ml-matrix"
const { Matrix } = require("ml-matrix");
//import LogisticRegressionTwoClasses from "ml-logistic-regression"
const LogisticRegressionTwoClasses  = require("ml-logistic-regression");


const data = []
fs.createReadStream('dados.csv')
  .pipe(parse({ delimiter: ',' }))
  .on('data', (r) => {
    //console.log(r);
    data.push(r);        
  })
  .on('end', () => {
    //console.log('dados===========================================: ',data);
    data.shift();//remove linha com os títulos das colunas
    let Y = data.map((value,index) => { return value[value.length-1]=='dislexico'? 1 : 0; });
    Y= Matrix.columnVector(Y);
    console.log('Y===========================================: ',Y);
    let X = data.map((value,index) => { return value.slice(0,-1); });
    X=new Matrix(X);
    console.log('X===========================================: ',X);
    //console.log(LogisticRegressionTwoClasses);
    //console.log(LogisticRegression);
    let logreg = new LogisticRegressionTwoClasses({
      numSteps: 5000,
      //learningRate: 12e-10
      learningRate: 17e-7
    });
    logreg.train(X, Y); 
    //console.log(JSON.stringify(logreg));
    
    let modeloTreinado = JSON.stringify(logreg);
    fs.writeFile("modelo.json", modeloTreinado, function(err) {
        if (err) {
            console.log(err);
        }
    });   

    let Xtest = new Matrix([
      [ '0.4', '116.6283796', '0.5', '152.881223', '116.6283796' ],
      [ '0.3', '48.52227614', '0.8', '66.77796327', '65.66347469' ],
      [ '0.5', '58.70399639', '0.9', '146.2865716', '139.9144967' ],
      [ '0.2', '121.875', '0.6', '241.0445263', '229.5918367' ],
      [ '0.3', '188.3501918', '0.9', '268.0412371', '233.614536' ],
      [ '0.1', '239.8255814', '0.9', '276.9886364', '262.980445' ],
      [ '0.1', '109.4583216', '0.9', '208.9472274', '198.5111663' ],
      [ '0.1', '144.524736', '0.8', '232.7837051', '226.4863165' ],
      [ '0.3', '72.30499562', '0.9', '156.424581', '118.610562' ],
      [ '0.3', '115.9295835', '0.8', '168.5787872', '140.2961808' ],
      [ '0.3', '153.4199872', '1', '193.9655172', '189.7642323' ],
      [ '0.5', '109.7200731', '0.8', '224.8486596', '212.2186495' ],
      [ '0.3', '118.2913472', '0.8', '191.7443409', '136.0801361' ],
      [ '0.2', '192.8227102', '0.5', '236.0655738', '211.8780096' ],
      [ '0.5', '62.0475698', '0.8', '70.74776457', '62.0475698' ],
      [ '0.3', '82.27631128', '1', '109.5223608', '108.7941976' ],
      [ '0.3', '208.3333333', '0.5', '240.8150664', '208.3333333' ],
      [ '0.8', '100.2645871', '1', '101.9677996', '100.2645871' ],
      [ '0.3', '121.9236848', '1', '147.7529243', '142.1023866' ],
      [ '0.1', '286.4487697', '0.9', '305.7624461', '287.7070619' ],
      [ '0.4', '156.0652637', '0.8', '168.5787872', '156.0652637' ],
      [ '0.2', '157.6075975', '0.9', '255.7377049', '252.1008403' ],
      [ '0.3', '99.66777409', '0.8', '163.8598088', '150.1706485' ],
      [ '0.3', '168.5823755', '0.9', '245.1288498', '236.9200395' ],
      [ '0.2', '125', '1', '263.06914', '245.5357143' ],
      [ '0.1', '137.9798337', '0.6', '208.3333333', '173.9550616' ],
      [ '0.3', '21.30303568', '0.5', '63.21968842', '38.14165386' ],
      [ '0.3', '189.3408135', '0.9', '222.1589291', '218.4466019' ],
      [ '0.1', '55.7381735', '0.9', '154.9155909', '133.9285714' ],
      [ '0.3', '132.8658424', '0.7', '211.8780096', '158.8983051' ],
      [ '0.5', '91.00455023', '0.5', '91.00455023', '91.00455023' ],
      [ '0.2', '75.84535974', '0.9', '211.3821138', '204.5454545' ],
      [ '0.3', '61.1828688', '0.9', '130.806641', '107.8005689' ],
      [ '0.4', '48.18925234', '0.5', '70.04310345', '70.04310345' ],
      [ '0.1', '206.1310782', '1', '212.8288501', '206.1310782' ],
      [ '0.1', '146.2865716', '0.8', '232.5581395', '225.7181943' ],
      [ '0.3', '37.23404255', '0.5', '73.73794668', '47.56756757' ],
      [ '0.2', '86.75744066', '0.5', '181.4516129', '157.0306924' ]
    ]);
    let finalResults = logreg.predict(Xtest);
    console.log(finalResults);
    
  })
