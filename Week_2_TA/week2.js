function button() {
alert("Clicked!");
}

function changeColor() {
    var text_id = "txtColor";
    var textbox = document.getElementById(text_id);

    var div_id = "div1";
    var div = document.getElementById(div_id);

    var color = textbox.value;
    div.style.backgroundColor = color;
}