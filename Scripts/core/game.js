/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var tut;
var gameScene1;
var decisionA;
var outcomeA1;
var outcomeA2;
var outcomeA3;
var decisionB;
var outcomeB1;
var outcomeB2;
var outcomeB3;
var outcomeB4;
var bmg;
function init() {
    //Set up BMG
    bmg = new Audio('../../Assets/Sound/bmg.mp3');
    bmg.loop = true;
    bmg.volume = 0.7;
    bmg.play();
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    stage.removeAllChildren();
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene            
            menu = new scenes.Menu();
            currentScene = menu;
            //Play BMG on menu
            bmg.play();
            break;
        case config.Scene.TUTORIAL:
            // show the PLAY scene            
            tut = new scenes.TUTORIAL();
            currentScene = tut;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.gameScene1:
            // show the game OVER scene            
            gameScene1 = new scenes.gameScene1();
            currentScene = gameScene1;
            //console.log("Starting OVER Scene");
            break;
        case config.Scene.decisionA:
            // show the game OVER scene            
            decisionA = new scenes.decisionA();
            currentScene = decisionA;
            //console.log("Starting OVER Scene");
            break;
        case config.Scene.outcomeA1:
            // show the game OVER scene            
            outcomeA1 = new scenes.outcomeA1();
            currentScene = outcomeA1;
            break;
        case config.Scene.outcomeA2:
            // show the game OVER scene            
            outcomeA2 = new scenes.outcomeA2();
            currentScene = outcomeA2;
            var outcomeA2Sound = new Audio('../../Assets/Sound/A2Sound.mp3');
            outcomeA2Sound.play();
            break;
        case config.Scene.outcomeA3:
            // show the game OVER scene
            outcomeA3 = new scenes.outcomeA3();
            currentScene = outcomeA3;
            break;
        case config.Scene.decisionB:
            // show the game OVER scene
            decisionB = new scenes.decisionB();
            currentScene = decisionB;
            break;
        case config.Scene.outcomeB1:
            // show the game OVER scene
            outcomeB1 = new scenes.outcomeB1();
            currentScene = outcomeB1;
            break;
        case config.Scene.outcomeB2:
            // show the game OVER scene            
            outcomeB2 = new scenes.outcomeB2();
            currentScene = outcomeB2;
            break;
        case config.Scene.outcomeB3:
            // show the game OVER scene            
            outcomeB3 = new scenes.outcomeB3();
            currentScene = outcomeB3;
            break;
        case config.Scene.outcomeB4:
            outcomeB4 = new scenes.outcomeB4();
            currentScene = outcomeB4;
            //This is happy ending scene
            //There is no Horror anymore
            bmg.pause();
            bmg.currentTime = 0;
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map