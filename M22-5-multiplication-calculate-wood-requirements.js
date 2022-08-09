function woodQuantity(chairWood,tableWood,bedWood) {
    const chairQuantity = 3;
    const tableQuantity = 10;
    const bedQuantity = 50;


    const chairTotal = chairWood * chairQuantity;
    const tableTotal = tableWood * tableQuantity;
    const bedTotal = bedWood * bedQuantity;
    const totalQuantity = chairTotal + tableTotal + bedTotal;

    return totalQuantity;
    
}
const totalWood = woodQuantity(1,0,0);
console.log(totalWood);
