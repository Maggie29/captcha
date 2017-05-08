
var captcha = document.getElementById("captcha");
var textCaptcha = document.getElementById("text-captcha");
var load = document.getElementById("load");
var check = document.getElementById("check");

load.addEventListener("click", function(e){
  e.preventDefault();
captcha.value = newCaptcha();
captcha.style.color= colorCaptcha();
})

function newCaptcha(){
  var caracteres = "abcdeefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVW0123456789";
  var captcha ="";
  for(var i=0, i<7,i++){
    captcha += (letters[Math.floor(Math.random() * letters.length)]);
  }
  return captcha;
}

function colorCaptcha(){
  var caracter = "0123456789ABCDEF"
  var randomColor = "#";
  for(var i =0; i<6; i++){
    random += caracteres[Math.floor(Math.random() * 16)];
  }
  return randomColor
}

check.addEventListener("click", function(){

 if (captcha.value == textCaptcha.value) {
 	alert("El texto es correcto")
 }else{
 	alert("El texto debe coincidir")
 }

});
