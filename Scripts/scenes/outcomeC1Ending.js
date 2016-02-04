var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeC1Ending = (function (_super) {
        __extends(outcomeC1Ending, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeC1Ending() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeC1Ending.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/EndingC1.jpg");
            this._mainBG.x = 300;
            this._mainBG.y = 100;
            this.addChild(this._mainBG);
            // add the label to the scene
            this._GameLabel = new createjs.Text("Leon later.."
                + "\nGot arrested by the police !"
                + "\nHe was sentences with First-degree murder"
                + "\nPeople say he turns psycho later in jail....", "20px Arial", "#e6e6e6");
            this._GameLabel.x = 100;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);
            // add the BACK button to the  scene
            this._nextButton = new objects.Button("playAgain", 97, 560);
            this.addChild(this._nextButton);
            // BACK Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
            //BMG
            this._outcomeC1EndingSound = new Audio('../../Assets/Sound/B3Sound.mp3');
            this._outcomeC1EndingSound.loop = true;
            this._outcomeC1EndingSound.volume = 0.7;
            this._outcomeC1EndingSound.play();
        };
        // Scene updates here
        outcomeC1Ending.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeC1Ending.prototype._nextButtonClick = function (event) {
            // stop bmg before go back to menu
            this._outcomeC1EndingSound.pause();
            this._outcomeC1EndingSound.currentTime = 0;
            ;
            scene = config.Scene.MENU;
            changeScene();
        };
        return outcomeC1Ending;
    })(objects.Scene);
    scenes.outcomeC1Ending = outcomeC1Ending;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeC1Ending.js.map