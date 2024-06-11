//enums in typescript
//enums is a special "class" that represent a group of constant
//(unchangable variable)
//types of enums
//1 numeric enums    2 string enum   3 hetrogenous enums(both number and string)
//syntax
//numRole(value)
//example of office enums
var office;
(function (office) {
    office[office["admin"] = 0] = "admin";
    office[office["staff"] = 1] = "staff";
    office[office["maintaince"] = 2] = "maintaince";
    office[office["security"] = 3] = "security";
    office[office["employees"] = 4] = "employees";
    office[office["HR"] = 5] = "HR";
})(office || (office = {}));
console.log(office);
//example of student enums
var students;
(function (students) {
    students[students["hooriya"] = 0] = "hooriya";
    students[students["alishba"] = 1] = "alishba";
    students[students["kiran"] = 2] = "kiran";
    students[students["huzaifa"] = 3] = "huzaifa";
    students[students["maheen"] = 4] = "maheen";
    students[students["waniya"] = 5] = "waniya";
})(students || (students = {}));
var student = students["kiran"]; //get number in enum (numeic enum)
console.log(student);
//enum as function 
var subject;
(function (subject) {
    subject[subject["english"] = 98] = "english";
    subject[subject["urdu"] = 70] = "urdu";
    subject[subject["math"] = 90] = "math";
    subject["islamiyat"] = "B grade";
    subject[subject["sst"] = 60] = "sst";
    subject[subject["science"] = 75] = "science";
    subject["accounting"] = "A grade";
})(subject || (subject = {}));
//hetrogenious enum
function subcall(p1, p2) {
    return p1 + p2;
}
console.log(subcall(subject.accounting, subject.english));
console.log(subcall(subject.islamiyat, subject.math));
//example of color enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
console.log(Color.Red); //output 0
console.log(Color["Green"]); // output 2
console.log(Color[1]); //output Blue
//example of enums with number
var COLOR;
(function (COLOR) {
    COLOR[COLOR["White"] = 1] = "White";
    COLOR[COLOR["Black"] = 2] = "Black";
    COLOR[COLOR["Yellow"] = 3] = "Yellow";
})(COLOR || (COLOR = {}));
console.log(COLOR.White); //output 1
console.log(COLOR["Yellow"]); //output 3
//example of string enums
(function (COLOR) {
    COLOR["Red"] = "Red";
    COLOR["Blue"] = "Blue";
    COLOR["Green"] = "green";
})(COLOR || (COLOR = {}));
console.log(COLOR.Green); //output green
console.log(COLOR["Red"]); //output red
//enum used as a type structure
var Currentcolor = COLOR.Blue;
console.log(Currentcolor); //output is blue
//const enum
//const enum is the superset of enum
//In TypeScript, const enums are a special kind of enum which is used when the enum values 
//are constant and known at compile time. They offer a way to improve performance by eliminating 
//the need to generate additional code for the enum at runtime. When you use 
// enum, the TypeScript compiler inlines the values directly into the generated JavaScript code.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function move(direction) {
    switch (direction) {
        case Direction.Up:
            console.log("moving up");
            break;
        case Direction.Down:
            console.log("moving down");
            break;
        case Direction.Right:
            console.log("moving right");
            break;
        case Direction.Left:
            console.log("moving left");
            break;
    }
}
move(Direction.Up); //moving up
move(1); //moving down
move(0); //moving up
move(2); //moving right
move(3); //moving left
