/* Without Index Signatures */
let scores = {
    Aman: 80
};
console.log(scores); // {Aman: 80}
let scoresNew = {
    subjectCode: 1,
    semester: 2, // optional
    Alice: 97,
    Bob: 88,
};
console.log(scoresNew); // {subjectCode: 1, Alice: 97, Bob: 88}
scoresNew.Benjamin = 45;
scoresNew["Jeevan-Shetty"] = 88;
console.log(scoresNew);
export {};
/*
    {
        "Alice": 97,
        "Bob": 88,
        "Benjamin": 77,
        "Jeevan-Shetty": 88
    }
*/
//# sourceMappingURL=main.js.map