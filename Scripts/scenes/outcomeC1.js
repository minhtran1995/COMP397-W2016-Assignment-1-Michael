var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeC1 = (function (_super) {
        __extends(outcomeC1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeC1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeC1.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeC1.jpg");
            this._mainBG.x = 0;
            this._mainBG.y = 100;
            this.addChild(this._mainBG);
            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("The psychopath swings his hammer and shoutes...."
                + "\nLeon dodges that attack, he grabs the hammer from the psychopath..."
                + "\nHe uses all his streng to swing the hammer to the psychopath's face..."
                + "\nThe psychopath die instantly !", "20px Arial", "#e6e6e6");
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
            this._outcomeC1Sound = new Audio('../../Assets/Sound/C1Sound.mp3');
            this._outcomeC1Sound.volume = 0.7;
            this._outcomeC1Sound.play();
        };
        // Scene updates here
        outcomeC1.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeC1.prototype._nextButtonClick = function (event) {
            scene = config.Scene.outcomeC1Ending;
            changeScene();
        };
        return outcomeC1;
    })(objects.Scene);
    scenes.outcomeC1 = outcomeC1;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeC1.js.map