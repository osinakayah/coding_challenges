/*
Brie’s Drawing teacher asks her class to open their books to a page number. Brie can either start turning pages from the front of the book or from the back of the book. She always turns pages one at a time. When she opens the book, page 1 is always on the right side:

image

When she flips page 1, she sees pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and she wants to turn to page p, what is the minimum number of pages she will turn? She can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages Brie must turn in order to arrive at page .

Function Description

Complete the pageCount function in the editor below. It should return the minimum number of pages Brie must turn.

pageCount has the following parameter(s):

n: the number of pages in the book
p: the page number to turn to
 */
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