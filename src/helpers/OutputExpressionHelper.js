import { numToLetter } from "./LetterSequenceHelper"

let findCommon = function(output1, output2){
  let differences = 0;
  let commonOutput = "";
  for(let i = 0; i < output1.length; i++){
    if (output1.charAt(i) !== output2.charAt(i)){
      commonOutput += "_";
      differences += 1;
    } else {
      commonOutput += output1.charAt(i);
    }
  }

  if (differences === 1){
    return commonOutput;
  } else {
    return null;
  }
};

let numCodeToVars = function(code){
  let newCode = "";
  for (let i = 0; i < code.length; i ++){
    if (code.charAt(i) === "0"){
      newCode += numToLetter(i) + "'";
    } else if (code.charAt(i) === "1") {
      newCode += numToLetter(i);
    }
  }
  return newCode;
};

let calculateExpression = function(logicFns){
  let inputs = logicFns.filter(logicFn => logicFn.output === "1").map((logicFn) =>
    logicFn.input
  );

  if (inputs.length === 0){
    return "False";
  } else if (inputs.length === logicFns.length){
    return "True";
  } else {
    let outputExpressions = new Set();
    let reduceableOutputs = new Set(inputs);

    let counter = 7;

    while (reduceableOutputs.size > 0 && counter > 0){
      // counter --;
      let reduceableOutputArray = Array.from(reduceableOutputs);
      let nextOutputs = new Set();

      for (let i of reduceableOutputArray){
        for (let j of reduceableOutputArray){
          let commonOutput;

          if (i !== j) {
            commonOutput = findCommon(i, j);
          }

          if (commonOutput) {
            reduceableOutputs.delete(i);
            reduceableOutputs.delete(j);
            nextOutputs.add(commonOutput);
          }
        }
      }
      reduceableOutputs.forEach(output => {outputExpressions.add(output)});
      reduceableOutputs = nextOutputs;
    }
    let outputs = Array.from(outputExpressions);
    return outputs.map(output => numCodeToVars(output)).join(" + ");
  }
};

export default calculateExpression;