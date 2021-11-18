// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

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

// solution. return array with counted values of tree using breadth-firs method search;
function levelWidth(root) {
    let counter = [0];
    const arr = [root, 's'];

    while (arr.length > 1){
        const node = arr.shift();

        if(node === 's'){
            counter.push(0);
            arr.push('s');
        }else{
            arr.push(...node.children);
            counter[counter.length - 1]++;
        }
    }

    return counter;
}


const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

console.log(levelWidth(root));


