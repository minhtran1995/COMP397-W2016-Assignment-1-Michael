var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeA1 = (function (_super) {
        __extends(outcomeA1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeA1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeA1.prototype.start = function () {
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
            this._backButton = new objects.Button("playAgain", 97, 560);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Scene updates here
        outcomeA1.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeA1.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return outcomeA1;
    })(objects.Scene);
    scenes.outcomeA1 = outcomeA1;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeA1.js.map