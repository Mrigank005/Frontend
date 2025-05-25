const accountId = 144553
let accountEmail = "mrigank@google.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ms@ms.com"
accountPassword = "21212121"
accountCity = "Dehradun"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])