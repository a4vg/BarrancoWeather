function main() {

  var url = "http://www.innovations.pe/arturo/api-bweather/measures/read_last/";
  var send = JSON.stringify({"api_key": "Uk1Ab2nvLvskmod"})

  var posting = $.post( url, send, function(measure){
    $("#actualizacion").text("Última actualización: " + measure["created"]);
    $("#temperatura").text(measure["temperature"]+" ºC");
    $("#humedad").text(measure["rel_humidity"]+"%");
    var presion_atm = Number(measure["bmp"])*(9.8692316931427E-4)/100*10000
    $("#presion").text(String(Math.round(presion_atm)/10000)+" atm"); //Pascales a atm
    //Redondear las medidas de uv para el índice y determinar su nivel
    var medidauv = ""
    var uv = Math.round(Number(measure["uv"])*10000)/10000
    if (1<=uv<=2) {medidauv=" (bajo)"}
    else if (3<=uv<=5) {medidauv=" (medio)"}
    else if (6<=uv<=7) {medidauv=" (alto)"}
    else if (9<=uv<=10) {medidauv=" (muy alto)"}
    else if (uv>=11) {medidauv=" (extremo)"}
    $("#uv").text(String(uv) + medidauv);
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
