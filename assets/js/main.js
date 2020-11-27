$(document).ready(main);

function main(){
    renderAcademicService();
    renderAwards();
}


function renderAcademicService(){
    loadJSON('assets/info/academic-service.json', function(response) {
        // Parsing JSON string into object
        var service = JSON.parse(response);
        var misc = service["misc"];
        var pc = service["program_committee"]
        var reviewer = service["reviewer"]
        
        updateServiceHTML(misc, "service")
        updateServiceHTML(pc, "pc")
        updateServiceHTML(reviewer, "reviewer")
       });
}

function updateServiceHTML(arr, elemID){

    for (idx = 0; idx < arr.length; idx++){
        var service = arr[idx];
        var line = service["venue"] + ", " + service["year"]
        if ('link' in service){
            link = '<a href="' + service['link'] + '" target="_blank">link</a>'
            line = line + " " + link
        }
        if (elemID == 'service'){
            $("#" + elemID).prepend("<li>" + line + "</li>")
        }
        else{
            $("#" + elemID).append("<li>" + line + "</li>")
        }
    }
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