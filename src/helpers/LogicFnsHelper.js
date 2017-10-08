import grayCode from './GrayCodeHelper';

let createInputs = function(n, inputs){
  for (let i = 0; i < Math.pow(2, n); i++){
    inputs.push(("00000000" + (i >>> 0).toString(2)).slice(-n));
  }
};

let createLogicFns = function(variables){
  let inputs = [];
  createInputs(variables, inputs);

  return inputs.map(input => {
    return {
      input,
      output: '0'
    }
  });
};

export default createLogicFns;
