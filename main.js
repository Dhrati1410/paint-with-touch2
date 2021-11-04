var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
Width_of_line = 5;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
   color = document.getElementById("color").value;
   Width_of_line = document.getElementById("Width_of_line").value;
   mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    
    var current_x_mouse = e.clientX - canvas.offsetLeft;
    var current_y_mouse = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Width_of_line;
        ctx.moveTo(last_x_position, last_y_position);
        ctx.lineTo(current_x_mouse, current_y_mouse)
        ctx.stroke();
    }

    last_x_position = current_x_mouse;
    last_y_position = current_y_mouse;
}

canvas.addEventListener("touchstart", my_touch_start);
function my_touch_start(e){
    last_x_position_of_touch = current_x_position_of_touch;
    last_y_position_of_touch = current_y_position_of_touch;
}

canvas.addEventListener("touchmove", my_touch_move);
function my_touch_move(e){
    current_x_position_of_touch = e.touches[0].clientX - canvas.offsetLeft;
    current_y_position_of_touch = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = Width_of_line;
    ctx.moveTo(last_x_position_of_touch, last_y_position_of_touch);
    ctx.lineTo(current_x_position_of_touch, current_y_position_of_touch)
    ctx.stroke();

    last_x_position_of_touch = current_x_position_of_touch;
    last_y_position_of_touch = current_y_position_of_touch;
}
