//Functions*******************************
function letterGrade(score) {
    if (score >= 60 && score <= 69) return "D";
    else if (score >= 70 && score <= 79) return "C";
    else if (score >= 80 && score <= 89) return "B";
    else if (score >= 90 && score <= 99) return "A";
    else if (score > 100) return null;
    else return "F";
}

//Main**************************************
let Score = 89;
Grade = letterGrade(Score);
console.log(Grade)