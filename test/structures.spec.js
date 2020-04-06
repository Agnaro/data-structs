const { expect } = require('chai')
const { SingleLinkList } = require('../src/structures/sll')

describe('Singlely Linked List', () => {
    let list;

    beforeEach(() => {
        list = new SingleLinkList();
    })
    describe('push', () => {
        it('should add a new vertex to the end of the list', () => {
            list.push(1);
            list.push(2);

            expect(list.head.val).to.eql(1);
            expect(list.tail.val).to.eql(2);
            expect(list.head.next.val).to.eql(2);
        })
        it('should make both head and tail point to the same vertex if there is only one vertex', () => {
            list.push(1);

            expect(list.head.val).to.eql(1);
            expect(list.tail.val).to.eql(1);
        })
    })
    describe('pop', () => {
        it('should return null when popping an empty list', () => {
            expect(list.pop()).to.eql(null);
        });
        it('should return the former tail value and update the tail and length', () => {
            list.push(1);
            list.push(2);
            list.push(3);

            expect(list.pop().val).to.eql(3);
            expect(list.tail.val).to.eql(2);
            expect(list.length).to.eql(2);
        });
        it('should set both head and tail to null when last entry is popped', () => {
            list.push(1);

            list.pop();

            expect(list.length).to.eql(0);
            expect(list.head).to.eql(null);
            expect(list.tail).to.eql(null);
        })
    })
    describe('shift', () => {
        it('should return null if list is empty', () => {
            expect(list.shift()).to.be.null
        });
        it('should return the former head, update the head and the length', () => {
            list.push(1);
            list.push(2);

            const actual = list.shift();

            expect(actual.val).to.eql(1);
            expect(list.head.val).to.eql(2);
            expect(list.tail.val).to.eql(2);
            expect(list.length).to.eql(1);
        });
        it('should make head and tail null if list is now empty', () => {
            list.push(1);

            list.shift();

            expect(list.length).to.eql(0);
            expect(list.head).to.be.null;
            expect(list.tail).to.be.null;
        })
    })
    describe("unshift", () => {
        it('should return an instance of SLL', () => {
            expect(list.unshift(1) instanceof SingleLinkList).to.be.true;
        });
        it('should add the new value at the head position, link it and update the length', () => {
            list.push(2);
            list.unshift(1);

            expect(list.length).to.eql(2);
            expect(list.head.val).to.eql(1);
            expect(list.head.next).to.eql(list.tail);
            expect(list.tail.val).to.eql(2);
        })
        it('should update the tail property if this is the first item', () => {
            list.unshift(1);

            expect(list.head.val).to.eql(1);
            expect(list.tail).to.eql(list.head)
        })
    })
    describe('get', () => {
        it('should return null if index is less than 0', () => {
            expect(list.get(-1)).to.be.null;
        });
        it('should return null if index is >= list length', () => {
            expect(list.get(0)).to.be.null;
        })
        it('should return the item at the given index', () => {
            list.push(0);
            list.push(1);
            list.push(2);

            const res = list.get(1);

            expect(res.val).to.eql(1);
        });
        it('should work for returning the first item', () => {
            list.push(0);

            const res = list.get(0);

            expect(res.val).to.eql(0);
        })
    })
    describe('set', () => {
        it('should return null if idx is list than 0', () => {
            expect(list.set(-1,0)).to.be.null;
        });
        it('should return null if idx is >= list length', () => {
            expect(list.set(0,0)).to.be.null; 
        });
        it('should change the value of the vertex at the given index', () => {
            list.push(0);
            list.push(1);
            list.push(2);

            list.set(1,"a");

            expect(list.get(1).val).to.eql("a")
        })
    })

    describe('insert', () => {
        it('should put the new value at the node specified and link it to the list', () => {
            list.push(0);
            list.push(2);

            list.insert(1, 1);

            expect(list.get(1).val).to.eql(1);
            expect(list.get(2).val).to.eql(2);
            expect(list.head.next.val).to.eql(1);
            expect(list.length).to.eql(3)
        });
        it('should return null if idx is less than 0', () => {
            expect(list.insert(-1, 0)).to.be.null;
        });
        it('should return null if idx > list length', () => {
            expect(list.insert(1,0)).to.be.null;
        })
        it('should work if list is empty and idx is 0', () => {
            list.insert(0,0);

            expect(list.head.val).to.eql(0);
            expect(list.tail.val).to.eql(0);
        });
        it('should return a linked list if given valid values', () => {
            list.push(1);

            expect(list.insert(1, 0) instanceof SingleLinkList).to.be.true;
        })
        it('should handle inserting at the end', () => {
            list.push(0);

            list.insert(1, 1);

            expect(list.tail.val).to.eql(1)
            expect(list.head.val).to.eql(0);
        })
    })
    describe('remove', () => {
        it('should return null if idx is less than 0', () => {
            expect(list.remove(-1)).to.be.null;
        });
        it('should return null if idx >= length', () => {
            expect(list.remove(0)).to.be.null;
        });
        it('should be able to remove the last vtx in the list', () => {
            list.push(0);
            list.push(1);

            list.remove(1);

            expect(list.length).to.eql(1);
            expect(list.head.val).to.eql(0);
            expect(list.tail).to.eql(list.head)
        });
        it("should be able to remove the first vtx in the list", () => {
            list.push(0);
            list.push(1);
            
            list.remove(0);

            expect(list.length).to.eql(1);
            expect(list.head.val).to.eql(1);
            expect(list.tail).to.eql(list.head)
        })
        it("should remove a vtx in the middle of the list", () => {
            list.push(0);
            list.push(1);
            list.push(2);

            list.remove(1);

            expect(list.length).to.eql(2);
            expect(list.head.val).to.eql(0);
            expect(list.get(1).val).to.eql(2);
        });
        it('should return the removed value', () => {
            list.push(0);
            list.push(1);
            list.push(2);

            expect(list.remove(1).val).to.eql(1);
        })
    })
})