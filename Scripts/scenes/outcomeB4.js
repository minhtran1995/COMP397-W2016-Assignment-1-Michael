var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeB4 = (function (_super) {
        __extends(outcomeB4, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeB4() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeB4.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeB4.jpg");
            this._mainBG.x = 0;
            this._mainBG.y = 100;
            this.addChild(this._mainBG);
            // add the PLAY label to the scene
            this._GameLabel = new createjs.Text("Leon convinces the girl to take the cab with him...."
                + "\n...He doesn't feel safe when let the girl be alone on the way home"
                + "\nHe calls the cab..."
                + "\nBoth of Them are alive - Good Ending ~~~", "20px Arial", "#e6e6e6");
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
            this._outcomeB4Sound = new Audio('../../Assets/Sound/B4Sound.mp3');
            this._outcomeB4Sound.loop = true;
            this._outcomeB4Sound.volume = 0.7;
            this._outcomeB4Sound.play();
        };
        // Scene updates here
        outcomeB4.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeB4.prototype._backButtonClick = function (event) {
            this._outcomeB4Sound.pause();
            this._outcomeB4Sound.currentTime = 0;
            ;
            scene = config.Scene.MENU;
            changeScene();
        };
        return outcomeB4;
    })(objects.Scene);
    scenes.outcomeB4 = outcomeB4;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeB4.js.map