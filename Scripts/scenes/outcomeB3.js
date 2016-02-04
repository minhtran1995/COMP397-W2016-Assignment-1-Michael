var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var outcomeB3 = (function (_super) {
        __extends(outcomeB3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function outcomeB3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        outcomeB3.prototype.start = function () {
            //Add background picture
            this._mainBG = new createjs.Bitmap("../../Assets/images/outcomeB3.png");
            this._mainBG.x = 0;
            this._mainBG.y = 100;
            this.addChild(this._mainBG);
            // add the label to the scene
            this._GameLabel = new createjs.Text("...Leon decides to call the cab, without realizing the girl got onbroad "
                + "\n...Tomorrow morning, her body is found near the subway track"
                + "\nIt seems like he is the last person who saw her alive..."
                + "\nSuddently, Leon get a phone call from an The Police...Seem like He got in trouble", "20px Arial", "#e6e6e6");
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
            // BMG 
            this._outcomeB3Sound = new Audio('../../Assets/Sound/B3Sound.mp3');
            this._outcomeB3Sound.loop = true;
            this._outcomeB3Sound.volume = 0.7;
            this._outcomeB3Sound.play();
        };
        // Scene updates here
        outcomeB3.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // BACK Button click event handler
        outcomeB3.prototype._backButtonClick = function (event) {
            this._outcomeB3Sound.pause();
            this._outcomeB3Sound.currentTime = 0;
            ;
            scene = config.Scene.MENU;
            changeScene();
        };
        return outcomeB3;
    })(objects.Scene);
    scenes.outcomeB3 = outcomeB3;
})(scenes || (scenes = {}));
//# sourceMappingURL=outcomeB3.js.map