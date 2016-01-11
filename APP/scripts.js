$(document).ready(function(){

  var body = $("body");
  var div = $("<div>");

//dodanie elementu div do elementu body
  body.append(div);

  //metody jquery
  //dodanie tekstu
  div.text("SYLWETKA");
//  dodanie klasy npis
  div.addClass("napis");
  div.css("display","none");
// zmiana przezroczystości od 0 do 1
 div.fadeIn("slow");
});
