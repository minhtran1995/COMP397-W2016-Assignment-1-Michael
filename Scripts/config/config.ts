module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static TUTORIAL: number = 1;
        public static gameScene1: number = 2;
        public static decisionA: number = 3;
        public static outcomeA1: number = 4;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 1024;
        public static HEIGHT: number = 600;
        public static CENTER_X: number = 512;
        public static CENTER_Y: number = 300;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}