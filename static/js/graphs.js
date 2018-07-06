
function post(){
  var url = "http://www.innovations.pe/arturo/api-bweather/measures/read_all/";
  var send = JSON.stringify({"api_key": "Uk1Ab2nvLvskmod"})
  $.post( url, send, function(response){
      var dataSourceGet = response["records"]; //quiero que este sea el datasource real
      show_chart(dataSourceGet)
  });
}

function show_chart(dataSourceGet){
  var chart = $("#chartT").dxChart({
      dataSource: dataSourceGet, //data source es el json que te mande por wa
      commonSeriesSettings: {
          argumentField: "created",
          type: "line"
      },
      margin: {
          bottom: 20
      },
      argumentAxis: {
          valueMarginsEnabled: false,
          discreteAxisDivisionMode: "crossLabels",
          grid: {
              visible: true
          }
      },
      series: [
          { valueField: "temperature", color: "#9c27b0", name: "Temperatura (ºC)" }
      ],
      legend: {
          verticalAlignment: "bottom",
          horizontalAlignment: "center",
          itemTextPosition: "bottom"
      },
      title: {
          text: "Temperatura"
      },
      "export": {
          enabled: true
      },
      tooltip: {
          enabled: true,
          customizeTooltip: function (arg) {
              return {
                  text: arg.valueText
              };
          }
      }
  }).dxChart("instance");

  var chart = $("#chartP").dxChart({
      dataSource: dataSourceGet,
      commonSeriesSettings: {
          argumentField: "created",
          type: "line"
      },
      margin: {
          bottom: 20
      },
      argumentAxis: {
          valueMarginsEnabled: false,
          discreteAxisDivisionMode: "crossLabels",
          grid: {
              visible: true
          }
      },
      series: [
          { valueField: "bmp", color: "#673ab7", name: "Presión (atm)" }
      ],
      legend: {
          verticalAlignment: "bottom",
          horizontalAlignment: "center",
          itemTextPosition: "bottom"
      },
      title: {
          text: "Presión"
      },
      "export": {
          enabled: true
      },
      tooltip: {
          enabled: true,
          customizeTooltip: function (arg) {
              return {
                  text: arg.valueText
              };
          }
      }
  }).dxChart("instance");

  var chart = $("#chartUV").dxChart({
      dataSource: dataSourceGet,
      commonSeriesSettings: {
          argumentField: "created",
          type: "line"
      },
      margin: {
          bottom: 20
      },
      argumentAxis: {
          valueMarginsEnabled: false,
          discreteAxisDivisionMode: "crossLabels",
          grid: {
              visible: true
          }
      },
      series: [
          { valueField: "uv", color: "#3f51b5", name: "Rad. UV (nm)" }
      ],
      legend: {
          verticalAlignment: "bottom",
          horizontalAlignment: "center",
          itemTextPosition: "bottom"
      },
      title: {
          text: "Radiación UV"
      },
      "export": {
          enabled: true
      },
      tooltip: {
          enabled: true,
          customizeTooltip: function (arg) {
              return {
                  text: arg.valueText
              };
          }
      }
  }).dxChart("instance");

  var chart = $("#chartH").dxChart({
      dataSource: dataSourceGet,
      commonSeriesSettings: {
          argumentField: "created",
          type: "line"
      },
      margin: {
          bottom: 20
      },
      argumentAxis: {
          valueMarginsEnabled: false,
          discreteAxisDivisionMode: "crossLabels",
          grid: {
              visible: true
          }
      },
      series: [
          { valueField: "rel_humidity", color: "#2196f3", name: "Humedad (%)" }
      ],
      legend: {
          verticalAlignment: "bottom",
          horizontalAlignment: "center",
          itemTextPosition: "bottom"
      },
      title: {
          text: "Humedad"
      },
      "export": {
          enabled: true
      },
      tooltip: {
          enabled: true,
          customizeTooltip: function (arg) {
              return {
                  text: arg.valueText
              };
          }
      }
  }).dxChart("instance");
}

$(document).ready(post);
