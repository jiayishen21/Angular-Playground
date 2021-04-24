var a;
var b;
var c;
var d;
var e;
var f;
var ColorRed = 0;
var ColorGreen = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
var message;
message = 'abc';
//let endsWithC = (<string>message).endsWith('c');
//let endsWithD = (message as string).endsWith('d');
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var NewPoint = /** @class */ (function () {
    function NewPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    NewPoint.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y:' + this.y);
    };
    NewPoint.prototype.getDistance = function (another) {
        //...
    };
    return NewPoint;
}());
var point = new NewPoint(2, 3);
point.draw();
