let params = new URLSearchParams(location.search);
var id = params.get('id')






$("#preview").attr("src",data[id]["location"]);
$("#title").append(data[id]["title"]);
$("#description").append(data[id]["description"]);
$("#button").append(data[id]["button"]);


// var e = $("#price")[0];
// var strUser = e.options[e.selectedIndex].text;
// $("#price_display").html(strUser.substring( strUser.length-11 ));

//  $("#price").change(function() {
// var strUser = e.options[e.selectedIndex].text;
// $("#price_display").html(strUser.substring( strUser.length-11 ));
// });
 console.log(data)
