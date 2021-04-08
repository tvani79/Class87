var canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object= "";

function player_update(){
    fabric.Image.formURL("player.png", function(Img) {
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top: player_y, 
    left: player_x
    });
    canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.formURL(get_image, function(Img) {
    block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top: player_y,
        left: player_x
    });
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='80'){
        console.log("p and shift are pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;

    }

    if(e.shiftKey==true && keyPressed=='77'){
        console.log("m and shift are pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keyPressed=='38'){
        up();
        console.log("upPressed");
    }

    if(keyPressed=='39'){
        right();
        console.log("rightPressed");
    }

    if(keyPressed=='37'){
        left();
        console.log("leftPressed");
    }

    if(keyPressed=='40'){
        down();
        console.log("downPressed");
    }

    if(keyPressed=='87'){
        console.log("w");
        new_image("wall.jpg");
    }

    if(keyPressed=='71'){
        console.log("g");
        new_image("ground.png");
    }

    if(keyPressed=='76'){
        console.log("l");
        new_image("light_green.png");
    }

    if(keyPressed=='84'){
        console.log("t");
        new_image("trunk.jpg");
    }

    if(keyPressed=='82'){
        console.log("r");
        new_image("roof.jpg");
    }

    if(keyPressed=='89'){
        console.log("y");
        new_image("yellow_wall.png");
    }

    if(keyPressed=='68'){
        console.log("d");
        new_image("dark_green.png");
    }

    if(keyPressed=='85'){
        console.log("u");
        new_image("unique.png");
    }

    if(keyPressed=='67'){
        console.log("c");
        new_image("cloud.jpg");
    }

}