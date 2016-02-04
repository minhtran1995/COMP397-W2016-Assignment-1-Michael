module scenes {
    export class decisionC extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _backButton: objects.Button;
        private _nextButton: objects.Button;

        private _b2Btn: objects.Button;
        private _b1Btn: objects.Button;
        private _mainBG: createjs.Bitmap;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/decisionC.jpg");
            this._mainBG.x = 0;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("Leon stands still..., he couldn't believe in his eyes"
                + "\nA quick thought comes to his mind...", "20px Arial", "#e6e6e6");

            this._GameLabel.x = 500;
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

            // add the decision button to the  scene
            this._b1Btn = new objects.Button(
                "C1",
                710,
                560);
            this.addChild(this._b1Btn);
           
            // decision Button event listener
            this._b1Btn.on("click", this._b1BtnClick, this);



            // add the decision button to the  scene
            this._b2Btn = new objects.Button(
                "C2",
                710+162+20,
                560);
            this.addChild(this._b2Btn);
           
            // decision Button event listener
            this._b2Btn.on("click", this._b2BtnClick, this);
            
           




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
            scene = config.Scene.outcomeB1;
            changeScene();
        }

        private _b1BtnClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.outcomeC1;
            changeScene();
        }

        private _b2BtnClick(event: createjs.MouseEvent) {
            // Switch to the OVER Scene
            scene = config.Scene.outcomeC2;
            changeScene();
        }



    }
}