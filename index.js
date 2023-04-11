//First determine if it is an object or not - Array excluded
function myEach(collection, callback) {
    
    if (
    typeof collection === 'object' &&
    !Array.isArray(collection) &&
    collection !== null
) {
    let myCollection = Object.values(collection);
    //iterate over the array and alert each number in turn
    for (let i = 0; i < myCollection.length; i++) {
        callback(myCollection[i]);
        alert (myCollection[i])
    } 

    // if input is an array then no manipulation is needed hence collection = myCollection
} else {
     let myCollection = collection;
     //iterate over the array and alert each number in turn
     for (let i = 0; i < myCollection.length; i++) {
        callback(myCollection[i]);
        alert (myCollection[i]);
     }
     
}

return collection;
}
// Secon funtion myMap function
function myMap(collection, callback) {
    let ret = []
    
    if (
    typeof collection === 'object' &&
    !Array.isArray(collection) &&
    collection !== null
) {
    let myCollection = Object.values(collection);
    //iterate over the array and alert each number in turn
    for (let i = 0; i < myCollection.length; i++) {
        let newVal = callback(myCollection[i])
        ret.push(newVal)
    } 

    // if input is an array then no manipulation is needed hence collection = myCollection
} else {
     let myCollection = collection;
     //iterate over the array and alert each number in turn
     for (let i = 0; i < myCollection.length; i++) {
        let newVal = callback(myCollection[i]);
        ret.push(newVal);
     }
     
}
return ret;
}

function myReduce(collection, callback, acc){
    for(let i=0; i<collection.length; i++){
        if(acc !== undefined){
            acc = callback(acc, this[i], i, this)
        }
        else {
          acc = this[i]
        }
    }
  
    return acc
}