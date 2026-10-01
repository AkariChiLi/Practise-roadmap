function getLetterGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function hasPassed(score) {
    if (score >= 60) {
        return true;
    } else {
        return false;
    }
}

function getFeedback(grade) {
    if (grade === 'A') {
        return 'Excellent performance!';
    } else if (grade === 'B'||grade === 'C'|| grade === 'D') {
        return 'You passed.';
    } else {
        return 'Keep practicing.';
    }
}

function createGradeReport(name, score){
    let grade = getLetterGrade(score);
    let feedback = getFeedback(grade);
    let passed = hasPassed(score);
    return{
        name,
        score,
        grade,
        feedback,
        passed
    }
}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));