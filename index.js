var age = 151;

if(age <=12 && age >=0) {
    console.log("You are a Child");

}else if (age <= 19 && age >=13) {
    console.log("You are a Teenager");
    
}else if (age <= 30 && age >=20) {
    console.log("You are a Young Adult");

}else if (age <= 60 && age >=31) {
    console.log("You are an Adult");

}else if (age <= 150 && age >=61) {
    console.log("You are an Old Person");
} else{
    console.log("You are not in this World!")
}

// Switch Statement

function shaon (isStudent) {
    switch (isStudent) {
        case true:
            return "Ticket Cost $5";
        case false:
             return "Ticket Cost $10";
    }
    return "Invalid Human";
}

console.log(shaon(true));





var day = 1;

switch(day){
    case 1 : console.log("Monday"); break;
    case 1 : console.log("Tuesday"); break;
    case 1 : console.log("Wednesday"); break;
    case 1 : console.log("Thursday"); break;
    case 1 : console.log("Friday"); break;
    case 1 : console.log("Saturday"); break;
    case 1 : console.log("Sunday"); break;   
}




