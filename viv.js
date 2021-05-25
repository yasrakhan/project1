var canvas= new fabric.Canvas("myCanvas");

player_x= 10;
player_y= 10;

image_height= 30;
image_width= 30;

var player_object="";
var block_images="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object= Img;
        player_object.scaleToWidth(50);
        player_object.scaleToHeight(100);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_images= Img;
        block_images.scaleToWidth(image_width);
        block_images.scaleToHeight(image_height);
        block_images.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_images);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true&&keyPressed=='80'){
        console.log("p key and shift key is pressed together");
        image_width= image_width+25;
        image_height= image_height+25;
        document.getElementById("current_width").innerHTML= "Current Width  = "+image_width;
        document.getElementById("current_height").innerHTML= "Current Height  = "+image_height;
    }

    if(e.shiftKey==true&&keyPressed=='77'){
        console.log("m key and shift key is pressed together");
        image_width= image_width-20;
        image_height= image_height-20;
        document.getElementById("current_width").innerHTML= "Current Width = "+image_width;
        document.getElementById("current_height").innerHTML= "Current Height  = "+image_height;
    }

    if(keyPressed=='38'){
        console.log("up key");
        up();
    }

    if(keyPressed='40'){
        console.log("down key");
        down();
    }

    if(keyPressed='37'){
        console.log("left key");
        left();
    }

    if(keyPressed='39'){
        console.log("right key");
        right();
    }

    if(keyPressed='87'){
        console.log("w key for wall");
        new_image('wall.jpg');
    }

    if(keyPressed='71'){
        console.log("g key for ground");
        new_image('ground.png');
    }

    if(keyPressed='76'){
        console.log("l key for light green grass");
        new_image('light_green.png');
    }

    if(keyPressed='84'){
        console.log("t key for trunk");
        new_image('trunk.jpg');
    }

    if(keyPressed='82'){
        console.log("r key for roof");
        new_image('roof.jpg');
    }

    if(keyPressed='89'){
        console.log("y key for yellow wall");
        new_image('yellow_wall.png');
    }

    if(keyPressed='68'){
        console.log("d key for dark green");
        new_image('dark_green.png');
    }

    if(keyPressed='85'){
        console.log("u key for player");
        new_image('unique.png');
    }

    if(keyPressed='67'){
        console.log("c key for cloud");
        new_image('cloud.jpg');
    }
}

function up(){
    if(player_y>=0){
        player_y= player_y-image_height;
        console.log("player y value "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y= player_y+image_height;
        console.log("player y value "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x= player_x-image_width;
        console.log("player x value "+player_x);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=700){
        player_x= player_x+image_width;
        console.log("player x value "+player_x);
        canvas.remove(player_object);
        player_update();
    }
}