module scenes {
    export class outcomeB2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _backButton: objects.Button;
        private _nextButton: objects.Button;
        private _mainBG: createjs.Bitmap;
        private _outcomeB2Sound: HTMLAudioElement;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeB2.jpg");
            this._mainBG.x = 0;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("...Leon hears an annoying sound... It sound like bone-cracking"
                + "\n...He walks to the car window... The unknown man is hitting the poor girl with his hammer"
                + "\nThere is no way Leon can get to her...he witnesses that horrible moment"
                + "\nHe will never forget those images till the end of his life !", "20px Arial", "#e6e6e6");
            //this._GameLabel.regX = this._GameLabel.getMeasuredWidth() * 0.5;
            //this._GameLabel.regY = this._GameLabel.getMeasuredHeight() * 0.5;
            this._GameLabel.x = 100;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);

            // add the BACK button to the  scene
            this._backButton = new objects.Button(
                "playAgain",
                97,
                560);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);           
           

            // add this scene to the global stage container
            stage.addChild(this);
            this._outcomeB2Sound = new Audio('../../Assets/Sound/B2Sound.mp3');
            this._outcomeB2Sound.loop = true;
            this._outcomeB2Sound.play();

        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            this._outcomeB2Sound.pause();
            this._outcomeB2Sound.currentTime = 0;;
            scene = config.Scene.MENU;
            changeScene();
        }

        private _nextButtonClick(event: createjs.MouseEvent) {
            scene = config.Scene.decisionB;
            changeScene();
        }
    }
}