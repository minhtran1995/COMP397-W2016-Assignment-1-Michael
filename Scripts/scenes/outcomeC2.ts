module scenes {
    export class outcomeC2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _nextButton: objects.Button;
       
        private _mainBG: createjs.Bitmap;
        private _outcomeC2Sound: HTMLAudioElement;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeC2.jpg");
            this._mainBG.x = 0;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("The psychopath chase Leon and the girl...."
                +"\nThe train doesn't stop...the operator does not seem to hear any sounds from outside"
                +"\n..........", "20px Arial", "#e6e6e6");
            
            this._GameLabel.x = 100;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);

            // add the BACK button to the  scene
            this._nextButton = new objects.Button(
                "NextButton",
                900,
                560);
            this.addChild(this._nextButton);
           
            // BACK Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);           
           

            // add this scene to the global stage container
            stage.addChild(this);
            this._outcomeC2Sound = new Audio('../../Assets/Sound/C1Sound.mp3');
            
            this._outcomeC2Sound.volume= 0.7;
            this._outcomeC2Sound.play();

        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            this._outcomeC2Sound.pause();
            this._outcomeC2Sound.currentTime = 0;;
            scene = config.Scene.outcomeC2Ending;
            changeScene();
        }
    }
}