var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
var img = document.querySelector("#img")
var h2 = document.querySelector("h2")
var num
function toss(para){
num = Math.ceil(Math.random(num) * 2)
if(para===1 && num===1 || para===2 && num===2){
    h2.innerHTML="You Win The Toss"
}else{
    h2.innerHTML="You Loss The Toss"
}
if(num===1){
    img.src = "./pictures/golds.png"
}else if(num===2){
img.src = "./pictures/silver.jpeg"
}

}
