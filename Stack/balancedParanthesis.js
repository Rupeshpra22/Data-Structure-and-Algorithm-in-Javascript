let tokens = "["

let balancedParanthesis = (tokens) => {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] == "(" || tokens[i] == "[" || tokens[i] == "{") {
      stack.push(tokens[i]);
    } else {
      if (stack.length != 0) {
        if (
          (stack[stack.length - 1] == "(" && tokens[i] == ")") ||
          (stack[stack.length - 1] == "[" && tokens[i] == "]") ||
          (stack[stack.length - 1] == "{" && tokens[i] == "}")
        ) {
          stack.pop();
        }else{
            return false;
        }
      }else{
          return false;
      }
    }
  }

  if(stack.length == 0){
      return true;
  }else{
      return false;
  }
};
console.log(balancedParanthesis(tokens));
