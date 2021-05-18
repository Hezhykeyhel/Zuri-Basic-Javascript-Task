function checkYuGioh(n) {
    if (isNaN(n)){
        return console.log(`invalid parameter: ${n}`);
    }
    const array= [];
    for(i = 1; i <= n; i++){
        if(i === 1){
            array.push(i);
        } else if (i%2 === 0 && i%3 === 0 && i%5===0){
            array.push('yu-gi-oh')
        } else if (i%3 ===0 && i%5 ===0){
            array.push('gi-oh');
        } else if(i%2 ===0 && i%5 ===0){
            array.push('yu-oh');
        } else if(i%2===00 && i% 3 ===0){
            array.push('yu-gi');
            
        } else if (i%2 ===0){
            array.push('yu');
        } else if (i%3 === 0){
            array.push('gi');
        } else if(i%5 === 0){
            array.push('oh');
        } else{
            array.push(i);
        }
    }
    console.log(array);
}

checkYuGioh(10);
checkYuGioh(5);
checkYuGioh("fizzbuzz is meh");