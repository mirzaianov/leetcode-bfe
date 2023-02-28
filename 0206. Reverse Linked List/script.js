const reverseList = function (head) {
    let current = head;
    let previous = null;
    let next;

    while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;
};
