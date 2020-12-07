const { Matrix } = require("ml-matrix");
const LogisticRegressionTwoClasses  = require("ml-logistic-regression");

let model =  require('./modelo.json');
model = JSON.parse(JSON.stringify(model));
console.log('=> JSON carregado.',model);

let logreg = LogisticRegressionTwoClasses.load(model);
console.log('=> Regressão logistica Carregada.',logreg);

let AL = 0.4;
let VL = 116.6283796;
let LMVL = 0.5;
let MVL = 152.881223;
let VTCL = 116.6283796;

let Xtest = new Matrix([
      [ AL, VL, LMVL, MVL, VTCL ]])
let finalResults = logreg.predict(Xtest);
console.log(finalResults[0]==1 ? 'Disléxico' : 'Não-Disléxico' );


