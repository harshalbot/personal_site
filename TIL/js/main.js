function showDiv() {
    document.getElementById('link_to_til').style.display = "block";
}

var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

$("til_text").bind(clickHandler, function(e) {
    document.getElementById('link_to_til').style.display="block";
});


function addForm() {
	document.getElementById('add_button')
}


