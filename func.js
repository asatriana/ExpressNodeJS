function display(){
    console.log("Hello There");
}

display();


function myCallback(myfunction){
    myfunction(2);
}


let message = function(msg) {
    console.log("Its Message "+msg);
};

message(1);
myCallback(message);