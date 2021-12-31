
//01 number pattearn...............

let text = "01992674843"

let pattearn = /^01|8801|\+8801$/;

console.log(pattearn.test(text));


//02..gmail pattearn.................

let gmail = "delouar1998@gmail.com"
let pattearn = /^[a-z0-9|.]*@[a-z0-9]*|.[a-z]{9}$/;

console.log(pattearn.test(gmail));



//03.... user name pattearn.............................


let name = "Delouar Hussain"

let pattearn = /^[a-z A-Z]*$/;

console.log(pattearn.test(name));



//04.... pasword pattern...................

let password = "Fe1@98_#d"

let pattearn = /^[A-Za-z0-9]*@[a-z0-9]{2}_#[a-z]$/;

console.log(pattearn.test(password));


//04....zip code pattern...................

let zipcode = "88310"

let pattearn = /^[0-9]*$/;

console.log(pattearn.test(zipcode));
