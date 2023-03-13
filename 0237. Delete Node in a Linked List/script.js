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

// const deleteNode = function (node) {
//     let nextNode = node.next;
//     node.val = nextNode.val;
//     node.next = nextNode.next;
//     nextNode.next = null;
//     delete nextNode;
// };

const deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

const printLinkedList = (head) => {
    let current = head;

    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
};

deleteNode(node3);

console.log(printLinkedList(node1));
