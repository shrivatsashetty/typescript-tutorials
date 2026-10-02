
/* Without Index Signatures */

let scores =  {
    Aman: 80
}

console.log(scores); // {Aman: 80}

// scores.Nihal = 78; // throws error


/* With Index Signatures */

type StudentScores = {
    subjectCode: number, // this property will be required
    semester?: number, // optional property
    [studentName: string]: number, // dynamic property, should follow given signature
}

let scoresNew: StudentScores = {
    subjectCode: 1,
    semester: 2, // optional
    Alice: 97,
    Bob: 88,
}

console.log(scoresNew); // {subjectCode: 1, Alice: 97, Bob: 88}


scoresNew.Benjamin = 45;
scoresNew["Jeevan-Shetty"] = 88; 

console.log(scoresNew);
/* 
    {
        "Alice": 97,
        "Bob": 88,
        "Benjamin": 77,
        "Jeevan-Shetty": 88
    }
*/




