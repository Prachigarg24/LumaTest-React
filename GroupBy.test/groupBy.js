// Extending Array  prototype
Array.prototype.groupedBy=function(keySelector){
  if(!this || !Array.isArray(this)) 
    return{};
  const groupedResult = {};
  for(let item of this){
    let key = keySelector(item);
    if(key === null) key = 'null';
    else if(key === undefined) key = 'undefined';
    if(!groupedResult[key]) {
      groupResult[key] = [item];
    }else{
      groupResult[key].push(item)
    }
  }
  return groupedResult
  }

  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // Example 1: Grouping by even and odd numbers
function groupBy(array, callback){
  return array.reduce((acc, item)=> {
    const key = callback(item);
    if(!acc[key]){
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;

  },{})
}
const grouped = groupBy(numbers,(x) => x % 2 === 0 ? 'Even' : 'Odd');

console.log(grouped)

