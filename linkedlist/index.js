// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    // creates new node from argument "data" and assigns the resulting node to the "head" property
    insertFirst(data){
        //this.head = new Node(data, this.head);
        this. insertAt(data, 0); // we can reuse this method to achieve same goal
    }

    // returns the number of nodes in linked list
    size(){
        let counter = 0;
        let node = this.head;

        while (node){
            counter++;
            node = node.next;
        }

        return counter;
    }

    // Returns the first node of the linked list
    getFirst(){
        //return this.head;
        return this.getAt(0);
    }

    // Returns the last node of linked list
    getLast(){
        // if(!this.head) return null;
        // let node = this.head;
        //
        // while (node){
        //     if(!node.next){
        //         return node;
        //     }
        //     node = node.next;
        // }

        return this.getAt(this.size() - 1);
    }

    // Empties the linked list of any nodes.
    clear(){
        this.head = null;
    }

    // Removes only the first node of the linked list. The list's head should now be the second element
    removeFirst(){
        if(!this.head) return;

        this.head = this.head.next;
    }

    // Removes the last node of the chain
    removeLast(){
        if(!this.head) return;

        if(!this.head.next){
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next){
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    // Inserts a new node with provided data at the end of the chain
    insertLast(data){
        const lastNode = this.getLast();

        if(lastNode){
            // there are some existing nodes in our chain
            lastNode.next = new Node(data);
        }else {
            // The chain is empty
            this.head = new Node(data);
        }
    }

    // Returns the node at the provided index
    getAt(index){
        let counter = 0;
        let node = this.head;

        while (node){
            if(counter === index){
                return node;
            }
            counter++;

            node = node.next;
        }

        return null;
    }

    // Removes node at the provided index
    removeAt(index){
        if(!this.head) return;

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if(!previous || !previous.next) return;
        previous.next = previous.next.next;
    }

    // Create and insert a new node at provided index
    insertAt(data, index){
        if(!this.head) {
            this.head = new Node(data);
            return;
        };

        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        };

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    // Calls the provided function with every node of the chain and the index of the node
    forEach(fn){
        let node = this.head;
        let counter = 0;

        while (node){
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    // Linked list should be compatible as the subject of a 'for...of' loop // using generator iterator
    *[Symbol.iterator](){
        let node = this.head;
        while (node){
            yield node;
            node = node.next;
        }
    }
}

const nodeOne = new Node(5);
const list = new LinkedList();

list.head = nodeOne;
list.insertFirst(15);
list.insertLast(20)

console.log(list)
console.log(list.size())
console.log(list.getFirst())
console.log(list.getLast())
//console.log(list.getAt(1))

//console.log(list.removeFirst())
//console.log(list.clear())





