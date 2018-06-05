$.getJSON('http://innovations.pe/arturo/api-bweather/measure/read_all.php', function(data) {

    //Muestra ultima actualizacion
    $("#actualizacion").text("Última actualización: " + data["records"][data["records"].length-1]["created"]);
    //Muestra la ultima lectura
    $("#temperatura").text(data["records"][data["records"].length-1]["temperature"]+" ºC");
    $("#humedad").text(data["records"][data["records"].length-1]["rel_humidity"]+"%");
    //Falta presion y humedad
    $("#presion").text(data["records"][data["records"].length-1]["key-de-presion"]+"%");
    $("#uv").text(data["records"][data["records"].length-1]["key-de-uv"]+"%");
});
