//lo eseguo dopo che ho caricato il sito
$(document).ready(function(){
  //sostituisco la privacy
  var nuovaPrivacy="La tu mamma letta l'informativa sotto riportata accetta espressamente la registrazione ed il trattamento dei propri dati che avverrà premendo il tasto 'Invia'.<br><a href=\"http://www.camera.it/parlam/leggi/deleghe/testi/03196dl.htm\" target=\"_blank\">Leggi l'informativa ai sensi dell'art. 13 del D.lgs 196/03</a> ";
  $(".form_privacy p").html(nuovaPrivacy);
  
  //cambio il testo dell'aggiungi al carrello
  
  $(".product-add-to-cart a span span").text("Aggiungilo alla spesa");
  
  //per ogni prezzo, modifico il contenuto
  $(".product-price .price").each(function(){
      var prezzoVecchio=$(this).text();
      var prezzoNuovo=prezzoVecchio.replace(".00","");
      $(this).text(prezzoNuovo);
    });
    
  
});
