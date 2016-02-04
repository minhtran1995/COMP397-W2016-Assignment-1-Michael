module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static TUTORIAL: number = 1;
        public static gameScene1: number = 2;
        public static decisionA: number = 3;
        public static outcomeA1: number = 4;
        public static outcomeA2: number = 5;
        public static outcomeA3: number = 6;
        public static decisionB: number = 7;
        public static outcomeB1: number = 8;
        public static outcomeB2: number = 9;
        public static outcomeB3: number = 10;
        public static outcomeB4: number = 11;
        public static decisionC: number = 12;
        public static outcomeC1: number = 13;
        public static outcomeC2: number = 14;
        public static outcomeC1Ending: number = 15;
        public static outcomeC2Ending: number = 16;
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