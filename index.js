/*function greeting (greet){

    return function (name){
        console.log(`${greet} ${name}`)
    }
}

let greetSon = greeting("Hi")
    greetSon("Guichard")*/


/*const countnumber = function(){
    let count = 0;
    
    return function(){
        count++
        console.log(`${count} number`)
    } 
}

let counter = countnumber()
counter();
counter();
counter();*/

var createfunction = function () {
    var array = []
    for (let i = 0; i < 3; i++) {
        array.push(() => (console.log(i)))

    }

    return array;
}

let arr = createfunction()

arr[0]();
arr[1]();
arr[2]();

