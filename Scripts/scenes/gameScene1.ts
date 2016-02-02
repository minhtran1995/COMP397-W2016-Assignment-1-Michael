// OVER SCENE
module scenes {
    export class gameScene1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _backButton: objects.Button;
        private _nextButton:objects.Button;
        private _mainBG: createjs.Bitmap;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/GameScene1.jpg");
            this._mainBG.x = config.Screen.WIDTH - 850;
            this._mainBG.y = config.Screen.HEIGHT - 564;
            this.addChild(this._mainBG);

            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("A photographer, Leon is obsessed with dark subject matter"
                + "\nHe's loitering at night time, trying to capture images of the dark Urban Life", "20px Arial", "#e6e6e6");
            //this._GameLabel.regX = this._GameLabel.getMeasuredWidth() * 0.5;
            //this._GameLabel.regY = this._GameLabel.getMeasuredHeight() * 0.5;
            this._GameLabel.x = 100;
            this._GameLabel.y = 100;
            this.addChild(this._GameLabel);

            // add the BACK button to the OVER scene
            this._backButton = new objects.Button(
                "BackButton",
                800,
                560);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);


            // add the NEXT button to the OVER scene
            this._nextButton = new objects.Button(
                "NextButton",
                950,
                560)
            this.addChild(this._nextButton);
           
            // BACK Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.TUTORIAL;
            changeScene();
        }
        
        private _nextButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.decisionA;
            changeScene();
        }
    }
}