let grayCode = function(variables){
  if (variables === 1){
    return(["0",
            "1"])
  } else {
    let code = grayCode(variables - 1);
    return code.map(output => "0" + output )
                  .concat(code.reverse().map(output =>  "1" + output));
  }
};

export default grayCode;