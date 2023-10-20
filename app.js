//? two functions
//* setInterval => repeatively running
//* setTimeOut => after sometime 

// var count = 0;
// var interval;
// function timer(){
//     count++
//   console.log(count);
// }

//  interval = setInterval(timer,1000)   //? run multiple times


// setTimeout(function(){
//   clearInterval(interval)
// },5000)


// function timeOut(){
//     console.log("running...");
// }

// setTimeout(timeOut,3000)    //? run only one time


//Todo ==========   Stop Watch ===============



var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var interval;

function timer(){
  msec++
  msecHeading.innerHTML = msec; 
  if(msec >= 100){
    sec++
    secHeading.innerHTML = sec
    msec = 0;
  } else if(sec >= 60){
    min++
    sec = 0;
    minHeading.innerHTML = min 
  }
}

function start(){ 
  interval = setInterval(timer,10)
  var a = document.getElementById("btn").disabled = true;   //?  It will disable start button
   
   
}

function stop(){
  clearInterval(interval)
  var a = document.getElementById("btn").disabled = false;   //? It will finish disable in start button

}

function reset(){
  min = 0;
  sec = 0;
  msec = 0;
  minHeading.innerHTML = min;
  secHeading.innerHTML = sec;
  msecHeading.innerHTML = msec;
  stop()
}


//? =========  Add to CART  =========

// function addtocart(){
//     var img = document.getElementById("product");
//     var name = document.getElementById("name")
//     var price = document.getElementById("price")
    
//     var cartimg = document.getElementById("cart-product");
//     var cartname = document.getElementById("cart-name")
//     var cartprice = document.getElementById("cart-price")
    
//     cartimg.src = img.src
//     cartname.innerHTML = name.innerHTML
//     cartprice.innerHTML = price.innerHTML



    // console.log(img.src);
    // console.log(name.innerHTML);
    // console.log(price.innerHTML);
// }
    













//Todo ==========================  DOM  ===============

// var a = document.getElementById('pappa');
// console.log(a.lastChild);


// var b = document.getElementById('pappa');
// console.log(b.childNodes[0].nodeName);

