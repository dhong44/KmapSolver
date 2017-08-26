import grayCode from './GrayCodeHelper';

let createLogicFns = function(variables){
  return grayCode(variables).map(input => {
    return {
      input,
      output: '0'
    }
  });
};

export default createLogicFns;
