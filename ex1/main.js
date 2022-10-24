
for (let i = 1; i <= 50; i++) {
    
    
    if (i % 10 === 0 || i % 15 === 0) {
        console.log('Donkey!');
    }

    if (i % 5 === 0) {
        continue
    }

    if (!i % 2 === 0 && (!i - 1) % 10 === 0 ) {
        console.log('Donkey!');
    }

    console.log(i);
    
    

}