// window. onload = function () {
//     document.querySelector("h1").style.color="blue"


// window.alert("hello from js file")
// document.write("<h1>hi there</h1>");

// console.log("hello %cthere %cim monster" , "color:red; font-size:40px", "color:blue; font-size:40px")
// document.querySelector("h1").style.color="blue"
// document.querySelector("h1").style.fontSize="80px"
// document.querySelector("h1").style.fontWeight="bold"
// document.querySelector("h1").style.textAlign="center"
// document.querySelector("h1").style.fontFamily="Arial" 

// console.log("%cElzero %cWeb %cSchool", "color:red","color:green","background-color:blue" )
// console.group(["oussama", "ahmed", "mostafa"])

// console.table(["talbi", "mostafa", "jawad", "ahmed", "reda"])

// console.log("Iam In Console");   
// document.write("Iam In Page");

// // // console.group("Group1")
// // // console.log("message one");
// // // console.log("message two");
// // // console.group("child group")
// // // console.log("message one");
// // // console.log("message two");
// // // console.group("grand child group")
// // // console.log("message one");
// // // console.log("message two");
// // // console.groupEnd();

// // // console.groupEnd();
// // // console.groupEnd();

// // // console.group("Group2")
// // // console.log("messange one")
// // // console.log("messange two")

// // // let hello = "Elzero",
// // // desc = "Elzero web school",
// // // date = "25/10"

// // // let home = `<div> <h2>Hello ${hello}</h2>
// // // <p>${desc} </p>
// // // <span>${date}</span>
// // // </div>
// // // `
// // // document.write(home.repeat(4)); 

// // // let helloTalk = "Elzero",
// // // desc = "Elzero web school"
// // // datalock = "25/10"

// // // let Talbi = `<div><h1>Damn ${helloTalk} </h1>
// // // <p>${desc} </P>
// // // <span>${datalock} </span>
// // // `
// // // document.write(Talbi.repeat(4));

// // // let numberOne = "10"

// // // let numberTwo = "20"

// // // console.log(`${numberOne}${numberTwo}`);

// // // console.log(numberOne + numberTwo);



// // // Add Variables Here
// // // let numberOne = "10"

// // // let numberTwo = "20"

// // // // Ouput
// // // console.log(numberOne+numberTwo); // Normal Concatenate => 1020
// // // console.log("1020"); // Normal Concatenate => String
// // // console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
// // // console.log(`1020`); // Template Literals Way => String

// // // console.log(numberOne +
// // //      "\n" +numberTwo);
// // // /*
// // // Normal Concatenate
// // // 20
// // // 10
// // // */

// // // console.log(`${numberOne}
// // // ${numberTwo}`);
// // // // /*
// // // Template Literals Way
// // // 20
// // // 10
// // // */

// // // console.log("elzero".innerHTML); // object
// // // console.log(typeof {name : `elzero`}); // object

// // // console.log(`I'm In\n\
// // // Love \n\ """ '''
// // // ++ With ++
// // // \"""\"""
// // // ""JavaScript""`)

// // // let a = 21;
// // // let b = 20;
// // // console.log(a,b+ "" +a,b+""+a,b+""+a, b); // _21_2021_2021_2021_20 


// // // let s = 45
// // // let d = 10

// // // console.log(s+""+d+""+d+s) 

// // // console.log(10 % 2); 

// // // Replace ? With Arithmetic Operators

// // // console.log(10 * 20 + 15 % 3 +190 + 10 - 400);



// // // let num = 3;

// // // // Solution One
// // // console.log(num + num); // 6

// // // // // Solution Two
// // // console.log(num++ + --num); // 6

// // // // // Soultion Three
// // // console.log(num-- + ++num); // 6

// // // // // Soultion Four
// // // console.log(num * ++num / --num + --num); // 6

// // // // // Solution Five
// // // console.log(++num + --num + --num); // 6

// // // // // Solution Six
// // // console.log( true + true + true + true + true + true); // 6  




// // // let num = "10";

// // // // Solution One
// // // console.log(+num + +num); // 20

// // // // Solution Two
// // // console.log(-(-num + -num)  ); // 20

// // // Solution Three
// // // console.log(- -num + - -num); // 20

// // // // // Solution Four
// // // console.log(-num + -num + +num + +num + +num + +num); // 20




// // // let a = 10;
// // // let b = "20";
// // // let c = 80;

// // // console.log(++a + +b++ + +c++ - +a++);
// // // //[++a]: 11 
// // // //[+b++]: 20 but 1 there for 21
// // // //[+c++]: 80 but 1 there for 81
// // // //[+a++]: 10 but 1 there for 11
// // // // then: 11+20+80-11= 100;



// // // console.log(++a + -b + +c++ - -a++ + +a);
// // // //[a=11]
// // // //[c=81]
// // // //[b=21]
// // // //then [q:12] [ b: 13 ]: [-b: 13]: [13:12]
// // // //then : =__c: 81 + [_b :21{__a : 12}]

// // // console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// // //[a:14]
// // //[b:-21]
// // //[c:82]
// // // then: [--c:81]+[+b:-21]+[--a:13]*[-22]-22*14 + 13 - 1
// // //so: 

// // /*
// //   Examples:
// //   [++a]
// //   - Value: ???
// //   - Explain: ???
// //   [+]
// //   - Explain: Addition Operator
// // */

// // /*
// //   Examples:
// //   - Value: [++a] : 11 , [+b++] : 20 , [+c++] : 80 , [+a++] : 10   
// //   - Explain: pree increment [b++] : post increment  [c++] : post increment
// //   [+]
// //   - Explain: Addition Operator 
// // */






// // // * Challenge 1 */
// // // let a = 10;
// // // let b = "20";
// // // let c = 80;
// // // console.log(++a + +b++ + +c++ - +a++);
// // // /*
// // //     [++a] 
// //         // Value = 11
// // //         Explain = pre-increment operator

// // //     [+] = "addition operater"

// // //     [+b++]
// // //         Value = 20;
// //         // Explain = first unary plus operator convert the value from string to number, then post-increment increase the value by 1 to be 21 but not used
    
// // //     [+] = "addition operater" 

// // //     [+c++]
// // //         Value = 80;
// // //         Explain = unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 81 but not used

// // //     [-] = subtraction operater

// // //     [+a++]
// // //         Value = 11;
// // //         Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 12 but not used


// // //     so, the total value = 11 + 20 + 80 - 11 = 100

// // // */

// // // // a = 12    b = 21    c = 81
// // // console.log(++a + -b + +c++ - -a++ + +a);
// // // /*
// // //     [++a]
// // //         Value = 13
// // //         Explain = pre-increment increase the value of a by 1 to be 13
        
// // //     [+] = addtion operator

// // //     [-b]
// // //         Value = -21 
// // //         Explain = Unary negation operator convent the data type from string to number with differnt sign

// // //     [+] = addition operator
    
// // //     [+c++]
// // //         Value = 81;
// // //         Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 82 but not used
    
// // //     [-] = subtraction operater

// // //     [-a++]
// // //         Value = -13
// // //         Explain = post-increment increase the value by 1 to be 14 but not used 
    
// // //     [+] = additon operator

// // //     [+a]
// // //         Value = 14
// // //         Explain = Unary plus operator has not effect becuase the date type already number


// // //     so, the total value = 13 -21 + 81 - -13 + 14 = 100
    
// // // */


// // // // a = 14    b = 21     c = 82
// // // console.log(--c + +b + --a * +b++ - +b * a + --a - +true); 
// // /*
// //     [--c]
// //         Value = 81
// //         Explain = pre-decrement decress the value by 1 to be 81
    
// //     [+] = addition operator

// //     [+b]
// //         Value = 21
// //         Explain = Unary plus operator has no effect because the date type is already number
    
// //     [+] = addition operator

// //     [--a]
// //         Value = 13
// //         Explain = pre decrement decress the value by 1 to be 13
    
// //     [*] = multiplication operator

// //     [+b++]
// //         Value = 21
// //         Explain = Unary plus operator has no effect because the date type is already number, then post increment increase the value by 1 to be 22
    
// //     [-] = subtraction operator

// //     [+b]
// //         Value = 22
// //         Expalin = Unary plus operator has no effect effect
    
// //     [*] = multiplaction operator

// //     [a]
// //         Value = 13
// //         Explain = from the previous a
    
// //     [+] = Addition operator

// //     [--a]
// //         Value = 12
// //         Explain = Pre-decrement decress the value by 1 to be 12
    
// //     [-] = subtraction operator

// //     [+true]
// //         Value = 1
// //         Expalin = unary plus opertor change the date type from boolean to be number

// //         so, the total value = 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100
// // */

// // // /*Challenge 2 */
// // // let d = "-100";
// // // let e = "20";
// // // let f = 30;
// // // let g = true;
// // // console.log(-d * +e); //2000
// // // console.log(++e * ++g + -d + ++f); //173








// // // let d = "-100";
// // // let e = "20";
// // // let f = 30;
// // // let g = true;


// // // console.log(- d * +e); // 2000 


// // // console.log(- --d + (+ ++e * ++g)+ f); // 173 

// // // console.log(1e6); // 1.000.000


// // // console.log(Number.MAX_SAFE_INTEGER);
// // // console.log(Number.MAX_VALUE);

// // // console.log(100..toString())// 100 string
// // // console.log((100).toString())// 100 string

// // // console.log(100.55555.toFixed(2)); // 100.56

// // // console.log(parseInt("100 oussama")); // you will get only the number

// // // console.log(parseInt("oussama 100 oussama")); // are u crazy u cant do that u will get NaN 

// // // console.log(parseInt("100.500 ossama")); // 100 without alkossor does not accept alkosoor = hmar

// // // console.log(parseFloat("100.500 oussama")) // 100.5 with alkossor it does accept alkossor lol 

// // // Is integer : mean is there a 3adad sahih

// // // console.log(Number.isInteger("100")); // False

// // // console.log(Number.isInteger(100.500)); // False

// // // console.log(Number.isInteger(100)); // True, congrats damAss


// console.log(Number.isNaN("oussama" / 20)); //True 
// console.log(Number.isNaN("ousama")); // False 

// // // // Math object

// console.log(Math.round(99.2)); // 99
// console.log(Math.round(99.5)); // 100 if ur number equal 5 or over.. then u will get the next number 

// console.log(Math.ceil(99.2)); // 100 its take ur .2 to over caus its Ceil means oveeer
// console.log(Math.floor(99.9)); // 99 its take ur .9 to down caus its floor means dooown

// console.log(Math.min(10, 20, 100, -100, 90)); // -100 takes the smallest number 
// console.log(Math.max(10, 20, 100, -100, 90)) // 100 takes the biggest number

// console.log(Math.pow(2, 4)); // 16 ki bhal ila drti liha l ouss**

// console.log(Math.random()); // its take a randome number like : 0.543778344 who cares

// console.log(Math.trunc(99.5)); // 99 does not care about alkossor 


// // // THE CHALLENGE OF JAVASCRIPT

// // // let a = 100;
// // // let b = 2_00.5;
// // // let c = 1e2;
// // // let d = 2.4;

// // // // Find Smallest Number In All Variables And Return Integer
// // // console.log(parseInt(Math.min(a, b, c, d))); // 2 

// // // // Use Variables a + d One Time To Get The Needed Output
// // // console.log(parseInt(a*c+d /b )); // 10000

// // // // fach kadrb ra9m sghir bhl 2.4 3la ra9m kbiir bhal 200.5 kat3tik matalan 0.768 
// // // //ymkan thayd dak ra9m li f lfasila b "ParsenInt()"


// // // // Get Integer "2" From d Variable With 4 Methods
// // // console.log(parseInt(d)); // 2
// // // console.log(Math.trunc(d)); // 2
// // // console.log(Math.round(d)); // 2
// // // console.log(Math.floor(d)); // 2


// // // // Use Variables b + d To Get This Valus
// // // console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// // // console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number 


// // // // THE CHALLENGES OF JS  

// // // // Examples

// // // // Your Solutions
// // // console.log(1e5); // 100000
// // // console.log(1_000_00); // 100000
// // // console.log(100000); // 100000
// // // console.log(Number(100000)); // 100000
// // // console.log(1e2*1e3); // 100000
// // // console.log(6e4+4e4); // 100000
// // // console.log(parseInt(100000.56)); // 100000
// // // console.log(Math.ceil(99999.8)); // 100000
// // // console.log(Math.trunc(100000.333)); // 100000
// // // console.log(Math.floor(100000)); // 100000

// // // console.log(- Number.MIN_SAFE_INTEGER); // 9007199254740991

// // // console.log(Number.MAX_SAFE_INTEGER); // 16

// // // let myVar = "100.56789 Views";

// // // console.log(+ parseInt(myVar)); // 100 
// // // console.log(+ parseFloat(myVar).toFixed(2)); // 100.57

// let num = 10;

// console.log(Number.isInteger(num)+Number.isInteger(num));


// let flt = 10.4;

// // // console.log(parseInt(flt)); // 10
// // // console.log(Math.trunc(flt)); // 10
// // // console.log(Math.floor(flt)); // 10
// // // console.log(Math.round(flt)); // 10


// console.log(Math.random(1, 4)); // 0 || 1 || 2 || 3 || 4

// // // console.log(Number.MAX_SAFE_INTEGER); // 16 




// let theName = "ahmed"

// // // console.log(theName); // ahmed
// // // console.log(theName[1]); // h
// // // console.log(theName[5]); // undefind


// // // console.log(theName.charAt(3)); // e
// // // console.log(theName.charAt(5)); // makhla walo 

// // // console.log(theName.length); // katbda l hsab mn 1 dakchi lach 3tatna 5

// // // // l space rah caracter w kaythsab as : "  ahmed  " console.log(length=9)
// // // console.log(theName.trim()); // kat9s9s l masafat hh

// // // console.log(theName.toUpperCase()); // kathawal kolchi l capital 
// // // console.log(theName.toLowerCase()); // kathawal kolchi l noCapital

// console.log(theName.trim().charAt(2).toUpperCase()); // M 
// // // console.log(theName.trim().charAt(3).toUpperCase()); // E 





// let a = "Elzero Web School"; 

// // console.log(a.indexOf("Web")); // 7
// console.log(a.indexOf("Web", 8)); // -1 he didnt find it!

// console.log(a.lastIndexOf("o")); // 15 yahsab akhir "o" jat f ljomla 

// console.log(a.slice(2, 6)); // zero
// console.log(a.slice(-10, -6)); // ch  not includ the end 

// console.log(a.repeat(5)); // reapet "a" for 5 times

// console.log(a.split(" ")); // kayhawl l array(masfofa).. wkay9as9as lhorof 3la hsab ach 3titih

// console.log(a.split("")); // hay9as9as kol lhorof 
// console.log(a.split(" ")); // ghay9as9as l kalimat 
// console.log(a.split("", 6)); // E  L  Z  E  R  O 













// let a = "Elzero Web School";
// // // console.log(a.length); // 17


// console.log(a.substring(2, 6)); // bhal slic ghi mbdl chwya hh 
// console.log(a.substring(6, 2)); // zero.. ghaysla7ha 3adi rojola machi women hh
// console.log(a.substring(-10, 6)); // Elzero 3adi rah 9tlk machi women hh 


// console.log(a.substring(a.length - 5)); // chool
// console.log(a.substring(a.length - 5, a.length - 3)); // ch

// console.log(a.substr(-5, 2));

// console.log(a.includes("Web"));
// console.log(a.includes("Web",8)); // false.. hitach fach bda mn 8 mal9ach "Web" hh matkonch women

// console.log(a.startsWith("E")); // z3ma wach katbda b "E" // true
// console.log(a.startsWith("E",2)); // false

// console.log(a.endsWith("o",6)); // 


// let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
// console.log(`${a.charAt(2).toUpperCase()}${a.slice(3, 6)}`); // Zero

// // 8 H
// console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

// // Return Array
// console.log(a.substring(0, 6).split(" ")); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${a.substring(0,6)} ${a.substring(11, 17)}`); // Elzero School

// // Solution Must Be Dynamic Because String May Changes
// console.log(`${a.charAt(0).toLowerCase()}${a.slice(1, 16).toUpperCase()}${a.charAt(16).toLowerCase()}`); 

// eLZERO WEB SCHOOl 
// // // The challenge is over..


// // // // Another Challenge

// // // let userName = "Elzero";
// // // console.log(userName.charAt(0).toLowerCase()); // e
// // // console.log(userName.substring(0, 1).toLowerCase()); // e
// // // console.log(userName.slice(0,1).toLowerCase()); // e
// // // console.log(userName[0].toLowerCase()); // e
// // // console.log(userName.slice(-6, -5).toLowerCase()); // e
// // // console.log(userName.charAt(0).repeat(3).toLowerCase()); // eee

// // // // Another Challenge 

// // // let word = "Elzero";
// // // let letterZ = "z";
// // // let letterE = "e";
// // // let letterO = "O";

// // // console.log(word.includes(letterZ)); // True 
// // // console.log(word.toLowerCase().startsWith(letterE)); // True
// // // console.log(word.toUpperCase().endsWith(letterO)); // True 






































































// conditions [if, switch];
// 1)  Comparison Operators / Logical Operators :
// console.log(10 == "10"); // true, compare value only.. ya3ni ma3ndhach 3la9a bl string or number
// console.log(-100 == "-100"); // true, compare value only 

// console.log(10 != "10"); // false, not equal 
// console.log(10 === "10"); // false, compare value + type of operatore
// console.log(10 !== "10"); // true,  compare value + type of operatore
// console.log(10 !== 10); // false,  compare value + type of operatore 

// console.log(10 > 20); // false
// console.log(10 > 10); // false
// console.log(10 >= 10); // 10>10 not but 10=10 then true

// console.log(10 < 20); // true
// console.log(10 < 10); // false
// console.log(10 <= 10); // 10<10 not but 10=10 then true 

// console.log(typeof "ousama" === typeof "ahmed"); // true 
// // // === hadi kat3ni indectical

// // // 2) logical operators :
// console.log(true); // true
// console.log(!true); // false ! means "not" 3ks 

// console.log(!(10 == "10")); // false

// console.log(10 == "10" && 10 > 8); // true, && means and
// console.log(10 == "10" && 10 > 8 && 10 > 50); // false, ila math9atch chart wahd then its false

// console.log(10 == "10" || 10 > 50 || 10 > 80 ); // true, if one of that chorot true then all of them true


// // if condition

// let price = 100;
// let discount = true;
// let discountAmount = 30;

// if (discount === true) {
//     price -= discountAmount; // price = price - discountAmount
// }
// console.log(price); // 70 


// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "KSA"

// if (discount === true) {
//     price -= discountAmount; // price = price - discountAmount // ya3ni atkhrj 70
// } else if (country === "Egypt") {
//     price -= 40; // ila kant country = "Egypt" then put price -=40 so taman 60
// } else if (country === "syria") {
//     price -= 50; // ila kant country = "Syria" then put price -=50 so taman 50
// } else {
//     price -=10; // ila makan ta haja then put price -=10 so taman 90 bhal sada9a hh
// }
// // awl "if" or "else if" kaytha9a9 kaytkhad olokhrin taytlaho f zbl
// console.log(price); // 90 


// // // // // Nested Condition

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "KSA"
// let student = true;

// if (discount === true) {
//     price -= discountAmount; // price = price - discountAmount

// } else if (country === "Egypt" && student === true) {
//     price -= discountAmount + 30; // ila tghayr l variabl no problem cuz i put discountAmount + 30

// } else if (country === "Egypt" && student === false) {
//     price -= discountAmount + 10; // so taman = 60 

// } else if (country === "syria") {
//     price -= 50; // ila kant country = "Syria" then put price -=50 so taman 50

// } else {
//     price -=10; // ila makan ta haja then put price -=10 so taman 90

// } 
// // // awl "if" or "else if" kaytha9a9 kaytkhad olokhrin taytlaho f zbl
// console.log(price); // 90

// // // // // thats in over its a cheap way 
// // // // // let see the best way At the bottom

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt"
// let student = true;

// if (discount === true) {

//     price -= discountAmount; 

// } else if (country === "Egypt") {

// if (student === true) {
//     price -= discountAmount + 30;

// } else {
//     price -= discountAmount + 10;

// }

// }

// console.log(price); // 40 




// // // // // // // conditional (ternary) operator.. means "if" almokhtasara hh

// let theName = "ahmed";
// let theGender = "Male";
// let theAge = 30;

// if (theGender === "Male") {
//     console.log("Mr");
// } else {
//     console.log("Mrs");
// }

// // // conditional ? if true : if false

// theGender === "Male" ? console.log("Mr") : console.log("Mrs"); // hada ghir ikhtisar l dakchi li lfo9

// let result = theGender === "Male" ? "Mr" : "Mrs" ; //    ? dyal true   : dyal false

// document.write(result); // "Mr" 

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20 
// ? console.log(20)
// : theAge > 20 && theAge < 60
// ? console.log("20 to 60")
// : theAge > 60
// ? console.log("larger than 60")
// : console.log("unknown");




// let price = 0;

// console.log(`the price is ${price || 200}`); // use value of || when price = null or undifind 
// // or 0 or false or string "" farigh 

// console.log(`the price is ${price ?? 200}`); // kayrj3 l value ghir ila kant undefined or null lba9i maso9och fih


// // // // Challenge 

// let st = "Elzero Web School";

// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//     console.log("Good");
//   }
  
//   if (st !== "string") {
//     console.log("Good");
//   }

//   if (typeof(st.length) === "number") {
//     console.log("Good");
//   }

//   if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
//     console.log("Good");
//   }
  
//   if (typeof(st.length) !== "34") {
//     console.log("Good");
//   }

// console.log(100 == "100"); // true
// console.log(100 < 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(! -50 >=  +"-40"); // true
// console.log(! 10 <= -"-40"); // true
// console.log(! "10" != 10); // true
// console.log(! 20 === false); // true


// let num1 = 10;
// let num2 = 20;

// console.log(!(num1 === num2)); // true
// console.log(num1 < num2); // true
// console.log(! num1 < num2); // true
// console.log(num2 >= num1); // true
// console.log(num1 !== num2); // true
// console.log(num1 <= num2); // true


// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a <= b && a >= c || a < b); // true
// console.log(a < b === a > c); // true
// console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true


// // Test Case 1
// let num = 9; // "009"
// if (num<10) {

// console.log("00" + num)

// }

// // Test Case 2
// let num = 20; // "020"
// if (num>10 && num<100) {
//     console.log("0" + num)
// }

// // Test Case 3
// let num = 110; // "110"
// if(num>=100) {
//     console.log("" +num)
// }


// let numThree = 110;
// // Condition Output => "110"
// if(numThree >= 100   ){
//   console.log("" + numThree )
// }

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if(num1 == str) {
//     console.log("{num1} Is The Same Value As {str}")
// }
// if(num1 !== str) {
//     console.log("{num1} Is The Same Value As {str} But Not The Same Type"
//     )
// }
// if(num1 !== str2) {
//     console.log("{num1} Is Not The Same Value Or The Same Type As {str2}"
//     )
// }
// if(str != str2) {
//     console.log("{str} Is The Same Type As {str2} But Not The Same Value"
//     )
// }


// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if(num3 > num1 && num3 == num2) {
//     console.log("30 Is Larger Than 10 And Type string Not The Same Type As number"
//     )
//     if (num3 > num1 && num3 == num2) {
//         console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//         ) 
//         if(num3 !== num1 && num3 == num2) {
//             console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
//             )

//         }
//     }
    
// }


// // // // // Edit What You Want Here

// let num1 = 11;
// let num2 = 10;
// let num3 = 11;
// let num4 = 33;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
// */
// if (num4 - (num1 + num3) + num2 === 21) {
//     console.log("True");
//   } else {
//     console.log("False");
//   } 
// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // // // Condition 2

// // // if (num1 > num2 && num1 < num4) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 3

// // // if (num1 > num2 && num1 === num3) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 4

// // // if ((num1 + num2) < num4) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 5

// // // if ((num1 + num3) < num4) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 6

// // // if ((num1 + num2 + num3) < num4) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // // Condition 7

// // // if (num4 - (num1 + num3) + num2 === 21) {
// // //   console.log("True");
// // // } else {
// // //   console.log("False");
// // // }

// // // if(num33 > num11 && num33 !== num22){
// // //     console.log("30 Is Larger Than 10 And Not The Same Type As number");
// // //    }
// // // // Needed Output
// // // "30 Is Larger Than 10 And Type string Not The Same Type As number"
// // // "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// // // "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"


// // // switch

// let day = 2 

// switch (day) {
//   case 0:
//     console.log("Saturday")
// //     break;
// //     case 1:
//       console.log("Sunday");
//       break;
//       case 2:
//       case 3:
//         console.log("Monday")
//         break;
//         default:
//           console.log("Unknown Day");
// }

// // // let job = "IT";
// // // let salary = 0;

// // // switch (job) {
// // //   case "Manager":
// // //   salary = 8000
// // //     console.log(salary)
// // //     break;

// // //     case "IT":
// // //       case "Support":
// // //       salary = 7000
// // //       console.log(salary);
// // //       break;

// // //       case "Developer":
// // //         case "Desinger":
// // //           salary = 6000
// // //           console.log(salary)
// // //           break;

// // //           default :
// // //           console.log("u fired") 
// // //       // case "Support" 

// // // // } else if (job === "IT" || job === "Support") {
// // // //   salary = 6000;
// // // // } else if (job === "Developer" || job === "Designer") {
// // // //   salary = 7000;
// // // // } else {
// // // //   salary = 4000;
// // // }


// // // let holidays = 0;
// // // let money = 0;

// // // if(holidays == 0 ){
// // //   money = 5000;
// // //   console.log(`My Money is ${money}`);
// // // }
// // // else if(holidays == 1 || holidays == 2){
// // //    money = 3000;
// // //    console.log(`My Money is ${money}`);
// // // }
// // // else if(holidays == 3 ){
// // //    money = 2000;
// // //    console.log(`My Money is ${money}`);
// // // }
// // // else if(holidays == 4 ){
// // //    money = 1000;
// // //    console.log(`My Money is ${money}`);
// // // }
// // // else if(holidays == 5 ){
// // //    money = 0;
// // //    console.log(`My Money is ${money}`);
// // // }
// // // else{
// // //   money = 0;
// // //    console.log(`My Money is ${money}`);
// // // } 

// // // let day = "   friday  ";
// // // // console.log(day.slice(4, 9));

// // //  switch (day) {
// // //    case "   friday   ":
// // //     day =day.trim();
// // //     day = day.charAt(0).toUpperCase() + day.slice(1)
// // //   }
      
// // // You Need To Remove Spaces And Make First Letter Capital => Friday

// // // let day = "Friday";
// // // let day = "Saturday";
// // // let day = "Sunday";
// // // // Output => "No Appointments Available"

// // // let day = "Monday";
// // // let day = "Thursday";
// // // // Output => "From 10:00 AM To 5:00 PM"

// // // let day = "Tuesday";
// // // // Output => "From 10:00 AM To 6:00 PM"

// // // let day = "Wednesday";
// // // // Output => "From 10:00 AM To 7:00 PM"

// // // let day = "World";
// // // // Output => "Its Not A Valid Day"































// aray introduce // Nested Array

// let MyFriends = ["Ahmed", "Jawad", "Reda", "Mohamed"]

// console.log(`Hello ${MyFriends[0]}`); // Hello Ahmed
// console.log(`Hello ${MyFriends[2]}`); // Hello Reda
// console.log(`${MyFriends[1][3]}`) // a mn dyal "jawad"

// let MyFriends = ["Ahmed", "Jawad", "Reda", "Mohamed", ["Marwan", "Khalid"]]
// console.log(`Hello ${MyFriends[4][1]}`); // Khalid
// console.log(`${MyFriends[4][1][5]}`); // d
// console.log(`${MyFriends[4][0][2]}`); // r mn Marwan

// console.log(MyFriends); // (5) ['Ahmed', 'Jawad', 'Reda', 'Mohamed', Array(2)]

// MyFriends[1] = "Talbi"

// console.log(MyFriends); // (5) ['Ahmed', 'Talbi', 'Reda', 'Mohamed', Array(2)]

// MyFriends[4] = "Mustafa"
// console.log(MyFriends); // change the array to just a word as arrays
// //  ['Ahmed', 'Talbi', 'Reda', 'Mohamed', 'Mustafa']
// MyFriends[4] = ["sameh", "Hello"];
// console.log(MyFriends); //  ['Ahmed', 'Talbi', 'Reda', 'Mohamed',["sameh", "Hello"] ]



// console.log(Array.isArray(MyFriends));


// let MyFriends = ["Alae", "Ousama", "Ahmed", "Zakaria", "Yahdih"];
// console.log(MyFriends.length); // 5

// MyFriends[MyFriends.length] = "Talbi";
// console.log(MyFriends); // if i put [6] will give the value "Talbi" but before "empty" cuz there is no [6]
// // and length of him = 7

// // if u wanna updat the last value of array without entre length just put "length - 1"

// let MyFriends = ["Alae", "Ousama", "Ahmed", "Zakaria", "Yahdih"];

// MyFriends.length = 2;
// console.log(MyFriends); // ["alae", "ousama"] 



// let MyFriends = ["Alae", "Ousama", "Ahmed", "Zakaria", "Yahdih"];

// console.log(MyFriends);

// MyFriends.unshift("joshua", "lewa"); // kayzid 2 words l l array

// console.log(MyFriends); // ["joshua", "lewa" "Alae", "Ousama", "Ahmed", "Zakaria", "Yahdih"]; put arrays in first

// MyFriends.push("samah", "manal");
// console.log(MyFriends); // kayzid 2 words l l array f lkhr

// let first = MyFriends.shift();
// console.log(MyFriends); // remove the first word in array and that word who removed hidding in a variabl "let"

// console.log(`Hello my name is ${first}`); // mkhbi f variable


// let last = MyFriends.pop();
// console.log(MyFriends); // remove the last word in array

// console.log(`Hello my name is ${last}`); // mkhbi f variable


// // // // // another lesson

// let MyFriends = ["Ahmed", "Mohamaed", "Sayed", "Alae", "Ahmed"];

// console.log(MyFriends);

// console.log(MyFriends.indexOf("Ahmed"));
// console.log(MyFriends.indexOf("Ahmed", 2));

// console.log(MyFriends.lastIndexOf("Ahmed"));
// console.log(MyFriends.lastIndexOf("Ahmed", -2));

// console.log(MyFriends.includes("Ahmed")); // true
// console.log(MyFriends.includes("Ahmed", 2)); // true

// if(MyFriends.indexOf("ousama") === -1) {
// console.log("Not Found"); // Not Found
// }

// // // searching array 

// let MyFriends = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

// console.log(MyFriends);
// console.log(MyFriends.sort()); // ghaybdl lblays mn sghir ll kbir btari9a 3ajiba bhal 90 akbar mn 2000 hh
// console.log(MyFriends.reverse()); // ghay3ks l sort machi li fo9ha


// // // // // // slicing array


// let MyFriends = ["Ahmed", "Sayed", "Ali", "Ousama", "Gamal", "Ameer"];
// console.log(MyFriends);

// console.log(MyFriends.slice()); // ayakhod kolchi 3adi
// console.log(MyFriends.slice(1)); // Sayed ..........
// console.log(MyFriends.slice(1,  3)); // Sayed Ali not include the end
// console.log(MyFriends.slice(-3)); // oussama gamal ameer
// console.log(MyFriends.slice(1, -2)); // Sayed Ali Ousama // not includ the end
// console.log(MyFriends.slice(-4, -2));// Ali Ousama

// MyFriends.splice(1, 2, "samer", "samara"); // bda mn 1 w7df 2 w7t blasthom "samer" "samara"
// console.log(MyFriends); // ["Ahmed", "samer", "samara" , "Ousama", "Gamal", "Ameer"];


// // // // // joining arrays // damj l array


// let MyFriends = ["ahmed", "sayed", "ali", "ousama", "gamal", "ameer"];
// let myNewFriends = ["samar", "samer"];
// let schoolFriends = ["haytam", "shady"];

// let allFriends = MyFriends.concat(myNewFriends, schoolFriends, "gameel", ["ziko", "Aimad"]);

// console.log(allFriends); 



// console.log(allFriends.join()); // ghay3ti kolchi k array whda wyafsal binathom b "," 

// console.log(allFriends.join("")); // mlas9in
// console.log(allFriends.join(" @ ")); // " @ "
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase()); 




// // // Challenge

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];


// console.log(my.reverse().slice(2)); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(-3,5)); // ["Elham", "Mazero"]

// console.log(`${my[2][0]}${my[2][1]}${my[1][2]}${my[5][3]}${my[1][4]}${my[3][0].toLowerCase()}`); // "Elzero"

// console.log(`${my[0][4]}${my[2][0]}`); // "rO" 

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice("",num)); // ["Ahmed", "Elham", "Osama"];

// // Method 2 
// console.log(myFriends.splice("",num)); // ["Ahmed", "Elham", "Osama"];


// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// let h = friends.shift()
// let b = friends.pop()
// console.log(friends); // ["Eman", "Osama"] 


// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code
// console.log(finalArr.concat(arrTwo).concat(arrOne).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[words.length - website.indexOf("o")][0].slice(words.length - website.indexOf("o")).toUpperCase()); // ZERO


// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// if (haystack.includes(needle)) {

//     console.log("Found")
// }

// if (haystack[1] === needle) {
//     console.log("Found")
// }


// let arr1 = ["A", "C", "X","D", "E", "F", "Y"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here

// allArrs = allArrs.concat(arr1,arr2);
// allArrs = allArrs.sort().join("").toLowerCase();
// console.log(allArrs.slice(arr2.length)); // fxy













// // loop "for"

// // for ( [1] [2] [3]) {
//     // block of code
// // }

// // [1]: mar7alat l intila9, means li katbda mnha // mar7alat tjib mowadaf ghatkararha 10 marat 
// // lwr9a ba9ya 0 yalah ghan3mrha bl mowadafin // i = 0

// // [2]: l condition, chart li tchayk 3lih, ghanl9a mowadaf ghan3ayno // i < 10

// // [3]: l akchn li ayw93 mn b3d ma tkarar lcode, n updat dakchi li drt 9bl wkol ma wdft n9ayd // i++

// // for (let i = 0; i < 10; i++) {
// //     console.log(i)
// // }

// let friends = ["hi","mu","si","eh","os","sx"];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);

// hadchi li lfo9 bla loop

// for (let i = 0; i < 5; i++) {
//     console.log(friends[0]); // hi 5 marat
// console.log(i); // 0  1  2  3  4  
// console.log(friends[i]); // hi mu si eh oss
// } 
// // // ila ms7ti "os" ghay3tik blastha undifind 

// for (let i = 0; i < friends.length; i++) {
// console.log(friends[i]); // tari9a dynamic wakha tzid wla tn9s f larray ghaymchi m3ak mzyan

// } 

// // // // kifach tfr9 bin number w string btari9a okhra bla for loop

// // // let friends = [2,1,"hi","mu","si","eh","os"];

// // // let onlyName = [];

// // // if (typeof friends[0] === "string") {
// // //     onlyName.push(friends[0]);
// // // }
// // // if (typeof friends[1] === "string") {
// // //     onlyName.push(friends[1]);
// // // }
// // // if (typeof friends[2] === "string") {
// // //     onlyName.push(friends[2]);
// // // }
// // // if (typeof friends[3] === "string") {
// // //     onlyName.push(friends[3]);
// // // }
// // // if (typeof friends[4] === "string") {
// // //     onlyName.push(friends[4]);
// // // }
// // // if (typeof friends[5] === "string") {
// // //     onlyName.push(friends[5]);
// // // }
// // // if (typeof friends[6] === "string") {
// // //     onlyName.push(friends[6]);
// // // }
// // // console.log(onlyName);

// // // // btari9at loop 

// // // let friends = [2,1,"hi","mu",5,"si",9,"eh","os"];

// // // let onlyName = [];


// // // for (let i = 0; i < friends.length; i++) {
// // //     if (typeof friends[i] === "string") {
// // //         onlyName.push(friends[i]);
// // //     }
// // // }
// // // console.log(onlyName);

// // // // Nested loop 

// let products = ["keyboard", "mouse","pen","monitor"];

// let colors = ["red", "green","black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//     console.log("#".repeat(15));
//     console.log(`# ${products[i]}`);
//     console.log("#".repeat(15));
    
//     console.log("colors: ");
// // nested
// for (let j = 0; j < colors.length; j++) {
//     console.log(`+ ${colors[j]}`);
// }
// console.log("models: ");
// for (let k = 0; k < models.length; k++) {
//     console.log(`+ ${models[k]}`);
// }
// } 


// // // // controle loop

// let products = ["keyboard", "mouse","pen","monitor"];
// let colors = ["red", "green","black"];

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i])
//     if (products[i] === "pen"){
//         break;
//     }
// }
// // break : kayw9f loop

// // continue // kaykml w kaysfi l numbers
// let products = ["keyboard",45, "mouse","pen",6,"monitor"];
// let colors = ["red", "green","black"];

// for (let i = 0; i < products.length; i++) {
//     if (typeof products[i] === "number"){
//         continue;
//     }
//     console.log(products[i])

// } 



// // // // for advanced ikhtisarat

// let products = ["keyboard","ipad", "mouse","pen","iphone","monitor"];
// let i = 0;

// for (;;) {
//     console.log(products[i]);
//     i += 1
//     if (i === products.length)break; // l i ghadi taywsl l products.length y3ni fach aywsl aykon kaysawi= l i 
//     // so nktbo i === products.length
// } 

// // // loop practice inside page

// let products = ["iphone","ipad","Pc","Monitor","Pan","Strike"]
// let colors = ["red", "green", "blue"]
// let take = ["poisin", "moon"]
// let showCount = 5;

// document.write(`<h1>Show ${products.length} Products</h1>`)

// for(let i = 1; i < showCount; i++) {
//     document.write(`<div>`)
//     document.write(`<h3>[${i }] ${products[i]}</h3>`)
//     for(let j = 0; j < colors.length; j++) {
// document.write(`<p>${colors[j]}</p>`)

//     }
  
// document.write(`<p>${colors.join(" -- ")}</p>`)
// document.write(`</div>`) 

// }



// // // // // loop while

// // let products = ["iphone","ipad","Pc","Monitor","Pan","Strike"]

// // let index = 0;

// // while(index < products.length){
// //     console.log(products[index])
// //     index += 1

// // }

// // // let products = ["iphone","ipad","Pc","Monitor","Pan","Strike"]

// // // let i = 0

// // // do {
// // //     console.log(i)
// // //     i++
// // // // } while(false) // ya3ni dir had l ammer 9bl matchof l false ya3ni wakha kayna lfalse diiir

// // // // console.log(i) 

// // // // Challenge

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// let admins_count = 0;
// myAdmins.length = myAdmins.indexOf("Stop");
// document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
// document.write(`<hr/>`);

// let leader = 0;
// let teamN = 0;
// let workerN = 0;

// for (; leader<myAdmins.length; leader++){
//   teamN++
//   document.write(`<div>The admin For Team ${teamN} is ${myAdmins[leader]}</div>`);
//   letter = myAdmins[leader][0];
//   document.write(`<h3>Team Members:</h3>`);
//   for (let workers = 0; workers<myEmployees.length; workers++){
//     myEmployees[workers].startsWith(letter)
//     ? document.write(`<p>- ${++workerN} ${myEmployees[workers]}</p>`)
//     : workers = workers
//   } 
//   workerN = 0
//   document.write(`<hr/>`);
// }



// let Admin = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let Employee = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// let teamN = 0
// for(let i=0;i<Admin.length;i++)
// {
// teamN++
//     document.write(`<div>The Admin for team ${teamN} is ${Admin[i]}</div>`);
//     document.write("<h2>Teams Members</h2>");
//     let x = Admin[i].charAt(0)
//     let k = 0;
//    for(let j = 0; j<Employee.length;j++)
//    {

//         if(Employee[j].charAt(0) === x)
//         {
//              document.write(`<p>- ${++k} ${Employee[j]} </p>`);
//         }
    
//    }
//     document.write("<hr></hr>");
// } 

// // // assignment :



// // let start = 10;
// // let end = 100;
// // let exclude = 40;

// // // for(let i = 0; i < start; i++) {
// // //     console.log(start[i]) 

// // // }


// // for(let i = start; i <= end; i+=start){
// //     if(i === exclude){
// //       continue;
// //     }  
// //     console.log(`${i}`);
// //   }


// // Output
// // 10
// // 20
// // 30
// // 50
// // 60
// // 70
// // 80
// // 90
// // 100


// // let start = 10;
// // let end = 0;
// // let stop = 3;


// // for(let i = start; i >= stop; i--){
// //     if(i < start){
// //       console.log(`${end}${i}`);
// //     }
// //     else{
// //     console.log(`${i}`);
// //     }
    
// //   } 

// // Output
// // 10
// // 09
// // 08
// // 07
// // 06
// // 05
// // 04
// // 03


// // let start = 1;
// // let end = 6;
// // let breaker = 2;

// // for(i = 0; i < start; i+= 1){
// //     if(start === 3){
// //         continue;
// //     }
    
// // }

// // Output
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4
// // 3
// // -- 2
// // -- 4
// // 4
// // -- 2
// // -- 4
// // 5
// // -- 2
// // -- 4
// // 6
// // -- 2
// // -- 4

// let index = 10;
// let jump = 2;
// let end = 0;

// let i = 0

// for (;;) {
//   i+=2
//   if(i < index) {
//       console.log(`${i}`)
// break;
//   }
// }

// // Output
// // 10
// // 8
// // 6
// // 4


















































// function // do not repeat yourself

// function sayHello(usarName,Age,num = "unknown") {
//     if(Age < 20){
//         console.log(`This App Not good for u`)
//     } else{
//         console.log(`Hello ${usarName} your Age is ${Age} and ur number is ${num}`); 
//     }
        
    
// }

// sayHello(`ahmed`,38,12); // Hello ahmed your Age is 38
// sayHello(`Reda`,21); // Hello Reda your Age is 21 
// sayHello(`jawad`,14); // This App Not good for u

// // Another Example 

// function generateYears(start, end, exclude) {
//     for (let i = start; i <= end; i++) {
//         if(i === exclude) {
//             continue;
//         }
//         console.log(i);
//     }
// }

// generateYears(1982, 2021, 2020);

// // // // // Return 

// function calc(num1, num2) {
//     return num1 + num2;
// } 
// let result = calc(10, 20);
// console.log(result + 100); // 130 return katakhd dakchhi 
// // li dart function w katdir biha chi haja



// function generate(start, end) {
//     for(let i = start; i <= end; i++) {
//         if(i === 15){
//             return `interruptting`
//         }
//     }
// }

// generate(10, 20); // ghaytba3 tal 15 w yarja3(y7bs)


// // // parametre undefined

// function sayHello(userName, age = "unknown") {
//     if(age === undefined) {
//         age = "unknown"
//     }
//    // age = age || "unknown"; // tari9a tanya
//     return `Hello ${userName} Your age is ${age}`;
// }
// console.log(sayHello("Talbi"));

// // // rest parameters // tatsta9bl(tatsm7 ll fonction) 3adad ghayr mohadad mn argumnet
// // // li sti3mal l rest (...numbers)
// // // numbers hadi 3ibara 3an array

// function calc(...numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     return `final result is ${result}`;
// }
// console.log(calc(10, 40, 30, 90)); // final result is 170


// function sayHello(theName, theGender = "sir") {
//     if(theGender === "Male") {
//         theGender = "Mr"
//         console.log(`Hello your welcome ${theGender} ${theName}`)

//       } else {
//         theGender = "Mrs"
//         console.log(`Hello your welcome ${theGender} ${ theName}`)
//     } 

//     }
  

// sayHello("Mustafa", "Female");

  
  // Needed Output
//   sayHello("Osama", "Male"); // "Hello Mr Osama"
//   sayHello("Eman", "Female"); // "Hello Miss Eman"
// // //   sayHello("Sameh"); // "Hello Sameh" 


  // function calculate(firstNum, secondNum, operation) {
  //  if(secondNum === undefined){
  //      console.log(`please add a second number`)
  //  } else if  (operation === "subtract") {
  //      console.log(secondNum - firstNum)
  //  } else {
  //   (operation === "multiply") 
  //       console.log(secondNum * firstNum);
  //  } if(operation === "add") {
  //      console.log(firstNum + secondNum)
  //  }
       
  //  }
  
// //   // Needed Output
//   calculate(20); // Second Number Not Found
//   calculate(20, 30); // 50
//   calculate(20, 30, 'add'); // 50
//   calculate(20, 30, 'subtract'); // -10
//   calculate(20, 30, 'multiply'); // 600




  
  // function ageInTime(theAge) {
  //   if(theAge > 10 && theAge < 110 ){
  //     console.log(`Months => ${theAge * 12}
  // Weeks => ${theAge * 12 * 4}
  // Days => ${theAge * 12 * 30}
  // Hours => ${theAge * 12 * 30 * 24}
  // Minutes => ${theAge * 12 *30 *24 *60}
  // Seconds => ${theAge * 12 *30 *24 *60 * 60}
  //     `)
      
  //   }
  //   else{
  //     console.log(`Age Out Of Range`);
  //   }
  // }
  
  // // Needed Output
  // ageInTime(110); // Age Out Of Range
  // ageInTime(22); // Months Example => 456 Months
  
  

  // function checkStatus(a, b, c) {
  //   if(typeof a === "string" && typeof b === "number") {
  //     if (c === true) {
  //       console.log(`Hello ${a} your age is ${b} You Are Available For Hire `)
        
  //     } if (c === false) {
  //       console.log(`Hello ${a} your age is ${b} You Are Not Available For Hire `)

  //     } 


  //     }
  //   } 
    
  
  
  // // Needed Output
  // checkStatus("Osama", 38, false); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  // checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  // checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  // checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


  // function checkStatus(a, b, c) {
  //   let Name , Age , Status;
    
  //     if(typeof a === "string"){
  //        Name = a;
  //       if(typeof b === "number"){
  //         Age = b;
  //         Status = c;
  //       }
  //       else{
  //       Age = c;
  //       Status = b;
  //       }
  //     }
  //     else if(typeof a === "number"){
  //        Age = a;
  //        if (typeof b === "string"){
  //          Name = b;
  //          Status = c;
  //        }
  //       else{
  //         Status = b;
  //          Name = c;
  //           }
           
  //     } 
        
  //     else {
  //       Status = a;
  //       if (typeof b === "string"){
  //         Name = b;
  //         Age = c;
  //       }
  //       else{
  //         Name = c;
  //         Age = b;
  //     }
  //     }
  //     if (Status === true){
  //       console.log(`"Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire"`);
        
  //     }
  //     else{
  //       console.log(`"Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire"`);
  //     }
  //   }
    
  //   // Needed Output
  //   checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  //   checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  //   checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  //   checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
    
    
  // function createSelectBox(startYear, endYear) {
  //   document.write("<select>");
  //   for(let i = startYear; i <= endYear; i++) {
  //     document.write(`<option value=${i}>${i}</option>`)
  //     document.write("</select>") 

  //   }
  // }
  // createSelectBox(2000, 2021);



  // function createSelectBox(startYear, endYear) {
  //   document.write("<select >");
  //   for(let i = startYear; i <= endYear; i++){
  //     document.write(`<option value=${i}>${i}</option>`);
      
  //   }document.write("</select>")
  // }
  // createSelectBox(2000, 2021); 





  // function multiply(...Numbers){
  //   let result =  1;
  //   for(let i = 0; i < Numbers.length; i++){
  //     if(typeof Numbers[i] === "string"){
  //       continue;
  //     }
  //     else{
  //       result *= Math.trunc(Numbers[i]);
  //     }
  //   }
  //   console.log(result);
  
  // }
  
  
  // multiply(10, 20); // 200
  // multiply("A", 10, 30); // 300
  // multiply(100.5, 10, "B"); // 1000


//   function =>
// annonynmous function
// ymkn tkhbi l function f variable

// let calculator = function(num1, num2){
//   return num1 + num2;
// };
// console.log(calculator(10, 20));

// // 3lach ansta3ml annonymouns function
// // matalan baghi dir chi akchn chi botton twrk 3liha dir chihaja
// // wach ghankon mhtaj nsmi l function? la


// // Rutern Nested function 

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// } 
// console.log(sayMessage("Mustafa", "Talbi"))

// // // // example 2 

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }
// console.log(sayMessage("Mustafa", "Talbi"))

// // // example 3 

// function sayMessage(fName, lName) {
//   let message = `Hello`;
//   // Nested Function
//   function plusMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`;
//     }
//     return `${message} ${getFullName()}`;
//   }
//   return plusMsg();
// }
// console.log(sayMessage("Mustafa", "Talbi"));


// // arrow function syntax


// let print = function (num){
//   return num; 
// } // hadchi tari9a 3adya
// console.log(print(100));

// // tari9at l arrow

// let print = (num) => num; // tari9at l  arrow

// console.log(print(100));


// // scope

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function- From Local ${a}`);
//   console.log(`Function- From Local ${b}`);
// } // had lvariable khasin b l function 
// showText()

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`); 
// hada ghay9ra ghir lvariable li bra machi li dakhl lfunction



// //  l var machi global scope wmachi local howa bjoj

// var x = 10;

// if(10 === 10) {
//   let x = 50;
//   console.log(`From if Block ${x}`); // 50
// }
// // console.log(`From Global ${x}`); // 10

// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     // Osama Mohamed => Osama M.
//     // Ahmed ali => Ahmed A.
//     let Fname = zName.slice(0,zName.indexOf(" "));
//     let Lname = zName.slice(zName.indexOf(" "),zName.length);
//     return `${Fname} ${Lname[1].toUpperCase()}.`
//   }
//   function ageWithMessage(zAge) {
//     let message ="";
//     // Write Your Code Here
//     // 38 Is My Age => Your Age Is 38
//     // 32 Is The Age => Your Age Is 32
//     let age = zAge.slice(0, zAge.indexOf(" "))
//     return  `Your Age Is ${age}`;

//   }
//   function countryTwoLetters(zCountry) {
//     let message = "";
//     // Write Your Code Here
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//     let Country = zCountry.slice(0,2).toUpperCase()
//     return `${Country}`;
//   }
//   function fullDetails() {
//     // Write Your Code Here
//     return (`Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In  ${countryTwoLetters(zCountry)}` )
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG


// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


// function specialMix(...data) {
//   let counter = 0;
//   let string_count = 0;
//   for(let i = 0; i < data.length; i++){
//     if (parseInt(data[i])){
//       counter += parseInt(data[i]);
      
//       }
//     else{
//     string_count++;
//     }
//   }
//   if( counter == 0 && string_count == data.length){
//     counter = "All Is Strings";
//   }
//   return counter;
// } 

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


// let invertedNumbers = [1, 10, -34, 23, -45, -67];

// let inv = invertedNumbers.map(function(ele){
// return -ele;
// })
// console.log(inv);


// let ignoreNumbers = "TAL12B3I4";

// let ig = ignoreNumbers.split("").map(function(ele){
// return isNaN(parseInt(ele)) ? ele : "";
// }).join("");

// console.log(ig);

// Height Order Function
// Map : creat a new array

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArray = [];

// for(let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] + myNums[i]);
// } 

// console.log(newArray); // 2 4 6 8 10 12

// Same idea with Map 

// let addSelf = myNums.map(function(element, index, arr){
//   // console.log(`current element => ${element}`);
//   // console.log(`current index => ${index}`);
//   // console.log(`current array => ${arr}`);
//   // console.log(` this => ${this}`);
//   return element + element;
// }, 10);

// console.log(addSelf); // 2 4 6 8 10 12

// // bel arrow function  

// let addSelf = myNums.map((element) => element + element); 

// console.log(addSelf); // 2 4 6 8 10 12 

// // bel function
// function addition(ele) {
//   return ele + ele;
// } 
// let add = myNums.map(addition);

// console.log(add); // 2 4 6 8 10 12 

// // Challenges

// let swappingCasws = "TalBi"

// let sw = swappingCasws.split("").map(function(ele){
//   return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// }).join("");

// console.log(sw);

// let invertedNumbers = [1, -10, -20, 15, 100, -30];

// let inv = invertedNumbers.map(function(ele){
//   return -ele;
// });

// console.log(inv);

// let ignoreNumbers = "Elz123er5o";

// let ign = ignoreNumbers.split("").map(function(ele){
//   return isNaN(parseInt(ele)) ? ele : "";
// }).join("");

// console.log(ign);

// // The challenge with arrow

// let swappingCasws = "TalBi"

// let sw = swappingCasws
// .split("")
// .map((a) =>  a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())
// .join("");

// console.log(sw); // the same thing



// H.O Function filter
// katfilter 
// // katrd lik l9iyam li t tb9at 3lihom chart

// let friends = ["Ahmed", "Sameh", "Sayed", "Asmae", "Amgad", "Israe"];

// let filledfriends = friends.filter(function(el){
//   return !el.startsWith("A") ? true : false;
// });

// console.log(filledfriends);


// let numbers = [11, 20, 2, 5, 17, 10];

// let evenNumbers = numbers.filter(function(el){
//   return el % 2 === 0 ? true : false;
// });

// // practice filter

// let sentence = "I love Foood Code Too Playing Much"; 

// let smallwords = sentence.split(" ").filter(function(ele){ 
//   return ele.length <= 4;
// }).join(" ");

// console.log(smallwords); // i love code too much




// // H.O Function Redux



// let mix = "A13852ZX";

// let mixedContent = mix.split("").filter(function (ele){
//   return isNaN(parseInt(ele));
// }).join("");

// console.log(mixedContent); 


// // ForEach 
// in another time


// Object


// chakl al human (color hair, his head...) : called properties
// the action that do called methode, action as 3ts shrb.....

// let myvar = "countery"

// let user = {
//   // properties
//   theName: "Mustafa",

//   countery: "Maroc",
// };

// console.log(user.theName);
// // tari9at akss 3liha 
// console.log(user["theName"]);
// console.log(user[myvar]);




// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let mix_Elzero = mix.map(function(ele,index,arr){
//   return isNaN(parseInt(ele)) ? ele : ""; 
// }).reduce(function(acc , current){
//   return acc + current; 
// })
// console.log(mix_Elzero);
// // Elzero



// let myString = "EElllzzzzzzzeroo";
// let removeDublicate = myString.split("").filter(function(ele, index, arr ){
//   console.log(ele);
//   console.log(index);
//   console.log(arr);
//   return arr.indexOf(ele) === index  ;
// }).join("");
// console.log(removeDublicate);


// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let returnElzero = myArray.reduce(function(acc,curr){
//   return acc.concat(curr) 
// },[]).join("");

// console.log(returnElzero);




// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let reversedNumbers = numsAndStrings.filter(function(ele){
//   return !isNaN(parseInt(ele));
// }).map(function(ele){
//   return -ele ;
// })

// console.log(reversedNumbers)
// [-1, -10, 10, 20, -5, -3]
// [-1, -10, 10, 20, -5, -3]




// let nums = [2, 12, 11, 5, 10, 1, 99];

// let get_500 = nums.reduce(function(arr,curr){
//   return curr % 2 === 1 ? arr + curr : arr * curr ; 
// },1)
// console.log(get_500)








// Function By Gamal

// // function calcAge(age) {
// //   let result = age * 12
// //   console.log(result);
// // }
// // calcAge(3); // hisab l 3omer bl achhor


// // Map
// // Filter
// // Reduce
// // ForEach





//   // Object
//   // - Intro and What Is Object
//   // - Testing Window Object
//   // - Accessing Object


// let user = {
//   // Properties
//   theName: "Osama",
//   theAge: 38,
//   // Methods
//   sayHello: function () {
//     return `Hello`;
//   },
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());


// // Dot Notation vs Bracket Notation

// let myVar = "country";

// let user = {
//   theName: "Osama",
//   country: "Egypt",
// };

// console.log(user.theName);
// console.log(user.country); // user.country
// console.log(user.myVar); // user.country
// console.log(user[myVar]); // user.country



// // Nested Object

// let available = true;

// let user = {
//   name: "Osama",
//   age: 38,
//   skills: ["HTML", "CSS", "JS"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free`;
//     }
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]); // Access With Index
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]);
// console.log(user["addresses"]["egypt"]["one"]);

// console.log(user.checkAv());


// // New kyword

// /*
//   Object
//   - Create With New Keyword new Object();
// */

// let user = new Object({
//   age: 20,
// });

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";

// user.sayHello = function () {
//   return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());




// //   Search
// //   - Strict Mode
// // */

// console.log(this);
// console.log(this === window);

// myVar = 100;

// console.log(window.myVar);
// console.log(this.myVar);

// function sayHello() {
//   console.log(this);
//   return this;
// }
// sayHello();

// console.log(sayHello() === window);

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// let user = {
//   age: 38,
//   ageInDays: function () {
//     console.log(this);
//     return this.age * 365;
//   },
// };

// console.log(user.age);
// console.log(user.ageInDays());


// // creat object 

// let user1 = {
//   name:`Mustafa`,

//   getName:function(){
//     return `Hi ${this.name}`;
//   }
// }

// let user2 = Object.create(user1);
// user2.name = `Talbi`; // edit
// user2.age = 21; // put
// console.log(user2.getName()); // Hi Talbi


//  do not care
// let user2 = Object.create(user1);
// user2.name = `ahmed`
// console.log(user.getName());



// // damj l objects

// let a1 = {
//   num1:1,
//   hello:function(){
//     return `hello`;
//   }
// }

// let a2 = {
//   num2:2
// }
// let a3 = {
//   num3:3
// }

// let a4 = Object.assign(a1,a2,a3,{
//   num4:4
// });
// a4.num1 = 10;
// a4.r = 100;

// console.log(a4);






// DOM // Document Object Model


/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
//   ------ images
//   ------ forms
//   ------ links
// */

// let myIdElement = document.getElementById("my-div");
// let myTagElements = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let myQueryElement = document.querySelector(".my-span");
// let myQueryAllElement = document.querySelectorAll(".my-span");

// console.log(myIdElement);
// console.log(myTagElements[1]);
// console.log(myClassElement[0]);
// console.log(myQueryElement);
// console.log(myQueryAllElement[0]);

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);

// let myElement = document.querySelector(".js")
// console.log(myElement.innerHTML); // JavaScript <span>div</span> &lt;span&gt;
// console.log(myElement.textContent); // JavaScript div <span>


// myElement.innerHTML = "text from <span>Main.js</span> File"
// myElement.textContent = "text from <span>Main.js</span> File"

// document.images[0].src = "https://google.com"
// document.images[0].alt = "Alternate"
// document.images[0].title = "picture"
// document.images[0].id = "pic"
// document.images[0].className = "img"



// let myLink = document.querySelector(".link")

// console.log(myLink.getAttribute("class"))
// console.log(myLink.getAttribute("href"))

// myLink.setAttribute("href", "https://twitter.com")
// myLink.setAttribute("title", "twitter")

// // /*
// //   DOM [Check Attributes]
// //   - Element.attributes
// //   - Element.hasAttribute
// //   - Element.hasAttributes
// //   - Element.removeAttribute
// // */

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log(`Not Found`);
// }

// if (myP.hasAttributes()) {
//   console.log(`Has Attributes`);
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()) {
//   console.log(`Has Attributes`);
// } else {
//   console.log(`Div Has No Attributes`);
// }


// // // l html khas y kon khawi

// // /*
// //   DOM [Create Elements]
// //   - createElement
// //   - createComment
// //   - createTextNode
// //   - createAttribute
// //   - appendChild
// */

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "Testing");

// // // Append Comment To Element
// myElement.appendChild(myComment);

// // // Append Text To Element
// myElement.appendChild(myText);

// // // Append Element To Body
// document.body.appendChild(myElement);


// // /*
// //   DOM [Create Elements]
//   - Practice Product With Heading And Paragraph
// */

// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");


// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// // Add Heading Text
// myHeading.appendChild(myHeadingText);

// // Add Heading To Main Element
// myMainElement.appendChild(myHeading);

// // Add Paragraph Text
// myParagraph.appendChild(myParagraphText);

// // Add Paragraph To Main Element
// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";

// document.body.appendChild(myMainElement);


// // /*s
// //   DOM [Deal With Childrens]
// //   - children
// //   - childNodes
// //   - firstChild
// //   - lastChild
// //   - firstElementChild
// //   - lastElementChild
// // */

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);

// /*
// //   DOM [Events]
// //   - Use Events On HTML
// //   - Use Events On JS
// //   --- onclick
// //   --- oncontextmenu
// //   --- onmouseenter
// //   --- onmouseleave

// //   --- onload
// //   --- onscroll
// //   --- onresize

// //   --- onfocus
// //   --- onblur
// //   --- onsubmit
// // */

// let myBtn = document.getElementById("btn");

// myBtn.onmouseleave = function () {
//   console.log("Clicked");
// };

// window.onresize = function () {
//   console.log("Scroll");
// };


// // /*
// //   DOM [Events]
// //   - Validate Form Practice
// //   - Prevent Default
//  */

// let userInput = document.querySelector("[name='user']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = (e) => {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;
//   }

//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// }; 


// // /*
// //   DOM [Events Simulation]
// //   - click
// //   - focus
// //   - blur
// // */

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function () {
//   two.focus();
// };

// one.onblur = function () {
//   document.links[0].click();
// };

// // /*
// //   DOM [Class List]
// //   - classList
// //   --- length
// //   --- contains
// //   --- item(index)
// //   --- add
// //   --- remove
// //   --- toggle
// // */

// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("osama"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));

// element.onclick = function () {
//   element.classList.toggle("show");
// };

// // // css 
// // // matnsach tnchae file css
// let element = document.getElementById("my-div");

// element.style.color = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight:bold; color:green; opacity:0.9";

// element.style.removeProperty("color");
// element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].rules[0].style.removeProperty("line-height");
// document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");

/*
// //   DOM [Deal With Elements]
// //   - before [Element || String]
// //   - after [Element || String]
// //   - append [Element || String]
// //   - prepend [Element || String]
// //   - remove
// // */

// // let element = document.getElementById("my-div");
// // let createdP = document.createElement("p");

// // element.remove();

// // // /*
// // //   DOM [Traversing]
// // //   - nextSibling
// // //   - previousSibling
// // //   - nextElementSibling
// // //   - previousElementSibling
// // //   - parentElement
// // // */

// let span = document.querySelector(".two");

// console.log(span.parentElement);

// span.onclick = function () {
//   span.parentElement.remove();
// }

// // // /*
// // //   DOM [Cloning]
// // //   - cloneNode(Deep)
// // // */

// let juiP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// myP.id = `${myP.id}-clone`;

// myDiv.appendChild(myP);

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//   for (let i = 1; i <= 100; i++) {
//     console.log(`Hi I am the persone ${i}`);
//     if (i === 994) {
//       break;
//     }
//   }
// };

// // /*
// //   DOM [Add Event Listener]
// //   - addEventListener
// //   - Use Without On
// //   - Attach Multiple Events
// //   - Error Test

// //   Search
// //   - Capture & Bubbling JavaScript
// //   - removeEventListener
// // */

// let jicP = document.querySelector("p");

// jicP.onclick = one;
// jicP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama"; 

// jicP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// jicP.addEventListener("click", one);
// jicP.addEventListener("click", two);


// myP.addEventListener("click", "String"); // Error

// myP.onclick = function () {
//   let newP = myP.cloneNode(true);
//   newP.className = "clone";
//   document.body.appendChild(newP);
// };

// // let cloned = document.querySelector(".clone"); // Error

// // cloned.onclick = function () {
// //   console.log("Iam Cloned");
// // };

// document.addEventListener("click", function (e) {
//   if (e.target.className === "clone") {
//     console.log("Iam Cloned");
//   }
// });



// BOM 

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

// let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

// console.log(promptMsg);


// /*
//   BOM [Browser Object Model]
//   - setTimeout(Function, Timeout, Additional Params)
//   - clearTimeout(Identifier)
// */

// setTimeout(() => {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

// let btn = document.querySelector("button");

// btn.onclick = function () {
//   clearTimeout(counter);
// };

// let counter = setTimeout(sayMsg, 3000, "Osama", 38);


// // //
/*
BOM [Browser Object Model]
- setInterval(Function, Millseconds, Additional Params)
- clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(1);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

// let div = document.querySelector("div");

// function countdown() {
// div.innerHTML -= 1;
// if (div.innerHTML === "0") {
//   clearInterval(counter);
// }
// }

// let counter = setInterval(countdown, 1000);



/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

// console.log(location);
// console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

// location.replace('https://google'); // kaymsah l history li 9bl
// location.assign('https://google'); // kaykhli lhistory 


/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

// setTimeout(() => {
//     window.open("", "_self", "", false);
//   }, 2000);

// setTimeout(function () {
//   window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
// }, 2000);


/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

// console.log(history); 

/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 1000,
//   top: 2000,
//   behavior: "smooth"
// });


/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

// let btn = document.querySelector("button");

// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };

// btn.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// };

// /*
//   BOM [Browser Object Model]
//   Local Storage
//   - setItem
//   - getItem
//   - removeItem
//   - clear
//   - key

//   Info
//   - No Expiration Time
//   - HTTP And HTTPS
//   - Private Tab
// */

// // Set
// window.localStorage.setItem("color", "#F00");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

// // Get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// Remove One 
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
// console.log(window.localStorage.key(0));

// Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);


/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
// //     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
// //     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
// //     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });


// Destructuring 


/*
// Destructuring
// " is a JavaScript expression that allows us to extract data from arrays,
//   objects, and maps and set them into new, distinct variables. "
// - Destructuring Array
// */

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a = "A", b, c, d, e = "Osama"] = myFriends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // console.log(myFriends[4]);

// let [, y, , z] = myFriends;

// console.log(y);
// console.log(z);


// /*
//   Destructuring
//   - Destructuring Array Advanced Examples
// // */

// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// // console.log(myFriends[3][2][1]);

// // let [, , , [a, , [, b]]] = myFriends;

// let [, , , [a, , [, b]]] = myFriends;

// console.log(a); // Shady
// console.log(b); // Gamal


// /*
//   Destructuring
//   - Destructuring Array => Swapping Variables
// */

// let book = "Video";
// let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

// [book, video] = [video, book];

// console.log(book);
// console.log(video);

// // // /*
// // //   Destructuring
// // //   - Destructuring Object
// // // */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
// // const { theName, theAge, theCountry } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);



// /*
//   Destructuring
//   - Destructuring Object
//   --- Naming The Variables
//   --- Add New Property
//   --- Nested Object
//   --- Destructuring The Nested Object Only
// */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   theCountry,
//   theColor: co = "Red",
//   skills: { html: h, css },
// } = user;

// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My CSS Skill Progress Is ${css}`);

// const { html: skillOne, css: skillTwo } = user.skills;

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);

// /*
//   Destructuring
//   - Destructuring Function Parameters
// */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`Your Name Is ${n}`);
//   console.log(`Your Age Is ${a}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }

// // /*
// //   Destructuring
// //   - Destructuring Mixed Content
// // */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   skills: [, , three],
//   addresses: { egypt: e },
// } = user;

// console.log(`Your Name Is: ${n}`);
// console.log(`Your Age Is: ${a}`);
// console.log(`Your Last Skill Is: ${three}`);
// console.log(`Your Live In: ${e}`);



// let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
// [a, , , , e] = myNumbers

// console.log(a * e); // 5



// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here
// [a, b, c ,[d, e , [f, g]]] = mySkills

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// // Write Your Destructuring Assignment Here
// [c, , , , , , , a,b ,] = arr1.concat(arr2,arr3)

// console.log(arr1.concat(arr2,arr3));

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed 

// const member = { 
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };

// // Write Your Destructuring Assignment Here
// ({age:a, working:w, country:c , hobbies:[h1,h3]} = member )

// if(w === false){
//   console.log("My Age Is 30 And Iam Not Working");
// } else {
//   console.log("anything");
// } 

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// // I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming


// set and map

/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
// */

// let myData = [1, 1, 1, 2, 3, "A"];
// // let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// // let myUniqueData = new Set();

// // myUniqueData.add(1).add(1).add(1);
// // myUniqueData.add(2).add(3).add("A");

// console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

// console.log(myData);
// console.log(myUniqueData);

// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]);

// // myUniqueData.delete(2);
// console.log(myUniqueData.delete(2));

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// myUniqueData.clear();

// console.log(myUniqueData);
// console.log(myUniqueData.size);


/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

// console.log(mySet);

// // Size
// console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// // Values + Keys [Alias For Values]
// let iterator = mySet.keys();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// // // forEach

// mySet.forEach((el) => console.log(el));

// console.log("#".repeat(20));

// // // Type Of Data

// let myws = new WeakSet([{ A: 1, B: 2 }]);

// console.log(myws); 

// weakset in the end is means if data does not matter or does not have excebility then 
// weakset come here to cancel the garbage of data.



/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//   10: "Number",
//   "10": "String",
// };

// console.log(myNewObject[10]);

// console.log("@@@@@".repeat(6))

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({a: 1, b: 2}, "Object");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("####");

// console.log(myNewObject);
// console.log(myNewMap);



// let myMap = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "Boolean"],
// ]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

// console.log(myMap);

// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));
// console.log("####");

// console.log(myMap.has("Name"));
// console.log("####");

// console.log(myMap.size);

// console.log(myMap.delete("Name"));

// console.log(myMap.size);

// myMap.clear();

// console.log(myMap.size);


/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

// let mapUser = { theName: "Elzero" };

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");

// mapUser = null; // Override The Reference

// console.log(myMap);

// console.log("-".repeat(20));
// console.log("-".repeat(20));
// console.log("-".repeat(20));

// let wMapUser = { theName: "Elzero" };

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "Object Value");

// wMapUser = null; // Override The Reference

// console.log(myWeakMap);

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/


// console.log(Array.from("Osama"));
// console.log(
//   Array.from("12345", function (n) {
//     return +n + +n;
//   })
// );

// console.log(Array.from("12345", (n) => +n + +n));

// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// console.log(Array.from(mySet));

// // console.log([...new Set(myArray)]); // Future

// function af() {
//   return Array.from(arguments);
// }

// console.log(af("Osama","Talbi", "Ahmed", "sayed", 1, 2, 3));


// // /*
//   Array Methods
//   - Array.copyWithin(Target, Start => Optional, End => Optional)
//   "Copy Part Of An Array To Another Location in The Same Array"
//   -- Any Negative Value Will Count From The End
//   -- Target
//   ---- Index To Copy Part To
//   ---- If At Or Greater Than Array Length Nothing Will Be Copied
//   -- Start
//   ---- Index To Start Copying From
//   ---- If Ommited = Start From Index 0
//   -- End
//   ---- Index To End Copying From
//   ---- Not Including End
//   ---- If Ommited = Reach The End
// */

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// // myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// // myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// // myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

// // myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

// console.log(myArray);



/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let myNumber = 10;

// // let check = nums.some(function (e) {
// //   // console.log("Test")
// //   return e > 5;
// // });

// // let check = nums.some(function (e) {
// //   return e > this;
// // }, myNumber);

// // let check = nums.some((e) => e > 5);

// console.log(check); 



// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }

// console.log(checkValues(nums, 20));
// console.log(checkValues(nums, 5));

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let range = {
//   min: 10,
//   max: 20,
// };

// let checkNumberInRange = nums.some(function (e) {
//   // console.log(this.min);
//   // console.log(this.max);
//   return e >= this.min && e <= this.max;
// }, range);

// console.log(checkNumberInRange);

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   50: "Place 3",
//   40: "Place 4",
// };

// let mainLocation = 15;

// let locationsArray = Object.keys(locations);

// console.log(locationsArray);

// let locationArrayNumbers = locationsArray.map((n) => +n);

// console.log(locationArrayNumbers);

// let check = locationArrayNumbers.every(function (e) {
//   return e > this;
// }, mainLocation);

// console.log(check);


/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

// console.log("Osama");
// console.log(..."Osama");
// console.log([..."Osama"]);

// // Concatenate Arrays

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];
// // let allArrays = myArray1.concat(myArray2)
// console.log(allArrays);

// // Copy Array

// let copiedArray = [...myArray1];
// console.log(copiedArray);

// // Push Inside Array

//   let allFriends = ["Osama", "Ahmed", "Sayed"];
//   let thisYearFriends = ["Sameh", "Mahmoud"];

//   allFriends.push(...thisYearFriends);

// console.log(allFriends);

// Use With Math Object

// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(...myNums));

// // Spread With Objects => Merge Objects

// let objOne = {
//   a: 1,
//   b: 2,
// };
// let objTwo = {
//   c: 3,
//   d: 4,
// };

// console.log({ ...objOne, ...objTwo, e: 5 });



/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// console.log(Math.max(...n1)*[...n1,...n2].length); // 210

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// let chekFriends = new Set(myFriends);

// console.log(chekFriends);
// // Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']



// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };

//  MyNew = new Map([
//   ["username", "Osama"],
//   ["role", "Admin"],
//   ["country", "Egypt"],
// ]);

// console.log(MyNew);
// console.log(MyNew.size);
// console.log(MyNew.delete("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true


// let theName = "Elzero";

// let num = [...theName];
// console.log(num)

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']


// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// // let merg = [...numsOne, ...numsTwo];
// let merg = [numsOne.concat(numsTwo)];

// console.log(merg)

// Needed Output
// [1, 2, 3, 4, 5, 6]


// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// let chars1 = chars.copyWithin(3

// console.log(chars1)
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']


// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// let chars1 = chars.copyWithin(3)
// console.log(chars1)

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']





// Regular Expression

/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/

// let str1 = '10 20 100 1000 5000';
// let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

// let invalidEmail = 'Osama@@@gmail....com';
// let validEmail = 'o@nn.sa';

// let ip = '192.168.2.1'; // IPv4

// let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://.elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=asdasdasd';



/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive (halat al a7rof) doesn't care about capital or not
  g => global (take u all words that u chek)
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

// let myString = "Hello Elzero Web School I Love elzero";

// let regex = /elzero/ig;

// console.log(myString.match(regex));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

// let tld = "Com Net Org Info Code Io";
// let tldRe = /(info|org|io)/ig;
// console.log(tld.match(tldRe));

// let nums = "12345678910";
// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));

// let notNums = "12345678910";
// let notNsRe = /[^0-2]/g;
// console.log(notNums.match(notNsRe));

// let specialNums = "1!2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));

// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /Os[5-9]Os/g;
// console.log(practice.match(practiceRe));


// /*
//   Regular Expression

//   Ranges

//   - Part 1
//   (X|Y) => X Or Y
//   [0-9] => 0 To 9
//   [^0-9] => Any Character Not 0 To 9
//   Practice

//   - Part 2
//   [a-z]
//   [^a-z]
//   [A-Z]
//   [^A-Z]
//   [abc]
//   [^abc]

// */

// let myString = "AaBbcdefG123!234%^&*";


// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;


// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let numsAndSpecials = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;


// console.log(myString.match(atozSmall));
// console.log(myString.match(NotAtozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotAtozCapital));
// console.log(myString.match(aAndcAnde));
// console.log(myString.match(NotaAndcAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(numsAndSpecials));
// console.log(myString.match(specials));


// /*
//   Regular Expression
//   Character Classes
//   . => matches any character, except newline or other line terminators.
//   \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
//   \W => matches Non word characters
//   \d => matches digits from 0 to 9.
//   \D => matches non-digit characters.
//   \s => matches whitespace character.
//   \S => matches non whitespace character.
// */

// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let dot = /./g;
// let word = /\w/g;
// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(valid));

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
 */

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let re = /(\bspam|spam\b)/ig;
// console.log(names.match(re));

// console.log(re.test(names));
// console.log(/(\bspam|spam\b)/ig.test("Osama"));
// console.log(/(\bspam|spam\b)/ig.test("1Spam"));
// console.log(/(\bspam|spam\b)/ig.test("Spam1"));


// /*
//   Regular Expression

//   Quantifiers
//   n+    => One Or More
//   n*    => zero or more
//   n?    => zero or one
// */

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// // let mailsRe = /\w+@\w+.(com|net)/ig;
// let mailsRe = /\w+@\w+.\w+/ig;
// console.log(mails.match(mailsRe));

// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
// let numsRe = /0\d*0/ig;
// console.log(nums.match(numsRe));

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlsRe));


// /*
//   Regular Expression

//   Quantifiers
//   n{x}   => Number of
//   n{x,y} => Range
//   n{x,}  => At Least x
// */


// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S


// /*
//   Regular Expression

//   Quantifiers
//   $  => End With Something
//   ^  => Start With Something
//   ?= => Followed By Something
//   ?! => Not Followed By Something
// */

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/lz$/ig.test(names));
// console.log(/^\d/ig.test(names));

// console.log(names.match(/\d\w{5}(?=Z)/ig));
// console.log(names.match(/\d\w{8}(?!Z)/ig));

/*
  Regular Expression

  - replace
  - replaceAll
*/

// let txt = "We Love Programming And @ Because @ Is Amazing";

// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));

// let re = /@/ig;
// console.log(txt.replace(re, "JavaScript"));
// console.log(txt.replaceAll(/@/ig, "JavaScript"));


/*
  Regular Expression
  - Input Form Validation Practice
*/

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneInputRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//   let validationResult = phoneInputRe.test(phoneInput);
//   if (validationResult === false) {
//     return false;
//   }
//   return true;
// }


// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// console.log(ip.match(/\w+/ig));


// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// console.log(specialNames.match(/os\d*o/ig))
// // Output
// ['Os10O', 'OsO', 'Os100O'

// let phone = "+(995)-123 (4567)";

// console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig)); // '+(995)-123 (4567)'



// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{2}\s\d{2}\s\d{2,4}/ig; // Write Pattern Here 

// // let re = /\d{2}\/\d{2}\/\d{2,4}/ig; // Write Pattern Here

// // let re = /\d{2}\s\-\s\d{2}\s\-\s\d{2,4}/ig; // Write Pattern Here 

// // // let re = /\d{2}\s\-\s|\/\d{2}\s\-\s|\/\d{2,4}/ig; // Write Pattern Here 

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"


// let url1 = 'talbi.org';
// let url2 = 'http://talbi.org';
// let url3 = 'https://talbi.org';
// let url4 = 'https://www.talbi.org';
// let url5 = 'https://www.talbi.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?(www.)?\w+.\w+(:\w+\/\w+\?\w+=\d+&\w+=\w+)?/ig; // Write Your Pattern Here 

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));




// // DOM Challenge

// let header = document.createElement("header");
// let logo = document.createElement("div");
// let logoText = document.createTextNode("Elzero");
// let menu = document.createElement("ul");
// let home = document.createElement("li");
// let about = document.createElement("li");
// let service = document.createElement("li");
// let contact = document.createElement("li");
// let homeText = document.createTextNode("home");
// let aboutText = document.createTextNode("about");
// let serviceText = document.createTextNode("service");
// let contactText = document.createTextNode("contact");
// let content = document.createElement("div");

// //================= start header ===================
// header.className = "website-head";
// header.style.cssText = "display: flex; justify-content: space-between; align-items: center; background-color: rgb(245 245 245); padding: 10px";
// header.appendChild(logo);
// header.appendChild(menu);
// // logo
// logo.className = "logo";
// logo.setAttribute("title", "website logo");
// logo.style = "font-weight: bold; font-size: 25px; color: green"
// logo.appendChild(logoText);
// // menu
// menu.className = "menu";
// menu.style.cssText = "list-style: none; display: flex; justify-content: space-evenly; padding: 0";
// home.style = "margin-right: 10px; text-transform: capitalize";
// about.style = "margin-right: 10px; text-transform: capitalize";
// contact.style = "margin-right: 10px; text-transform: capitalize";
// service.style = "margin-right: 10px; text-transform: capitalize";
// home.appendChild(homeText);
// about.appendChild(aboutText);
// contact.appendChild(contactText);
// service.appendChild(serviceText);
// menu.appendChild(home);
// menu.appendChild(about);
// menu.appendChild(service);
// menu.appendChild(contact);
// // ============== start content ============== 
// let numberOfProduct = 15;
// for (let i = 1; i <= numberOfProduct; i++) {
//     let product = document.createElement("div");
//     let productNum = document.createElement("span");
//     let productText = document.createTextNode("product");
//     content.style = "padding: 20px; display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; background-color: #EDECED";
//     content.setAttribute("class", 'content');
//     product.className = "product"
//     product.style = "width: 28%; text-align: center; padding: 20px; background-color: white; border-radius: 10px";
//     productNum.innerText = i;
//     productNum.style = "display: block; margin: 5px; font-size: 25px"
//     content.appendChild(product);
//     product.appendChild(productNum);
//     product.appendChild(productText);
// }
// // ============== start footer ==============
// let footer = document.createElement("footer");
// let copyright = document.createTextNode("Copyright 2022");
// footer.className = "footer";
// footer.style = "background-color: green; text-align: center; padding: 20px; color: white; font-size: 20px; font-weight: bold";
// footer.appendChild(copyright);
// // =================== append child in body =================
// document.body.style = "margin: 0; padding: 0; box-sizing: border-box";
// document.body.appendChild(header);
// document.body.appendChild(content);
// document.body.appendChild(footer);



// // generators and models 





