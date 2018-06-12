function main() {

  var url = "http://www.innovations.pe/arturo/api-bweather/measures/read_last/";
  var send = JSON.stringify({"api_key": "Uk1Ab2nvLvskmod"})

  var posting = $.post( url, send, function(measure){
    $("#actualizacion").text("Última actualización: " + measure["created"]);
    $("#temperatura").text(measure["temperature"]+" ºC");
    $("#humedad").text(measure["rel_humidity"]+"%");
    //Falta presion y humedad
    $("#presion").text(measure["key-de-presion"]+"%");
    $("#uv").text(measure["key-de-uv"]+"%");
  });

}
$("#token, #tokenanexo").hide();
$(document).ready(main);

function getToken(){
  var token;
  $.getJSON('http://www.innovations.pe/arturo/api-bweather/api_key/create/', function(data1) {
      token = data1["result"]["api_key"];
      $("#token").text(token);
  });
  $("#token, #tokenanexo").slideDown("slow");
}
