// const getRunningTotal = (arr) => arr.reduce((acc, num) => {
//     if (acc.length === 0) {
//       return [num];
//     } else {
//       return [...acc, acc[acc.length - 1] + num];
//     }
//   }, []);

  
// console.log(getRunningTotal([1,2,3,4]))


// function greet() {
//     console.log(`Hello, ${this.name}!`);
//   }
  
//   const person = { name: 'John' };


  
//   greet.call(person);

// let s = "the suraj";

// s = s.trim().split(" ")
// let a = ""

// s.localeCompare(()=>{

// })
// console.log(a)





// for(var i = 0; i<3; i++){
//     setTimeout(()=>{
//     console.log(i)
//     },0)
//     }

// let arr  = [1,2,3,4];


// let [f,...rest] = arr

//  let l = rest.length > 0 ? rest.pop() : f

// console.log(f+l)

// let a  = 1;
// (function(){

//     console.log(a)
//     var a  = 2
//     console.log(a)
// })()

// console.log(a)

// const arr = ()=>{
//     console.log(this)
// }

// arr()


// const obj1 = {
//     name: 'Alice',
//     getName: function() {
//       return this.name;
//     }
//   };
  
//   const obj2 = {
//     name: 'Bob'
//   };
  
//   const getName = obj1.getName.bind(obj2);
  
//   console.log(getName());

// let v = "aeiou"

// let s = "abcdedf";
// let l = 0;
// let c  = 0
// let m = -999

// while(l<s.length-1){
//     if(s[l] == "a" || s[l] == "e" || s[l] == "i" || s[l] == "o" || s[l] == "u" && s[l+1] != "a" || s[l+1] != "e" || s[l+1] != "i" || s[l+1] != "o" || s[l+1] != "u"){
//         c++
//     }else{
//         c = 0
//     }
//     if(c > m){
//         m = c
//     }
// l++
// }

// console.log(m)

// let s = 'aabbc';
// let st = []
// for(let i = 0; i<s.length; i++){

//     while(st.length && st[st.length-1] == s[i]){
//         st.pop()
//     }

//     if(st.length == 0 || st[st.length-1] == s[i] ){
//         st.push(s[i])
//     }



// }

// console.log(st.join(" "))

// [c]
// i = a a b b    