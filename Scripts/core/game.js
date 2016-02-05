/// <reference path = "_reference.ts" />
/*
 *******************************************************************************
 * Source file name : game.ts                                                  *
 * Author's name : Duc Minh Tran (300771859)                                   *
 * Last Modified by : Duc Minh Tran (300771859)                                *
 * Last Modified date : Feb 2016                                               *
 * Program description : This web game, by using create js, is kind of         *
 *                     simulation game to survive on the last train. User can  *
 *                     choose options per each page, and user will be          *
 *                     faced different result by their choices.                *
 * Revision History : 1.1                                                      *
 *******************************************************************************
*/
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
var decisionC;
var outcomeC1;
var outcomeC2;
var outcomeC3;
var outcomeC1Ending;
var outcomeC2Ending;
var bmg;
var sound;
function init() {
    //Set up BMG
    bmg = new Audio('../../Assets/Sound/bmg.mp3');
    bmg.loop = true;
    bmg.volume = 0.7;
    bmg.play();
    sound = new Audio('../../Assets/Sound/trainBell.wma');
    sound.loop = true;
    sound.volume = 0.1;
    sound.play();
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
            sound.play();
            break;
        case config.Scene.TUTORIAL:
            // show the Tutorial scene            
            tut = new scenes.TUTORIAL();
            currentScene = tut;
            console.log("Starting Tutorial Scene");
            break;
        case config.Scene.gameScene1:
            // show the game first scene            
            gameScene1 = new scenes.gameScene1();
            currentScene = gameScene1;
            break;
        case config.Scene.decisionA:
            // show the first Decision scene            
            decisionA = new scenes.decisionA();
            currentScene = decisionA;
            break;
        // show different outcome from the first decision
        case config.Scene.outcomeA1:
            outcomeA1 = new scenes.outcomeA1();
            currentScene = outcomeA1;
            break;
        case config.Scene.outcomeA2:
            outcomeA2 = new scenes.outcomeA2();
            currentScene = outcomeA2;
            break;
        case config.Scene.outcomeA3:
            outcomeA3 = new scenes.outcomeA3();
            currentScene = outcomeA3;
            break;
        case config.Scene.decisionB:
            // show the second Decision scene            
            decisionB = new scenes.decisionB();
            currentScene = decisionB;
            break;
        // show different outcome from the second decision
        case config.Scene.outcomeB1:
            outcomeB1 = new scenes.outcomeB1();
            currentScene = outcomeB1;
            break;
        case config.Scene.outcomeB2:
            outcomeB2 = new scenes.outcomeB2();
            currentScene = outcomeB2;
            break;
        case config.Scene.outcomeB3:
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
            sound.pause();
            sound.currentTime = 0;
            break;
        case config.Scene.decisionC:
            // show the third decision scene            
            decisionC = new scenes.decisionC();
            currentScene = decisionC;
            break;
        // show the different outcomes scene from third decision
        case config.Scene.outcomeC1:
            outcomeC1 = new scenes.outcomeC1();
            currentScene = outcomeC1;
            break;
        case config.Scene.outcomeC2:
            outcomeC2 = new scenes.outcomeC2();
            currentScene = outcomeC2;
            break;
        // show ending scene base on user decision 
        case config.Scene.outcomeC1Ending:
            outcomeC1Ending = new scenes.outcomeC1Ending();
            currentScene = outcomeC1Ending;
            break;
        case config.Scene.outcomeC2Ending:
            outcomeC2Ending = new scenes.outcomeC2Ending();
            currentScene = outcomeC2Ending;
            break;
        case config.Scene.outcomeC3:
            outcomeC3 = new scenes.outcomeC3();
            currentScene = outcomeC3;
            break;
    }
    //get curernt scene code
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map