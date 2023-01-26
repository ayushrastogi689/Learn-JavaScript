// Scope is directly related to Lexical Environment

// 1. Whenever a Execution context is created a lexical enviornment is also created 

// Lexical means a heirarchy or a sequence 

// 2. Lexical environment is the local memory along with the lexical environment of its parent.

function a(){
    var b = 10;
    c();

    function c(){
        console.log(b);
    }
}
a();

// Chain of Lexical environment is called as Scope chaining.