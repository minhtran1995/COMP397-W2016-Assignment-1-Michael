var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeC2Ending = (function (_super) {
        __extends(outcomeC2Ending, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeC2Ending() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeC2Ending.prototype.start = function () {
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
            this._nextButton = new objects.Button("playAgain", 97, 560);
            this.addChild(this._nextButton);
            // BACK Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
            this._outcomeC2EndingSound = new Audio('../../Assets/Sound/B3Sound.mp3');
            this._outcomeC2EndingSound.loop = true;
            this._outcomeC2EndingSound.volume = 0.7;
            this._outcomeC2EndingSound.play();
        };
        // Scene updates here
        outcomeC2Ending.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeC2Ending.prototype._nextButtonClick = function (event) {
            this._outcomeC2EndingSound.pause();
            this._outcomeC2EndingSound.currentTime = 0;
            ;
            scene = config.Scene.MENU;
            changeScene();
        };
        return outcomeC2Ending;
    })(objects.Scene);
    scenes.outcomeC2Ending = outcomeC2Ending;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeC2Ending.js.map