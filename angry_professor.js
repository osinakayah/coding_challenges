/*
A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, he decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (arrivalTime <= 0) to arrived late (arrivalTime > 0).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.


Function Description

Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

angryProfessor has the following parameter(s):

k: the threshold number of students
a: an array of integers representing arrival times
 */


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