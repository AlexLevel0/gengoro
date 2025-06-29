$(function() {



let mass = ""
const max = 20

for(let i = 0; i < max; i++){
mass += `<div><img src="img/${i}.png"></div>`
}

  $(".mass").html(mass);


let out = Math.floor(Math.random() * max)

let ok = []

for(let i = 0; i < max; i++){
ok[i] = 0
}

let touch = true

let num = 0


for(let i = 0; i < max; i++){

$(".mass div").eq(i).on("click", function(){


if(touch === false){
return;
}

if(ok[i] === 1){
return;
}

touch = false

num = i

if(out !== num){
setTimeout(tama, 500);
return;
}

setTimeout(gen, 500);


})
}






function tama(){
$(".mass div img").eq(num).attr("src", "img/tama.png");
setTimeout(safe, 2000);
}


function safe(){
$(".mass div img").eq(num).attr("src", "img/safe.png");
ok[num] = 1
touch = true
}


function gen(){
$(".mass div img").eq(num).attr("src", "img/gen.png");
$("body").css("background-color", "black");
setTimeout(outoo, 2000);
}


function outoo(){
$(".mass div img").eq(num).attr("src", "img/out.png");
ok[num] = 1
setTimeout(over, 2000);
}

function over(){
$("h2").text("ゲームオーバー");
}


});
