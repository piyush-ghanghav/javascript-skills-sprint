// Activity 5: Tree Traversal (Optional)
// • Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class Node{
    constructor(data , left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function inorder(node){
    if(node === null){
        return ;
    }
    
    inorder(node.left);
    console.log(node.data);
    inorder(node.right);
}

//      4
//     / \
//    2   6
//   / \ / \
//  1  3 5  7


const root = new Node(
    4,
    new Node(2, new Node(1), new Node(3)),
    new Node(6, new Node(5), new Node(7))
);

//  1 2 3 4 5 6 7 

inorder(root);

// • Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.



function depthOfTree(node){
    if(node === null){
        return 0;
    }
    const leftDepth = depthOfTree(node.left);
    const rightDepth = depthOfTree(node.right);

    return 1 + Math.max(leftDepth,rightDepth);
}

console.log("Depth:",depthOfTree(root));