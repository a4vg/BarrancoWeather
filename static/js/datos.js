function main() {

  var token;

  $.getJSON('http://www.innovations.pe/arturo/api-bweather/api_key/create/', function(data1) {
      token = data1["result"]["api_key"];
      $("#token").text(token);

  });

  var url = "http://innovations.pe/arturo/api-bweather/measure/read_all.php";
  var send = JSON.stringify({"api_key": "Uk1Ab2nvLvskmod"})

  var posting = $.post( url, send, function(measures){
    $("#actualizacion").text("Última actualización: " + measures["records"][measures["records"].length-1]["created"]);
    $("#temperatura").text(measures["records"][measures["records"].length-1]["temperature"]+" ºC");
    $("#humedad").text(measures["records"][measures["records"].length-1]["rel_humidity"]+"%");
    //Falta presion y humedad
    $("#presion").text(measures["records"][measures["records"].length-1]["key-de-presion"]+"%");
    $("#uv").text(measures["records"][measures["records"].length-1]["key-de-uv"]+"%");
  });

  posting.fail(function() {
    alert( "error" );
  });
}
$(document).ready(main);
