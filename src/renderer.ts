import * as PIXI from 'pixi.js';

// const app = new PIXI.Application();

// // The application will create a canvas element for you that you
// // can then insert into the DOM.
// document.body.appendChild(app.view);

// // load the texture we need
// PIXI.loader.add('bunny', 'bunny.png').load((loader, resources) => {

//     // This creates a texture from a 'bunny.png' image.
//     const bunny = new PIXI.Sprite(resources.bunny.texture);

//     // Setup the position of the bunny
//     bunny.x = app.renderer.width / 2;
//     bunny.y = app.renderer.height / 2;

//     // Rotate around the center
//     bunny.anchor.x = 0.5;
//     bunny.anchor.y = 0.5;

//     // Add the bunny to the scene we are building.
//     app.stage.addChild(bunny);

//     // Listen for frame updates
//     app.ticker.add(() => {
//          // each frame we spin the bunny around a bit
//         bunny.rotation += 0.01;
//     });
// });

let data: PIXI.Loader;
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

requestAnimationFrame(animate);

function animate() {

    requestAnimationFrame(animate);

    // render the stage
    renderer.render(stage);
}

function onDragStart(event) {
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
    if (dragging) {
        var newPosition = data.getLocalPosition(parent);
        position.x = newPosition.x;
        position.y = newPosition.y;
    }
}
