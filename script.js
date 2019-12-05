var btn1=document.getElementById("Buttom1");// Объявляем переменную для кнопки с id (с айдишником Buttom1)
 btn1.addEventListener("click", function (){// Обработка нажатия на кнопку  с айдишником Buttom1 и вызов функции для неё
   location = "https://yandex.by";
 })

 var clr=document.getElementById("Click_container");

 var btn2=document.getElementById("Buttom2");
 btn2.addEventListener("click", function (){
    clr.style.background = "black";
    clr.style.height = "100vh";
 })

 var container7=document.getElementById("container7");

 var btn3=document.getElementById("Buttom3");
 btn3.addEventListener("click", function (){
btn3.style.display = "none";
container7.style.display = "flex"

})

 var term = {
  Canada: 10,
  Germany: 23,
  Spain: 22
}

var sum = 0
var times = 0
for (let key in term){
  sum += term [key]
  times ++
}
alert (sum/times)



