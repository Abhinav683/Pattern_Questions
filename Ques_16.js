let n = 5;
let str = "";
for (let i = 1; i <=n; i++) {
  for (let j = 0; j < n-1; j++) {
    if(i===1 || i===n || j===0||j===n)
      str+=" "
    else 
    str+="* "
  }
  str += "\n";
 
}
console.log(str);