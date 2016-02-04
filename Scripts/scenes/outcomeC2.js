var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeC2 = (function (_super) {
        __extends(outcomeC2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeC2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeC2.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeC2.jpg");
            this._mainBG.x = 0;
            this._mainBG.y = 100;
            this.addChild(this._mainBG);
            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("The psychopath chase Leon and the girl...."
                + "\nThe train doesn't stop...the operator does not seem to hear any sounds from outside"
                + "\n..........", "20px Arial", "#e6e6e6");
            this._GameLabel.x = 100;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);
            // add the BACK button to the  scene
            this._nextButton = new objects.Button("NextButton", 900, 560);
            this.addChild(this._nextButton);
            // BACK Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
            this._outcomeC2Sound = new Audio('../../Assets/Sound/C1Sound.mp3');
            this._outcomeC2Sound.volume = 0.7;
            this._outcomeC2Sound.play();
        };
        // Scene updates here
        outcomeC2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeC2.prototype._nextButtonClick = function (event) {
            this._outcomeC2Sound.pause();
            this._outcomeC2Sound.currentTime = 0;
            ;
            scene = config.Scene.outcomeC2Ending;
            changeScene();
        };
        return outcomeC2;
    })(objects.Scene);
    scenes.outcomeC2 = outcomeC2;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeC2.js.map