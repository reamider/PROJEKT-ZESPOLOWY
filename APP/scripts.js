$(document).ready(function(){

  var body = $("body");
  var div = $("<div>");
    var div2 =$("div2")
  var img = $("img");
  var center =$("center");

//dodanie elementu div do elementu body
  body.append(div);
     body.append(div2);
   body.append(img);
   body.append(center);
   body.append(div2);

  //metody jquery
  //dodanie tekstu
// div.text("Kliknij na wybraną partie mieśni aby wybrać ćwiczenia");
//  dodanie klasy npis
div2.animate({"left": "30%"}, "slow");
  div.addClass("napis");
  div.css("display","none");
// zmiana przezroczystości od 0 do 1
 div.fadeIn(2000);

img.css("display", "none");
img.fadeIn(1000);

});
