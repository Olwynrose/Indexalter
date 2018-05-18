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

$(".elmt").show();
$("#liste_mc").hide();
$("#liste_pb").hide();



$(".b_pb_mc").click(function Affiche_problématiques_par_motclé() {
  $(".elmt").hide();
  $("#liste_mc").show();
  $("#liste_pb").hide();

  $("#infost div .b_pb_l").attr('id', "");
  $("#infost div .b_pb_mc").attr('id', "selected");
  $("#infost div .b_pb_t").attr('id', "");

  $("#nav_pbl").show();
  $("#nav_pbt").hide();
});


$(".b_pb_l").click(function Affiche_liste_problématiques() {
  $(".elmt").hide();
  $("#liste_mc").hide();
  $("#liste_pb").show();

  $("#infost div .b_pb_l").attr('id', "selected");
  $("#infost div .b_pb_mc").attr('id', "");
  $("#infost div .b_pb_t").attr('id', "");

  $("#nav_pbl").show();
  $("#nav_pbt").hide();
});


$(".b_pb_t").click(function Affiche_problématiques_par_thème() {
  $(".elmt").show();
  $("#liste_mc").hide();
  $("#liste_pb").hide();

  $("#infost div .b_pb_t").attr('id', "selected");
  $("#infost div .b_pb_l").attr('id', "");
  $("#infost div .b_pb_mc").attr('id', "");

  $("#nav_pbl").hide();
  $("#nav_pbt").show();
});


$("li.kw").click(function() {
  $(".elmt").hide();

  var keyword;
  var selector;

  keyword = $(this).attr('class').split(" ").pop();
  selector = "." + keyword + " .elmt";
  $(selector).show();
});

});
