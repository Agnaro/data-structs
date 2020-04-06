class SingleLinkList {
    head = null;
    tail = null;
    length = 0;
    constructor() {}

    push(val) {
        const vtx = new Vertex(val);
        if (!this.head){
            this.head = vtx;
        } else {
            this.tail.next = vtx;
        }
        this.tail = vtx;
        this.length++;
        return this;
    }

    pop() {
        if(!this.head || !this.tail) { return null; }
        // find vtx before tail
        let current = this.head;
        let pre = this.head;
        while (current.next) {
            pre = current;
            current = current.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) { return null; }

        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(!this.length) { this.tail = null; }
        return oldHead;
    }

    unshift(val) {
        const vtx = new Vertex(val);
        vtx.next = this.head;
        this.head = vtx;
        if(!this.tail){
            this.tail = vtx;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if(idx < 0 || idx >= this.length ) { return null; }

        let cur = this.head;
        for (let i = 0; i < idx; i++) {
            cur = cur.next;
        }
        return cur;
    }

    set(idx, val) {
        if(idx < 0 || idx >= this.length) { return null; }
        const vtx = this.get(idx);
        vtx.val = val;
    }
    
    insert(idx, val) {
        if(idx < 0 || idx > this.length) { return null; }
        if(idx === this.length) { return this.push(val) }
        if(!this.head) { return this.unshift(val) }

        const vtx = new Vertex(val);

        const pre = this.get(idx - 1);
        vtx.next = pre.next;
        pre.next = vtx;
        this.length++;
        return this;
    }

    remove(idx) {
        if(idx < 0 || idx >= this.length) { return null; }
        if(idx === 0) { return this.shift() }
        if(idx === this.length - 1) { return this.pop(); }

        const pre = this.get(idx - 1);
        const cur = pre.next;
        pre.next = cur.next;
        this.length--;
        return cur;
    }

    reverse() {
        [this.head, this.tail] = [this.tail, this.head];
        let next, prev, node;
        node = this.tail;
        prev = null;
        while (node) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

class Vertex {
    val = null;
    next = null;
    constructor(val) {
        this.val = val;
    }
}

module.exports = { SingleLinkList, Vertex }