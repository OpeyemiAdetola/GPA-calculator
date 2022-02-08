//grades is an array of grade letters
function computeGPA(grades) {
    let sum = 0;
    //summing the numeric grade

    //convert grade to number based pn table and add to sum variable
    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i];//one item from the array

        if (grades == ("A")) {
            sum += 100;
        }


        else if (grades == ("B")) {

            sum += 80;
        }
        else if (grades == ("C")) {
            sum += 70;
        }
    }



    let gpa = sum / grades.length //gpa will be the average of all the grades

    //convert gpa to letter grade

    let result = "";

    if (gpa === 100) {
        result = "A";
    } else if (gpa = 80 && gpa <= 99)
        result = "B";

    else {
        result = "C";
    }

    //print result
    console.log("Your GPA is ", result);
    //to print on webpage
    document.write("your GPA is " +  result);
}

let myGrades = ['A', 'B', 'A', 'C']
computeGPA(myGrades);