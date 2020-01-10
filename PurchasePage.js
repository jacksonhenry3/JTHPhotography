let params = new URLSearchParams(location.search);
$("#preview").attr("src",params.get('image'));

$("#name_of_item").attr("value",params.get('image').substring(0, params.get('image').length - 4));