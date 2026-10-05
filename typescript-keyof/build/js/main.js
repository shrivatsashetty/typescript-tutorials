const student1 = {
    name: "Dough",
    grade: 3,
    scores: [91, 98],
};
// printing values of all properties of student1 object
Object.keys(student1) // returns a list of all keys of student1 object
    .map((key) => {
    // console.log(student1[key ]); // throws error
    console.log(student1[key]);
});
function logStudentProperty(student, property) {
    console.log(student[property]);
}
logStudentProperty(student1, "name"); // Dough
logStudentProperty(student1, "grade"); // 3
logStudentProperty(student1, "scores"); // [91, 98]
export {};
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`);
// }
//# sourceMappingURL=main.js.map