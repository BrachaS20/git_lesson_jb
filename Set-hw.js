// 1
// function showEmail() {

//     const emailArray = new Set();

//     emailArray.add("abc123@gmail.com");
//     emailArray.add("aaa111@gmail.com");
//     emailArray.add("bbb222@gmail.com");
//     emailArray.add("ccc333@gmail.com");
//     emailArray.add("ddd444@gmail.com");

//     emailArray.add("aaa111@gmail.com");
//     emailArray.add("bbb222@gmail.com");

//     alert(`The size of the collection is: ${emailArray.size}`);

//     for (let eamil of emailArray) { 
//         alert(`Email: ${eamil}`);
//     };

//     const someEmail = "moishe@gmail.com";
//     if (emailArray.has(someEmail)) {
//         alert(someEmail + " - is in our collection");
//     } else {
//         alert(someEmail + " - is not in our collection");
//     }

// }




// 2
function showUsername() {

    const usernames = new Set();

    usernames.add(prompt("Enter username:"));
    usernames.add(prompt("Enter username:"));
    usernames.add(prompt("Enter username:"));
    usernames.add(prompt("Enter username:"));
    usernames.add(prompt("Enter username:"));

    document.write(`The size of the collection is ${usernames.size}`);
    document.write("<hr/>");
    
    for(let item of usernames) {
        document.write(`Username: ${item}<br/>`);
    }

}