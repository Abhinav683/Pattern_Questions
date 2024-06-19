let n = 5;
let str = "";
for (let i = 0; i <= n; i++) {
  for (let j = 0; j < 2*n-1; j++) {
    if(j>i-1 && j<2*n-i-1)
    str+= "*";
    else
    str+=" "
  }
  str += "\n";
}
console.log(str);