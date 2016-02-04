// TUTORIAL SCENE
module scenes {
    export class TUTORIAL extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: createjs.Text;
        private _nextButton: objects.Button;
        private _backButton: objects.Button;
        private _mainBG: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add  picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/TutBG.jpg");
            this.addChild(this._mainBG);


            // add the  label to the scene
            this._playLabel = new createjs.Text("This is a simulated game based on the movie The Midnight Meat Train - By Ryûhei Kitamura."
                + "\nYou are responsible for every single move in this game, as it will lead you to different outcomes."
                + "\n\n\nWARNING: Player discretion advised"
                , "20px Arial", "#e6e6e6");
            
            this._playLabel.x = 100;
            this._playLabel.y = 100;
            this.addChild(this._playLabel);

            // add the play button to the PLAY scene
            this._nextButton = new objects.Button(
                "PlayButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._nextButton);
           
            // play Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            // add the BACK button to the PLAY scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // play Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.gameScene1;
            changeScene();
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}