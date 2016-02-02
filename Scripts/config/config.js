var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.TUTORIAL = 1;
        Scene.gameScene1 = 2;
        Scene.decisionA = 3;
        Scene.outcomeA1 = 4;
        Scene.outcomeA2 = 5;
        Scene.outcomeA3 = 6;
        Scene.decisionB = 7;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 1024;
        Screen.HEIGHT = 600;
        Screen.CENTER_X = 512;
        Screen.CENTER_Y = 300;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map