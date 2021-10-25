class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(value) {
        var node = new Node(value);
        var current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    remove(index) {
        if (index < 0 || this.size <= index) {
            return console.log('index out of range');
        } else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.value;
        }
    }
    indexOf(value) {
        var count = 0;
        var curr = this.head;
        while (curr != null) {
            if (curr.value === value) {
                return count;
            }
            count++;
            curr = curr.next;
        }
        return -1;
    }
}



var list = new LinkedList();
const p = document.getElementById("p");
const input= document.getElementById("input");

function add() {
    alert(input.value);
}



