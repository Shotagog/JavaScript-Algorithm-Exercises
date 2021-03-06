// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    // first check if incoming data is less (or great) than node.data and that node.data has child. Than insert with recursion.
    insert(data){
        if(data < this.data && this.left){
            this.left.insert(data);
        }else if(data < this.data){
            this.left = new Node(data);
        }else if(data > this.data && this.right){
            this.right.insert(data);
        }else if(data > this.data){
            this.right = new Node(data);
        }
    }

    contains(data){
        if(this.data === data) return this;

        if(this.data < data && this.right){
            return this.right.contains(data);
        }else if(this.data > data && this.left){
            return this.left.contains(data);
        }

        return null;
    }
}


const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);

/* Node looks like this
*           10
*         5    15
*      0           20
*   -5   3
* */

console.log(node.contains(15));
console.log(node.contains(99));
console.log(node.contains(0));


