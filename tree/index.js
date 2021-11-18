// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    // Breadth-First Traversal. A breadth first search moves from the root node down to its first child, then
    // immediately backtracks to the root node and traverses any additional child nodes
    traverseBF(fn){
        const arr = [this.root];

        while (arr.length){
            const node = arr.shift();

            arr.push(...node.children);
            fn(node);
        }
    }

    // Depth-First Traversal. A depth first search moves from parent to child from the root all the way down a single
    // line of subtrees, reaching the bottom-most child, the leaf node which has no children of its own
    traverseDF(fn){
        const arr = [this.root];

        while (arr.length){
            const node = arr.shift();

            arr.unshift(...node.children);
            fn(node);
        }
    }
}

const node = new Node(1);
const tree = new Tree();
tree.root = node;


