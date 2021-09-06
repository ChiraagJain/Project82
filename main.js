var mouse_event = "Empty";
var last_position_of_x,last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ctx.arc
color ="Empty";
width ="Empty";
radius ="Empty";


canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e) {
    color = document.getElementById("color").value;
width = document.getElementById("width").value;
radius = document.getElementById("radius").value;
    mouse_event = "mousedown";
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e) {
    current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY-canvas.offsetTop;
    if (mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
        ctx.stroke();

        console.log("last position of x and y cordinate =");
        console.log("x ="+ last_position_of_x +"y ="+ last_position_of_y);
        console.log("current position of x and y cordinate =");
        console.log("x ="+ current_position_of_mouse_x +"y ="+ current_position_of_mouse_y);
        }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;    
}
 canvas.addEventListener("mouseup",my_mouse_up);
 function my_mouse_up(e) {
     mouse_event = "mouseup";
 }
 canvas.addEventListener("mouseleave",my_mouse_leave);
 function my_mouse_leave(e) {
     mouse_event = "mouseleave";
 }
 function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}