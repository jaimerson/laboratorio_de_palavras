import * as PIXI from 'pixi.js';

let data: PIXI.interaction.InteractionData | null;
let alpha;
let dragging: boolean;
let position: {x: number, y: number};

var renderer = PIXI.autoDetectRenderer({
        height: 600,
        width: 800
    });

PIXI.settings.RESOLUTION = 2
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// create a texture from an image path
const style = new PIXI.TextStyle({
    fill: "white",
    fontSize: 18,
    fontWeight: "bold",
    stroke: "red",
    strokeThickness: 3
});
var text = new PIXI.Text('batata', style);
// text.updateText();
var texture = text.texture;

for (var i = 0; i < 10; i++) {
    createBunny(Math.floor(Math.random() * 800), Math.floor(Math.random() * 600));
}

function createBunny(x: number, y: number) {
    // create our little bunny friend..
    var bunny = new PIXI.Sprite(texture);

    // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
    bunny.interactive = true;

    // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
    bunny.buttonMode = true;

    // center the bunny's anchor point
    bunny.anchor.set(0.5);

    // make it a bit bigger, so it's easier to grab
    bunny.scale.set(3);

    // setup events
    bunny
        // events for drag start
        .on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        // events for drag end
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        // events for drag move
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);

    // move the sprite to its designated position
    bunny.position.x = x;
    bunny.position.y = y;

    // add it to the stage
    stage.addChild(bunny);
}

//requestAnimationFrame(animate);

function animate() {

    requestAnimationFrame(animate);

    // render the stage
    renderer.render(stage);
}

function onDragStart(event: PIXI.interaction.InteractionEvent) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    data = event.data;
    alpha = 0.5;
    dragging = true;
}

function onDragEnd() {
    alpha = 1;

    dragging = false;

    // set the interaction data to null
    data = null;
}

function onDragMove() {
    if (dragging && data) {
        var newPosition = data.getLocalPosition(stage);
        position.x = newPosition.x;
        position.y = newPosition.y;
    }
}
