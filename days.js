var d=new Date("2002-11-24")
console.log(d.getDay())

switch(d.getDay()){
    case 0:console.log("Sunday");
        break;
    case 1:console.log("Monday");
        break;
    case 2:console.log("Tuesday");
        break;
    case 3:console.log("Wednesday");
        break;
    case 4:console.log("Thursday");
        break;
    case 5:console.log("Friday");
        break;
    case 6:console.log("Saturday");
        break;
    default:console.log("Invalid exp")
        break;
}