class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const node1 = new Node('1');
const node2 = new Node('2');
const node3 = new Node('3');
const node4 = new Node('4');
const node5 = new Node('5');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const removeElements = function (head, val) {
    if (!head) return head;

    while (head && head.val === val) {
        head = head.next;
    }

    let curr = head;

    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
};

const printLinkedList = (head) => {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
};

// console.log(printLinkedList(node1));

console.log(printLinkedList(removeElements(node1, '3')));
