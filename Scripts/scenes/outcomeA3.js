var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeA3 = (function (_super) {
        __extends(outcomeA3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeA3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeA3.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeA3.png");
            this._mainBG.x = 0;
            this._mainBG.y = 100;
            this.addChild(this._mainBG);
            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("Leon points at the security camera and warns the men"
                + "\nAll their acts are being recored."
                + "\nThey get pissed off and walk away."
                + "\nThe girl and you are safe now...", "20px Arial", "#e6e6e6");
            //this._GameLabel.regX = this._GameLabel.getMeasuredWidth() * 0.5;
            //this._GameLabel.regY = this._GameLabel.getMeasuredHeight() * 0.5;
            this._GameLabel.x = 100;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);
            // add the BACK button to the  scene
            this._backButton = new objects.Button("BackButton", 97, 560);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add the NEXT button to the  scene
            this._nextButton = new objects.Button("NextButton", 950, 560);
            this.addChild(this._nextButton);
            // Next Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Scene updates here
        outcomeA3.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeA3.prototype._backButtonClick = function (event) {
            scene = config.Scene.decisionA;
            changeScene();
        };
        outcomeA3.prototype._nextButtonClick = function (event) {
            scene = config.Scene.decisionB;
            changeScene();
        };
        return outcomeA3;
    })(objects.Scene);
    scenes.outcomeA3 = outcomeA3;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeA3.js.map