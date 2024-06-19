let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n-i+1; j++) {
    
    str+= j+1;

  }
  str += "\n";
}
console.log(str);