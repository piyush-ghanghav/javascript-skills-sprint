// Activity 1: Linked List


// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next .

class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// console.log(node1);


// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

function addToEnd(head){


    if(!head) return;

    let data = prompt("Enter Data: ");
    node = new Node(data);
    
    let temp = head;

    while(temp.next != null){
        temp = temp.next;
    }

    temp.next = node;
}


function displayLL(head){
    if(!head ) return;

    console.log('Nodes in LL: ');
    while(head != null){
        console.log(head.data);
        head = head.next;
    }
}
displayLL(node1)

function removeLastNode(head){
    if(!head ) return null;
    
    if(head.next === null){        
        return null;
    }

    let tmp = head;
    
    while(tmp.next.next !== null){
        tmp = tmp.next;
    } 
    tmp.next = null;
    return head;
}
removeLastNode(node1);
displayLL(node1);
removeLastNode(node1);
displayLL(node1);
removeLastNode(node1);
displayLL(node1);