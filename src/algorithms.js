function flatten(arr){
    if(!Array.isArray(arr)){
        return [arr]
    } else {
        if(!arr.length) {return []}
        const [head, ...tail] = arr;
        return [...flatten(head),...flatten(tail)]
    }
}

function someRecursive(arr, fn){
    if(!arr.length){return false;}
    const [head, ...tail] = arr;
    const headCase = fn(head);
    return headCase || someRecursive(tail, fn);
}

module.exports = { flatten, someRecursive }