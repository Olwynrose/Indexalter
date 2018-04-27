$(document).ready(function (){

$("p.ensavoirplus").hide();


function handler(event) {
  var target = $(event.target);
  if (target.is("input.ensavoirplus")) {
    target.siblings(".ensavoirplus").toggle();
    if (target.val() == "En savoir plus"){
      target.val("En savoir moins");
    }
    else{
      target.val("En savoir plus");
    }
  }
}
$("input.ensavoirplus").click(handler).find(".ensavoirplus").hide();










});
