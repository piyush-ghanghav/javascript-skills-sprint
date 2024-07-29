 
// Activity 4: Binary Tree
// • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value , left , and right .

class TreeNode {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(root); 

// • Task 8: Implement a Binary Tree class with methods for inserting values and performing in-order traversal to display nodes.

function inorder(node){
    if(node === null){
        return ;
    }
    
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
}

inorder(root);