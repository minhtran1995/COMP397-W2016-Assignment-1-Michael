/// <reference path = "_reference.ts" />

// global variables
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var menu: scenes.Menu;
var tut: scenes.TUTORIAL;
var gameScene1: scenes.gameScene1;
var decisionA: scenes.decisionA;
var outcomeA1: scenes.outcomeA1;

function init(): void {
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

    var bmg = new Audio('../../Assets/Sound/bmg.mp3');
    bmg.loop = true;
    bmg.volume = 0.4;
    bmg.play();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
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
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.TUTORIAL:
            // show the PLAY scene
            stage.removeAllChildren();
            tut = new scenes.TUTORIAL();
            currentScene = tut;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.gameScene1:
            // show the game OVER scene
            stage.removeAllChildren();
            gameScene1 = new scenes.gameScene1();
            currentScene = gameScene1;
            //console.log("Starting OVER Scene");
            break;
        case config.Scene.decisionA:
            // show the game OVER scene
            stage.removeAllChildren();
            decisionA = new scenes.decisionA();
            currentScene = decisionA;
            //console.log("Starting OVER Scene");
            break;
        case config.Scene.outcomeA1:
            // show the game OVER scene
            stage.removeAllChildren();
            outcomeA1 = new scenes.outcomeA1();
            currentScene = outcomeA1;
            var outcomeA1Sound = new Audio('../../Assets/Sound/A1Sound.mp3');
            outcomeA1Sound.play();
            break;
    }

    console.log(currentScene.numChildren);
}