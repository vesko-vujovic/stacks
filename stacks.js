/**
  * Implementation of the stacks in JavaScript
  */

// Initialize stack
function Stack(){
    this.dataStore = [];
    this.top       =  0;
    this.push      = push;
    this.peek      = peek;
    this.pop       = pop;
    this.length    = length;
    this.clear     = clear;
}

/*
 * Push new element on the top of the stack
 * Here ++ is placed after this.top  - in that way we ensure that first we asign elemnt to that position
 * after that we've ensured that next postion is empty and ready for new value
 */
function push(element){
   this.dataStore[this.top++] = element;
}

// Removes element from the stack
function pop(element){
    return this.dataStore[--this.top];
}

// Get value of the top element
function peek(){
    if(this.dataStore[this.top-1] !== 'undefined'){
        return this.dataStore[this.top-1];
    }
    return "No elements on the stack";
}

// Length return how many elements are on the stack - return this.top
function length(){
    return this.top;
}

// Clears all elements from the stack
function clear(){
    this.top = 0
}


// See if a word is palindrome using stack
function isPalindrome(word){
    var s   =  new Stack();
    for( var i = 0; i < word.length; ++i ){
        s.push(word[i]);
    }

    var reverseWord = "";
    while(s.length > 0){
        reverseWord = s.pop();
    }

    if(word == reverseWord){
        return true;
    }
    else{
        return false
    }
}









