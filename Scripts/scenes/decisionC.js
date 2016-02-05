var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var decisionC = (function (_super) {
        __extends(decisionC, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function decisionC() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        decisionC.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/decisionC.jpg");
            this._mainBG.x = 0;
            this._mainBG.y = 100;
            this.addChild(this._mainBG);
            // add the label to the scene
            this._GameLabel = new createjs.Text("Leon stands still..., he couldn't believe in his eyes"
                + "\nA quick thought comes to his mind...", "20px Arial", "#e6e6e6");
            this._GameLabel.x = 500;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);
            // add the BACK button to the  scene
            this._backButton = new objects.Button("BackButton", 97, 560);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add the decision button to the  scene
            this._b1Btn = new objects.Button("C1", 710, 560);
            this.addChild(this._b1Btn);
            // decision Button event listener
            this._b1Btn.on("click", this._b1BtnClick, this);
            // add the decision button to the  scene
            this._b2Btn = new objects.Button("C2", 710 + 162 + 20, 560);
            this.addChild(this._b2Btn);
            // decision Button event listener
            this._b2Btn.on("click", this._b2BtnClick, this);
            // add the decision button to the  scene
            this._b3Btn = new objects.Button("C3", 710 - 162 - 30, 560);
            this.addChild(this._b3Btn);
            // decision Button event listener
            this._b3Btn.on("click", this._b3BtnClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Scene updates here
        decisionC.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        decisionC.prototype._backButtonClick = function (event) {
            scene = config.Scene.outcomeB1;
            changeScene();
        };
        //switch to correspoding outcome
        decisionC.prototype._b1BtnClick = function (event) {
            scene = config.Scene.outcomeC1;
            changeScene();
        };
        decisionC.prototype._b2BtnClick = function (event) {
            scene = config.Scene.outcomeC2;
            changeScene();
        };
        decisionC.prototype._b3BtnClick = function (event) {
            scene = config.Scene.outcomeC3;
            changeScene();
        };
        return decisionC;
    })(objects.Scene);
    scenes.decisionC = decisionC;
})(scenes || (scenes = {}));
//# sourceMappingURL=decisionC.js.map