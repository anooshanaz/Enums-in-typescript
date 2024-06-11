//enums in typescript
//enums is a special "class" that represent a group of constant
//(unchangable variable)
//types of enums
//1 numeric enums    2 string enum   3 hetrogenous enums(both number and string)
//syntax
//numRole(value)
//example of office enums
enum office {
    admin,staff,maintaince, security,employees,HR
}
console.log(office);
//example of student enums
enum students{
    hooriya,alishba,kiran,huzaifa=3,maheen,waniya
}
let student:students=students["kiran"] //get number in enum (numeic enum)
console.log(student) 
//enum as function 
enum subject{
    english=98,urdu=70,math=90,islamiyat="B grade",sst=60,science=75,accounting="A grade"
}
//hetrogenious enum
function subcall(p1:string,p2:number) {
    return p1 + p2
}
console.log(subcall(subject.accounting,subject.english))
console.log(subcall(subject.islamiyat,subject.math))
//example of color enum
enum Color {
    Red,
    Blue,
    Green
}
console.log(Color.Red)//output 0
console.log(Color["Green"])// output 2
console.log(Color[1])//output Blue
//example of enums with number
enum COLOR {
    White = 1,
    Black,
    Yellow
}
console.log(COLOR.White)//output 1
console.log(COLOR["Yellow"])//output 3
//example of string enums
enum COLOR{
    Red="Red",
    Blue = "Blue",
    Green = "green"
}
console.log(COLOR.Green)//output green
console.log(COLOR["Red"])//output red
//enum used as a type structure
let Currentcolor:COLOR = COLOR.Blue
console.log(Currentcolor) //output is blue
//const enum
//const enum is the superset of enum
//In TypeScript, const enums are a special kind of enum which is used when the enum values 
//are constant and known at compile time. They offer a way to improve performance by eliminating 
//the need to generate additional code for the enum at runtime. When you use 
// enum, the TypeScript compiler inlines the values directly into the generated JavaScript code.
enum Direction{
    Up,
    Down,
    Left,
    Right
}
function move(direction:Direction){
    switch(direction){
        case  Direction.Up:
        console.log("moving up")
        break;
        case  Direction.Down:
        console.log("moving down")
        break;
        case Direction.Right:
        console.log("moving right")
        break;
        case Direction.Left:
        console.log("moving left")
        break;
    }
}
move(Direction.Up)//moving up
move(1)//moving down
move(0)//moving up
move(2)//moving right
move(3)//moving left

