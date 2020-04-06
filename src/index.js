const { SingleLinkList } = require('./structures/sll')

const list = new SingleLinkList();
list.push("Hello ");
list.push("There ")
list.push("World");

console.log(list.pop());

console.log(JSON.stringify(list, null, 2))