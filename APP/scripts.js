$(document).ready(function(){

  var body = $("body");
  var div = $("<div>");
  var img = $("img");
  var center =$("center");
//dodanie elementu div do elementu body
  body.append(div);
   body.append(img);
   body.append(center);
  //metody jquery
  //dodanie tekstu
  div.text("SYLWETKA");
//  dodanie klasy npis
  div.addClass("napis");
  div.css("display","none");
// zmiana przezroczystości od 0 do 1
 div.fadeIn(8000);

img.css("display", "none");
img.fadeIn(4999);

center.css("display", "none");
center.fadeIn(200);
});
