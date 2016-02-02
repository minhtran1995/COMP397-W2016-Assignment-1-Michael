var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// OVER SCENE
var scenes;
(function (scenes) {
    var Over = (function (_super) {
        __extends(Over, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Over() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Over.prototype.start = function () {
            // add the PLAY label to the scene
            this._overLabel = new createjs.Text("Over Scene", "60px Consolas", "#000000");
            this._overLabel.regX = this._overLabel.getMeasuredWidth() * 0.5;
            this._overLabel.regY = this._overLabel.getMeasuredHeight() * 0.5;
            this._overLabel.x = config.Screen.CENTER_X;
            this._overLabel.y = config.Screen.CENTER_Y;
            this.addChild(this._overLabel);
            // add the BACK button to the OVER scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 60);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Over.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        Over.prototype._backButtonClick = function (event) {
            // Switch to the OVER Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return Over;
    })(objects.Scene);
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map