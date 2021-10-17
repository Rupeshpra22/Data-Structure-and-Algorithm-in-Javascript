let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

let evalRPN = (tokens) =>{
    let stack = [];
    let element1 = null;
    let element2 = null;
    let result = null;
    for(let i=0;i<tokens.length;i++){
        if(tokens[i]=="+"){
            element2 = Number(stack.pop());
            element1 = Number(stack.pop());
            result = element1+element2;
            stack.push(result);
        }else if(tokens[i]=="-"){
            element2 = Number(stack.pop());
            element1 = Number(stack.pop());
            result = element1-element2;
            stack.push(result);
        }else if(tokens[i] == "/"){
            element2 = Number(stack.pop());
            element1 = Number(stack.pop());
            result = element1/element2;
            result = result>0 ? Math.floor(result) : Math.ceil(result);
            stack.push(result);
        }else if(tokens[i]=="*"){
            element2 = Number(stack.pop());
            element1 = Number(stack.pop());
            result = element1*element2;
            stack.push(result);
        }else{
            stack.push(tokens[i])
        }
    }
    return stack[stack.length-1];
}

console.log(evalRPN(tokens))