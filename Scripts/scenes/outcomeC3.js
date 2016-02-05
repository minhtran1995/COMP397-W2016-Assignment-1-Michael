var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeC3 = (function (_super) {
        __extends(outcomeC3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeC3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeC3.prototype.start = function () {
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
            this._nextButton = new objects.Button("playAgain", 97, 560);
            this.addChild(this._nextButton);
            // BACK Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
            this._outcomeC3EndingSound = new Audio('../../Assets/Sound/C3Sound.mp3');
            this._outcomeC3EndingSound.loop = false;
            this._outcomeC3EndingSound.volume = 0.7;
            this._outcomeC3EndingSound.play();
        };
        // Scene updates here
        outcomeC3.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeC3.prototype._nextButtonClick = function (event) {
            this._outcomeC3EndingSound.pause();
            this._outcomeC3EndingSound.currentTime = 0;
            ;
            scene = config.Scene.MENU;
            changeScene();
        };
        return outcomeC3;
    })(objects.Scene);
    scenes.outcomeC3 = outcomeC3;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeC3.js.map