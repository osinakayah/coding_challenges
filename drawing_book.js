function pageCount(n, p) {

    let bookPages = [];

    for (let q = 0; q <= n; q++) {
        bookPages.push(q);
    }


    let bookHalf = n / 2;
    let numberOfPagesToCount = 0;
    if (p > bookHalf) {
        // Start from the end
        if (bookPages.length % 2 == 0) {
            for (let i = n - 1; i >= p; i = i - 2) {
                if (p >= i && p <= (i + 1)) {
                    break;
                }
                numberOfPagesToCount++
            }
        }
        else {
            for (let i = n; i >= p; i = i - 2) {
                if (p >= i && p <= (i + 1)) {
                    break;
                }
                numberOfPagesToCount++
            }
        }

    }
    else {
        // Start from the begining
        for (let i = 0; i <= p; i = i + 2) {

            if (p >= i && p <= (i + 1)) {
                break;
            }
            numberOfPagesToCount++
        }
    }
    return numberOfPagesToCount;

}