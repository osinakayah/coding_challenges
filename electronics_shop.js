function getMoneySpent(keyboards, drives, b) {

    let max = -1;
    keyboards.map(function (t) {
        drives.map(function (t2) {
            if (t + t2 >=max && t + t2 <= b) max = t + t2;
        })
    })

    return max;
}