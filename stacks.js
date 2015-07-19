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
}







