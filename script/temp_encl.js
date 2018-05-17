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



 /* GESTION DE L'ONGLET SELECTIONNE */

 // sélection par défaut de l'onglet "Problématique par thème"
$("#infost div .b_pb_t").attr('id', "selected");
$("#nav_pbl").hide();
$("#nav_pbt").show();

$("#article_pb").show();
$("#liste_mc").hide();
$("#liste_pb").hide();


$(".b_pb_mc").click(function Affiche_problématiques_par_motclé() {
  $("#article_pb").hide();
  $("#liste_mc").show();
  $("#liste_pb").hide();

  $("#infost div .b_pb_l").attr('id', "");
  $("#infost div .b_pb_mc").attr('id', "selected");
  $("#infost div .b_pb_t").attr('id', "");

  $("#nav_pbl").show();
  $("#nav_pbt").hide();
});


$(".b_pb_l").click(function Affiche_liste_problématiques() {
  $("#article_pb").hide();
  $("#liste_mc").hide();
  $("#liste_pb").show();

  $("#infost div .b_pb_l").attr('id', "selected");
  $("#infost div .b_pb_mc").attr('id', "");
  $("#infost div .b_pb_t").attr('id', "");

  $("#nav_pbl").show();
  $("#nav_pbt").hide();
});


$(".b_pb_t").click(function Affiche_problématiques_par_thème() {
  $("#article_pb").show();
  $("#liste_mc").hide();
  $("#liste_pb").hide();

  $("#infost div .b_pb_t").attr('id', "selected");
  $("#infost div .b_pb_l").attr('id', "");
  $("#infost div .b_pb_mc").attr('id', "");

  $("#nav_pbl").hide();
  $("#nav_pbt").show();
});








});
