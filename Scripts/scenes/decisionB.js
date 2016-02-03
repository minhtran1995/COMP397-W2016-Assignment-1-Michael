var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var decisionB = (function (_super) {
        __extends(decisionB, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function decisionB() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        decisionB.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/decisionB.jpg");
            this._mainBG.x = 0;
            this._mainBG.y = 100;
            this.addChild(this._mainBG);
            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("The last train finally arrived"
                + "\nThere is nobody onboard... "
                + "\nBUT an unknown man"
                + "\nLeon is feeling concerned...", "20px Arial", "#e6e6e6");
            this._GameLabel.x = 620;
            this._GameLabel.y = 0;
            this.addChild(this._GameLabel);
            // add the BACK button to the  scene
            this._backButton = new objects.Button("BackButton", 97, 560);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add the decision button to the  scene
            this._b1Btn = new objects.Button("B1", 710, 250 + 30);
            this.addChild(this._b1Btn);
            // decision Button event listener
            this._b1Btn.on("click", this._b1BtnClick, this);
            // add the decision button to the  scene
            this._b2Btn = new objects.Button("B2", 710, 250 + 41 + 30);
            this.addChild(this._b2Btn);
            // decision Button event listener
            this._b2Btn.on("click", this._b2BtnClick, this);
            // add the decision button to the  scene
            this._b3Btn = new objects.Button("B3", 710, 250 + 41 * 2 + 30);
            this.addChild(this._b3Btn);
            // decision Button event listener
            this._b3Btn.on("click", this._b3BtnClick, this);
            // add the decision button to the  scene
            this._b4Btn = new objects.Button("B4", 710, 250 + 41 * 3 + 30);
            this.addChild(this._b4Btn);
            // decision Button event listener
            this._b4Btn.on("click", this._b4BtnClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Scene updates here
        decisionB.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        decisionB.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.outcomeA3;
            changeScene();
        };
        decisionB.prototype._b1BtnClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.outcomeB1;
            changeScene();
        };
        decisionB.prototype._b2BtnClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.outcomeB2;
            changeScene();
        };
        decisionB.prototype._b3BtnClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.outcomeB3;
            changeScene();
        };
        decisionB.prototype._b4BtnClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.outcomeB4;
            changeScene();
        };
        return decisionB;
    })(objects.Scene);
    scenes.decisionB = decisionB;
})(scenes || (scenes = {}));
//# sourceMappingURL=decisionB.js.map