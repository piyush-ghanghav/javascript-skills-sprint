// Activity 2: Stack
// • Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack{
    constructor(){
        this.items = [];
    }
    push(ele){
        this.items.push(ele); 
    }
    pop(){
        if(this.items.length === 0){
            return'Underflow';
        }
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length == 0;
    }
    printStack(){
        let str ='';
        for(let i =0 ; i<this.items.length ; i++)
            str += this.items[i] + ' ';
        return str;
    }
    
}

let stk = new Stack();

// console.log(stk.isEmpty());
// console.log(stk.pop());     

stk.push(10);
stk.push(20);

console.log(stk.printStack());
console.log(stk.peek());


// • Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.


function reverseString(str){
    let stack = new Stack();


    for(let i = 0; i< str.length;i++){
        stack.push(str[i]);
    }

    let revStr = '';
    while(!stack.isEmpty()){
        revStr += stack.pop(); 
    }
    return revStr;

}

const originalStr = 'Hello World';
console.log(originalStr);
const reverseStr = reverseString(originalStr);
console.log(reverseStr);