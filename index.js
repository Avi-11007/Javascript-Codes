console.time('your code took');
console.log("hello console");
// console.log({harry:'this',marks:24});
console.table({harry:'this',marks:24});
console.warn('this is a warning');
const spacing = '8px'; 
const mystyle =  
`padding: ${spacing}; background-color: white; color: blue ; font-style:
italic; border: 1px solid black dotted; font-size: 2em;`; 
console.log('%cCode With Harry', mystyle);
console.timeEnd('your code took');