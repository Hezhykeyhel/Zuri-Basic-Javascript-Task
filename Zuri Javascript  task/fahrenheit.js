function convertFahrToCelsius(param){
    if(isNaN(param) && typeof param === 'string'){
        return console.log('$(param) is not a valid number but a string');
      }  else if (isNaN(param) && Array.isArray(param)){
        return console.log('${param} is not a valid number but an array')
        } else if (isNaN(param) && typeof param === 'object' && !Array.isArray(param)){
            return console.log('${param} is not a valid number but an object')
        } else {
            const celsius = ((param - 32) * 5/9).toFixed(4);
            return console.log(celsius);
        }
    }
    
    convertFahrToCelsius(0);
    convertFahrToCelsius("0");
    convertFahrToCelsius("hello");
    convertFahrToCelsius([1, 2, 3]);
    convertFahrToCelsius({temp:0});