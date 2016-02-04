module scenes {
    export class outcomeC2Ending extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _nextButton: objects.Button;

        private _mainBG: createjs.Bitmap;
        private _outcomeC2EndingSound: HTMLAudioElement;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/endingC2.jpg");
            this._mainBG.x = 100;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("Where else could they hide on the train..."                
                + "\nThe psychopath murders both Leon and the girl...."
                + "\n...He hangs the bodies upside down - presenting his achievement...", "20px Arial", "#e6e6e6");

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
            this._outcomeC2EndingSound = new Audio('../../Assets/Sound/B3Sound.mp3');
            this._outcomeC2EndingSound.loop = true;
            this._outcomeC2EndingSound.volume = 0.7;
            this._outcomeC2EndingSound.play();

        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            this._outcomeC2EndingSound.pause();
            this._outcomeC2EndingSound.currentTime = 0;;
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}