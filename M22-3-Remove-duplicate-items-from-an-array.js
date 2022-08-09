const names = ['mamun','maruf','masum','maria','mamun','mamaruf','sana','masum'];

function removeDuplicate(names){
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const nam = names[i];
        if (unique.includes(nam) === false) {
            unique.push(nam);
        }
        
    }
    return unique;

}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

