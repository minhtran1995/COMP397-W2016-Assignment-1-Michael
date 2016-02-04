var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeA2 = (function (_super) {
        __extends(outcomeA2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeA2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeA2.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeA2.png");
            this._mainBG.x = 0;
            this._mainBG.y = 50;
            this.addChild(this._mainBG);
            //add bmg to the scene
            this._outcomeA2Sound = new Audio('../../Assets/Sound/A2Sound.mp3');
            this._outcomeA2Sound.play();
            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("Leon ran away for help..."
                + "\nThe woman ends up getting kidnapped and has never been found again."
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
        outcomeA2.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeA2.prototype._backButtonClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return outcomeA2;
    })(objects.Scene);
    scenes.outcomeA2 = outcomeA2;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeA2.js.map