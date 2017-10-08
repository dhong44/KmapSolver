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

class Output {
  constructor(code, map){
    this.code = code;
    this.map = map;
    this.expandedCodes = [];
    this.expandCode("", code);
    this.addToMap()
  }

  expandCode(code, remaining){
    let index = remaining.indexOf("_");

    if (index >= 0){
      this.expandCode(code + remaining.substring(0, index) + "0",
        remaining.substring(index + 1, remaining.length));

      this.expandCode(code + remaining.substring(0, index) + "1",
        remaining.substring(index + 1, remaining.length));

    } else {
      this.expandedCodes.push(code + remaining);
    }
  }

  addToMap(){
    this.expandedCodes.forEach(code => {
      if (this.map.has(code)) {
        this.map.set(code, 1 + this.map.get(code))
      } else {
        this.map.set(code, 1)
      }
    });
  }

  removeFromMap(){
    this.expandedCodes.forEach(code => {
      if (this.map.get(code) === 1){
        this.map.remove(code)
      } else {
        this.map.set(code, this.map.get(code) - 1)
      }
    });
  }

  duplicateEh(){
    let duplicate = this.expandedCodes.every(code => {
      return this.map.get(code) > 1
    });

    if (duplicate){
      this.removeFromMap();
    }
    return duplicate;
  }
}

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

    let codeMap = new Map();
    let outputs = Array.from(outputExpressions).map(expression => new Output(expression, codeMap));

    return outputs.filter(output => !output.duplicateEh())
      .map(output => numCodeToVars(output.code))
      .join(" + ");
  }
};

export default calculateExpression;