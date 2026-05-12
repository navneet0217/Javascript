const accountId = 1;
let accountEmail = "user@example.com"
var accountPassword = 12345;   //avoid using var because of blocked scope
// accountCity = "Kanpur";   //allowed but not good practice
// accountId = 2;   //not allowed 

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountId);

//To show in tabular format

console.table([accountId, accountEmail, accountPassword, accountCity])


//Summary : Use let and const and avoid var in modern day javascript development.
//Preference : const > let > var