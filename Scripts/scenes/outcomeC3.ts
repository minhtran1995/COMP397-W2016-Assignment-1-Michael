module scenes {
    export class outcomeC3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _nextButton: objects.Button;

        private _mainBG: createjs.Bitmap;
        private _outcomeC3EndingSound: HTMLAudioElement;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeC3.png");
            this._mainBG.x = 0;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the label to the scene
            this._GameLabel = new createjs.Text("Leon wakes up in a pile of blood..."
                + "\nThe psychopath and the girl are gone...."
                + "\nSeem likes he got hit really hard in his head...He cant remember a thing...", "20px Arial", "#e6e6e6");

            this._GameLabel.x = 100;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);

            // add the BACK button to the  scene
            this._nextButton = new objects.Button(
                "playAgain",
                97,
                560);
            this.addChild(this._nextButton);
           
            // BACK Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);           
           

            // add this scene to the global stage container
            stage.addChild(this);
            this._outcomeC3EndingSound = new Audio('../../Assets/Sound/C3Sound.mp3');
            this._outcomeC3EndingSound.loop = false;
            this._outcomeC3EndingSound.volume = 0.7;
            this._outcomeC3EndingSound.play();

        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            this._outcomeC3EndingSound.pause();
            this._outcomeC3EndingSound.currentTime = 0;;
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}