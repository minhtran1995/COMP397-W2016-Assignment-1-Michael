module scenes {
    export class outcomeB1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _backButton: objects.Button;
        private _nextButton: objects.Button;
        private _mainBG: createjs.Bitmap;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeB1.jpg");
            this._mainBG.x = 0;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("The unknown man slowly pull out his bloody hammer...."
                + "\n...He walks toward both of you..."
                + "\nThe girl starts screaming...", "20px Arial", "#e6e6e6");
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
            
            // add the NEXT button to the  scene
            this._nextButton = new objects.Button(
                "NextButton",
                950,
                560);
            this.addChild(this._nextButton);
           
            // Next Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);


        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.decisionB;
            changeScene();
        }

        private _nextButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.decisionB;
            changeScene();
        }
    }
}