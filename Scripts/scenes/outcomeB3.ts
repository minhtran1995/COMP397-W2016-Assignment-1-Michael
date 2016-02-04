module scenes {
    export class outcomeB3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _backButton: objects.Button;
       
        private _mainBG: createjs.Bitmap;
        private _outcomeB3Sound: HTMLAudioElement;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeB3.png");
            this._mainBG.x = 0;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the label to the scene
            this._GameLabel = new createjs.Text("...Leon decides to call the cab, without realizing the girl got onbroad "
                + "\n...Tomorrow morning, her body is found near the subway track"                
                + "\nIt seems like he is the last person who saw her alive..."
                + "\nSuddently, Leon get a phone call from an The Police...Seem like He got in trouble", "20px Arial", "#e6e6e6");
            
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
            
            // BMG 
            this._outcomeB3Sound = new Audio('../../Assets/Sound/B3Sound.mp3');
            this._outcomeB3Sound.loop = true;
            this._outcomeB3Sound.volume= 0.7;
            this._outcomeB3Sound.play();

        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            this._outcomeB3Sound.pause();
            this._outcomeB3Sound.currentTime = 0;;
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}