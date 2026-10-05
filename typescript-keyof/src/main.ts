type Student = {
    // [property: string]: string | number | number[] | undefined
    name: string;
    grade: number;
    scores?: number[];
};

const student1: Student = {
    name: "Dough",
    grade: 3,
    scores: [91, 98],
};

// printing values of all properties of student1 object
Object.keys(student1) // returns a list of all keys of student1 object
    .map((key) => {
        // console.log(student1[key ]); // throws error
        console.log(student1[key as keyof Student]);
    }
);

/* 
    Dough
    3
    [91, 98]
*/

// Equivalent to: type StudentKey = "name" | "grade" | "scores"
type StudentKey = keyof Student;

function logStudentProperty(student: Student, property: StudentKey): void {
    console.log(student[property]);
}

logStudentProperty(student1, "name"); // Dough
logStudentProperty(student1, "grade"); // 3
logStudentProperty(student1, "scores"); // [91, 98]

// for (const key in student) {
//     console.log(`${key}: ${student[key]}`);
// }
