let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < 2*n-i; j++) {
    if(j<n-i )
    str+= " ";
    else
    str+="* "

  }
  str += "\n";
}
console.log(str);