let changeOutput = function(logicFn){
  if (logicFn.output === '0'){
    logicFn.output = '1';
  } else if (logicFn.output = '1'){
    logicFn.output = '0'
  }
};

let outputClass = function(output){
  if (output === "0"){
    return "false";
  } else if (output === "1"){
    return true;
  }
};

export { changeOutput, outputClass };
