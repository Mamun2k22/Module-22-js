function totalCount(numbers1,numbers2,numbers3) {
    if (numbers1 !== 'number' || numbers2 !== 'number' || numbers3 !== 'number') {
        console.log("Please Enter a valid number");
    }
    const sum = numbers1 + numbers2 + numbers3;
    return sum;
    
}
const result = totalCount(100,200,10);
console.log(result);