export function isIdentical(Newobj , oldObj){
    for(let key in Newobj){
        if(!Object.is(Newobj[key],oldObj[key])){
            return false
        }
    }
    return true
}