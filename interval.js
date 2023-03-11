 console.log(1);
 console.log(2);
 let num = 0;
 const interval = setInterval(() => {
     //num++;//ekane na dilew niche num er age ++ dilew hobe
     console.log(++num);
     if (num === 10) {
         clearInterval(intervalId);
     }
 }, 1000)
 console.log(4);
 console.log(5);
 console.log(6);

 //i++ vs ++i
 //x++ vs ++x