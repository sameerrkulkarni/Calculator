const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == 'clear'){display.innerText='';}
        else if(item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length-1);
        }        
        else if(display.innerText == '' && item.id == 'equal')
        {
            display.innerText = 'Empty';
            setTimeout(()=>(display.innerText=''),2000)
        }
        else if(display.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText);
        }        
        else{display.innerText = display.innerText+item.id;}
    }
})

// const display = document.querySelector('#display');
// const buttons = document.querySelectorAll('button');

// buttons.forEach((item)=>{
//     item.onclick = () => {
//         if(item.id == 'clear'){display.innerText='';}
//         else if(item.id == 'back'){
//             let string = display.innerText.toString();
//             display.innerText = string.slice(0,-1);
//         }        
//         else if(item.id == 'equal' && display.innerText == ''){
//             display.innerText = 'Emptyy!!';
//             setTimeout(()=>{display.innerText = '';},2000)
//         }
//         else if(item.id == 'equal' && display.innerText != ''){
//             display.innerText = eval(display.innerText);
//         }
//         //else{display.innerText = `${display.innerText}${item.id}`; }
//         // or
//         else{display.innerText = display.innerText+item.id;}
//     }
// })

// var a = 10;
//     function add(){
//         var a=20;
//         console.log(`${a} fun`);
//     }
// console.log(a);
// add();

// function add(){
//     var a=10;
    
//     function sub(){
//         b=15;
//         console.log(a+'sub A');
//         console.log(b+'b');
//     }
//     sub();
//     function mul(){
//         var c=20;
//         console.log(a+'a');               
//         console.log(c+'mul c');
//     }
//     mul();

//     console.log(a + 'add');
// }
// add()

//                               Function Currying
// function add(a){
//     return function (b){
//         if (b){
//             // return add(a*b);
//             return(add(a*b));
//         }
//         else{return(a);}
//     }
// }
// console.log(add(2)(3)(2)());

//                              Closure Concept
/*  var z = 'global var'
function outer(){
    var a = 'a Local variable of outer fun';
    document.write(a + '<br>');
    function inner(){
        var k = 'k Local var of inner fun';
        document.write(k + '<br>');     //inner() can access from inner fun
        document.write(a + '<br>');     //as well access from outer fun
        document.write(z + '<br>');     //as well access from global scope
    }
    inner();
    document.write(a + '<br>')  //it is outer it accepts outer var
    document.write(z + '<br>')  // as well global var
    
    //document.write(k + '<br>')  // here we cant accept inner in outer 

}
outer();
document.write(z);
*/
