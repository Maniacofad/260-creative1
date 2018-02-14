$(document).ready(function() {

  var myurl = "https://overwatch-api.net/api/v1/hero";
  $.ajax({
    url: myurl,
    dataType: "json",
    success : function(json){
      var results = "";
          for (var i=0; i<json.data.length; i++) {
            results += '<p><b>Name: </b>' + json.data[i].name +'</p>';
            results += '<p><b>Real Name: </b>' + json.data[i].real_name +'</p>';
            results += '<p><b>Affiliation: </b>' + json.data[i].affiliation +'</p>';
            results += '<p><b>Description: </b>' + json.data[i].description +'</p><br>';
            $("#hero"+(i+1)).html(results);
            results="";
          }

    }
  });


});
