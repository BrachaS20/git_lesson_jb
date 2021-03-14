function showArray() {
    const arr = new Array();
    let randNum;
    for (let i = 0 ; i < 20 ; i++) {
        randNum = Math.round(Math.random() * 99 + 1);
        arr.push(randNum);
    }

    document.write("<b>Array:</b><br/>"); // all the array
    arr.forEach(num => document.write(`${num}<br/>`));


    const evenNumber = arr.find(num => num % 2 === 0); 
    document.write(`<b>First Even Number:</b> ${evenNumber}<br/>`);


    const num = arr.find(num => num > 50);
    document.write(`<b>First Number > 50:</b> ${num}<br/>`);


    const OddNumbers = arr.filter(numbers => numbers % 2 !== 0);
    document.write(`<b>All Odd Numbers:</b> ${OddNumbers}<br/>`);


    const number = arr.filter(num => num > 50);
    document.write(`<b>All Numbers > 50:</b> ${number}<br/>`);


    const index = arr.findIndex(num => num > 50);
    document.write(`<b>Index of First Number > 50:</b> ${index}<br/>`);


    document.write("<b>Even or Odd:</b><br/>");
    arr.forEach(
        (num) => {
            if (num % 2 === 0) {
                document.write(`${num} is Even Number <br/>`);
            } else {
                document.write(`${num} is Odd Number <br/>`);
            }
        }
    );


}