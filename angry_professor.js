function angryProfessor(k, a) {
    let numberOfStudentThatCameEarly = 0;
    for (let q = 0; q < a.length; q ++) {
        if (a[q] < 1) {
            numberOfStudentThatCameEarly++;
        }
    }
    console.log(numberOfStudentThatCameEarly)
    return numberOfStudentThatCameEarly >= k ? "NO" : "YES"
}