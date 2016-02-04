module scenes {
    export class outcomeA3 extends objects.Scene {
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
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeA3.png");
            this._mainBG.x = 0;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the label to the scene
            this._GameLabel = new createjs.Text("Leon points at the security camera and warns the men"
                + "\nAll their acts are being recored. The camera footages will be the evidence."
                + "\nThey get pissed off and walk away."
                + "\nThe girl and you are safe now...", "20px Arial", "#e6e6e6");

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
            scene = config.Scene.decisionA;
            changeScene();
        }

        // Next Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.decisionB;
            changeScene();
        }
    }
}