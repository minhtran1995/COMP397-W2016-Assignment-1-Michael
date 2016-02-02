module scenes {
    export class decisionA extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _backButton: objects.Button;
        private _nextButton: objects.Button;
        private _a3Btn: objects.Button;
        private _a1Btn: objects.Button;
        private _a2Btn: objects.Button;
        private _mainBG: createjs.Bitmap;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/decisionA.png");
            this._mainBG.x = 0;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("Leon saw a group of man and decided to follow them to the subway"
                + "\nLater, he finds out a woman is being harrashed by the group"
                + "\nHe doesn't know what to do...", "20px Arial", "#e6e6e6");
            //this._GameLabel.regX = this._GameLabel.getMeasuredWidth() * 0.5;
            //this._GameLabel.regY = this._GameLabel.getMeasuredHeight() * 0.5;
            this._GameLabel.x = 100;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);

            // add the BACK button to the  scene
            this._backButton = new objects.Button(
                "BackButton",
                97,
                560);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);


            // add the decision button to the scene
            this._a3Btn = new objects.Button(
                "A3",
                config.Screen.WIDTH - 150,
                560)
            this.addChild(this._a3Btn);
           
            // BACK Button event listener
            this._a3Btn.on("click", this._a3ButtonClick, this);
            
              // add the decision button to the scene
            this._a2Btn = new objects.Button(
                "A2",
                config.Screen.WIDTH - this._a3Btn.getWidth()-300,
                560)
            this.addChild(this._a2Btn);
           
            // BACK Button event listener
            this._a2Btn.on("click", this._a2ButtonClick, this);
            
              // add the decision button to the scene
            this._a1Btn = new objects.Button(
                "A1",
               config.Screen.WIDTH - this._a3Btn.getWidth()- this._a2Btn.getWidth()-380,
                560)
            this.addChild(this._a1Btn);
           
            // BACK Button event listener
            this._a1Btn.on("click", this._a1ButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.gameScene1;
            changeScene();
        }

        private _a3ButtonClick(event: createjs.MouseEvent) {
            // Switch to the a  Scene
            scene = config.Scene.outcomeA3;
            changeScene();
        }
        
        private _a1ButtonClick(event: createjs.MouseEvent) {
            // Switch to the a  Scene
            scene = config.Scene.outcomeA1;
            changeScene();
        }
        
        private _a2ButtonClick(event: createjs.MouseEvent) {
            // Switch to the a  Scene
            scene = config.Scene.outcomeA2;
            changeScene();
        }
    }
}