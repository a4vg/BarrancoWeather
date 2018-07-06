function main() {

  var url = "http://www.innovations.pe/arturo/api-bweather/measures/read_last/";
  var send = JSON.stringify({"api_key": "Uk1Ab2nvLvskmod"})


  $.post( url, send, function(measure){
    //Actualizacion
    var d = new Date();
    var created = "";
    var fecha = measure["created"].split(" ")[0].split("-").map(Number) //[Año Mes Día]
    var hora = measure["created"].split(" ")[1].replace("''", "").split(":").map(Number) //[Hora Minuto Segundo]

    //Verificar que tan reciente es la ultima actualizacion
    if (d.getFullYear()>fecha[0]) { created = "Hace " + (d.getFullYear()-fecha[0]) + " años";}
    else if (d.getMonth()>fecha[1]) { created =  "Hace " + (d.getMonth()-fecha[1]) + " meses";}
    else if (d.getDate()>fecha[2]) { created =  "Hace " + (d.getDate()-fecha[2]) + " días";}
    else if (d.getHours()>hora[0]) { created =  "Hace " + (d.getHours()-hora[0]) + " horas";}
    else if (d.getMinutes()>hora[1]) { created =  "Hace " + (d.getMinutes()-hora[1]) + " minutos";}
    else if (d.getSeconds()>hora[2]) { created = "Hace " + (d.getSeconds()-hora[2]) + " segundos";}
    else {created = "Ahora"}

    $("#actualizacion").text("Última actualización: " + created);

    //Temperature
    var temperature = measure["temperature"];
    var level =  "";
    if (temperature<0){
      level = "Extremadamente frío";
      var color = "#94F0F7";
      $("#iconthermometer .fa-thermometer-half").removeClass("fa-thermometer-half").addClass("fa-thermometer-empty"); //Cambiar icono
    }
    else if (temperature<15){
      level = "Frío";
      var color = "#58DEE7";
      $("#iconthermometer .fa-thermometer-half").removeClass("fa-thermometer-half").addClass("fa-thermometer-quarter"); //Cambiar icono
    }
    else if (temperature<23){
      level = "Templado";
      var color = "#F9E53B";
    }
    else if (temperature<30){
      level = "Caliente";
      var color = "#F66B0B";
      $("#iconthermometer .fa-thermometer-half").removeClass("fa-thermometer-half").addClass("fa-thermometer-three-quarters"); //Cambiar icono
    }
    else{
      level = "Extremadamente caliente";
      var color = "#F60B0B";
      $("#iconthermometer .fa-thermometer-half").removeClass("fa-thermometer-half").addClass("fa-thermometer-full"); //Cambiar icono
    }
    $('#iconthermometer .fa-circle').each(function(){ this.style.setProperty( 'color', color, 'important' );}); //Cambiar color
    $("#temperatura").text(temperature+" ºC (" + level + ")");

    //Humedad
    var humidity = measure["rel_humidity"];
    if (humidity<31) { level = "Baja"; color="#F0CA0C"}
    else if (humidity<61){ level = "Media"; color="#0CF077"}
    else { level = "Alta"; color="#0C96F0" }

    $('#icontint .fa-circle').each(function(){ this.style.setProperty( 'color', color, 'important' );}); //Cambiar color
    $("#humedad").text(measure["rel_humidity"]+"% (" + level + ")");

    //Presion
    $("#presion").text(String(Math.round(measure["bmp"]*10000)/10000)+" atm"); //Pascales a atm

    //Redondear las medidas de uv para el índice y determinar su nivel
    var uv = Math.round(Number(measure["uv"])*1000)/1000
    level = measure["uv_status"]
    if (1<=uv<=2) {color= "#2CD05E";} //bajo
    else if (3<=uv<=5) {color="#ECEC1D";} //medio
    else if (6<=uv<=7) {color="#EC8707"} //alto
    else if (9<=uv<=10) {color="#EC3107"} //muy alto
    else if (uv>=11) {color="#8D07EA"} //extremo
    $('#iconsun .fa-circle').each(function(){ this.style.setProperty( 'color', color, 'important' );}); //Cambiar color
    $("#uv").text(String(uv) + " (" + level + ")");
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
