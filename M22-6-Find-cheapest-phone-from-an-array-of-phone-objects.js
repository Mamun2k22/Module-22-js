const phones = [
 {Name:'Samsung', Color: 'blues', Ram: 4, Price: 30000, Storage: 64},
 {Name:'Walton', Color: 'blues', Ram: 4, Price: 20000, Storage: 32},
 {Name:'Huwai', Color: 'blues', Ram: 4, Price: 49000, Storage: 64},
 {Name:'iphone', Color: 'blues', Ram: 8, Price: 100000, Storage: 128},
 {Name:'Symphony', Color: 'black', Ram: 3, Price: 18000, Storage: 64},
 {Name:'Realme', Color: 'blues', Ram: 4, Price: 15000, Storage: 64}

];

function meforphone(phones) {
    let chestPhone = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.Price < chestPhone.Price ) {
            chestPhone = phone;
            
        }
        
    } return chestPhone;
    
} const choosePhone = meforphone(phones);
console.log (choosePhone);