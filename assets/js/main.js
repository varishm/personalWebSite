$(document).ready(main);

function main(){
    renderAwards();
}

function renderAwards() {
    loadJSON('assets/info/awards.json', function(response) {
        // Parsing JSON string into object
          var awards = JSON.parse(response);
          for (idx = 0; idx < awards.length; idx++){
            var award = awards[idx];
            var title = award["award"]
            var org = award["org"]
            var line = award["award"] + ", " + award["org"] + ", " + award["year"]
            $("#awards").append("<li>" + line + "</li>")
        }
       });
}


function loadJSON(filePath, callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', filePath, true); //assets/info/awards.json
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }