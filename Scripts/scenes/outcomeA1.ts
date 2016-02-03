module scenes {
    export class outcomeA1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _GameLabel: createjs.Text;
        private _backButton: objects.Button;
        private _mainBG: createjs.Bitmap;
        private _outcomeA1Sound:HTMLAudioElement;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeA1.jpg");
            this._mainBG.x = 300;
            this._mainBG.y = 100;

            this.addChild(this._mainBG);

            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("Leon Got Stabbed to dead..."
                + "\nThe woman end up getting raped and killed the evil men"
                + "\nTragedy...", "20px Arial", "#e6e6e6");
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


this._outcomeA1Sound = new Audio('../../Assets/Sound/A1Sound.mp3');
            this._outcomeA1Sound.loop = true;
            this._outcomeA1Sound.play();
            // add this scene to the global stage container
            stage.addChild(this);
            
            
        }

        // Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            
            this._outcomeA1Sound.pause();
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}