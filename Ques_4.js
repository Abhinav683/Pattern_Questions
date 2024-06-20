let n = 5;
let str = "";
for (let i = 0; i <=n; i++) {
  for (let j = 0; j <= 2*n; j++) {
    if(j>=n-i&&j<=n+i)
    str+= "*";
    else
    str+=" "
  }
  str += "\n";
}
console.log(str);